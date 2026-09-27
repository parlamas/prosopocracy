// app/agora/login/page.tsx
// Sign in to the agora with a Veltistos account.
import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { AuthError } from 'next-auth';
import '../../styles.css';
import '../../../components/AgoraContent.css';
import './login.css';
import { auth, signIn, signOut } from '../../../lib/auth';
import { HOMEPAGE_TRANSLATIONS } from '../../../lib/homepage-translations';

export const metadata: Metadata = {
  title: 'Sign in · Agora · Prosopocracy',
};

const FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=IBM+Plex+Sans:wght@400;600&family=Newsreader:ital,wght@0,600;0,700;1,400&display=swap';

const VELTISTOS_REGISTER = 'https://veltistos.com/auth/register';

async function login(formData: FormData) {
  'use server';
  try {
    await signIn('credentials', {
      identifier: String(formData.get('identifier') ?? ''),
      password: String(formData.get('password') ?? ''),
      redirectTo: '/agora',
    });
  } catch (error) {
    if (error instanceof AuthError) redirect('/agora/login?error=1');
    throw error; // success is a redirect, which must be re-thrown
  }
}

async function logout() {
  'use server';
  await signOut({ redirectTo: '/agora/login' });
}

export default async function AgoraLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const session = await auth();
  const home = HOMEPAGE_TRANSLATIONS.en!;

  return (
    <div className="prosopoRoot" lang="en" dir="ltr">
      <link rel="stylesheet" href={FONTS_HREF} precedence="default" />

      <header className="masthead">
        <div className="wrap mastheadInner">
          <Link href="/" className="wordmark agoraWordmark">
            <b>{home.wordmarkNative}</b> · {home.wordmarkSecondary}
          </Link>
          <nav className="nav">
            <Link href="/agora">Agora</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="wrap">
            <div className="sectionLabel">Agora</div>

            {session?.user ? (
              <>
                <h1 className="sectionTitle">You are signed in</h1>
                <p className="sectionIntro">
                  Signed in as <strong>{session.user.name}</strong>.
                </p>
                <form action={logout} className="agoraAuthActions">
                  <button type="submit" className="ctaBtn">
                    Sign out
                  </button>
                </form>
              </>
            ) : (
              <>
                <h1 className="sectionTitle">Sign in</h1>
                <p className="sectionIntro">
                  Use your Veltistos account: the same username or email, and the same password.
                </p>

                {error && (
                  <p className="agoraAuthError">
                    Sign-in failed. Check your username or email and password. If you registered
                    recently, make sure you have verified your email on Veltistos.
                  </p>
                )}

                <form action={login} className="agoraAuthForm">
                  <label>
                    Email or username
                    <input name="identifier" type="text" autoComplete="username" required />
                  </label>
                  <label>
                    Password
                    <input name="password" type="password" autoComplete="current-password" required />
                  </label>
                  <button type="submit" className="ctaBtn">
                    Sign in
                  </button>
                </form>

                <p className="ctaNote">
                  No account yet? <a href={VELTISTOS_REGISTER}>Create one on Veltistos</a>, verify
                  your email, then sign in here.
                </p>
              </>
            )}
          </div>
        </section>
      </main>

      <footer className="prosopoFooter">
        <div className="wrap">
          <p>{home.footerText}</p>
        </div>
      </footer>
    </div>
  );
}
