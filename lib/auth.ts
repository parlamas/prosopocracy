// lib/auth.ts
// Shared-account login: checks credentials against the Veltistos User table.
// Same rules as Veltistos (src/lib/auth.ts): email or username, bcrypt,
// banned and unverified accounts rejected. Sessions are separate per site
// (different domains), so this project has its own AUTH_SECRET.

import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { prisma } from './prisma';

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/agora/login',
  },
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        identifier: { label: 'Email or username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.identifier || !credentials?.password) return null;

        const identifier = credentials.identifier as string;

        const user = await prisma.user.findFirst({
          where: {
            OR: [
              { email: { equals: identifier, mode: 'insensitive' } },
              { username: { equals: identifier, mode: 'insensitive' } },
            ],
          },
        });

        if (!user) return null;
        if (user.banned) return null;
        if (!user.emailVerified) return null;

        const valid = await bcrypt.compare(credentials.password as string, user.passwordHash);
        if (!valid) return null;

        return {
          id: user.id,
          name: user.username,
          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    session({ session, token }) {
      if (token.id) session.user.id = token.id as string;
      return session;
    },
  },
});
