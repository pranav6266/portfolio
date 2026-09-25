import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight">This page doesn&apos;t exist.</h1>
      <p className="mt-3 text-muted">The link may be old, or the project may have moved.</p>
      <Link href="/" className="mt-8 inline-block rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bg">
        Go to the home page
      </Link>
    </div>
  );
}
