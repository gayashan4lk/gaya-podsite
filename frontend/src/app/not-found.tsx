import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-purple-400">
        404
      </p>
      <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Page Not Found
      </h1>
      <p className="mb-8 max-w-md text-gray-400">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might
        have been moved or no longer exists.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-950"
      >
        Back to Home
      </Link>
    </section>
  );
}
