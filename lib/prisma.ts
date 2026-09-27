// lib/prisma.ts
// Prisma client for prosopocracy. Connects to the SAME database as Veltistos.
//
// IMPORTANT: prisma/schema.prisma in this project is a COPY of the Veltistos
// schema. Only ever run `npx prisma generate` here. NEVER run
// `prisma migrate` or `prisma db push` from this project — all database
// changes are made from C:\veltistos only.

import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
