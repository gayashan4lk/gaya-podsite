import Link from "next/link";
import { podcast } from "@/data/podcast";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      {/* Podcast overview */}
      <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        About {podcast.name}
      </h1>
      <p className="mb-8 text-lg leading-relaxed text-gray-300">
        {podcast.description}
      </p>

      {/* Mission */}
      <blockquote className="mb-12 border-l-4 border-purple-500 pl-6 text-lg italic leading-relaxed text-gray-400">
        {podcast.missionStatement}
      </blockquote>

      {/* Host */}
      <div className="mb-12 rounded-2xl border border-white/10 bg-gray-900 p-6 md:p-8">
        <h2 className="mb-1 text-sm font-semibold uppercase tracking-widest text-purple-400">
          Your Host
        </h2>
        <p className="mb-4 text-2xl font-bold text-white">{podcast.hostName}</p>
        <p className="leading-relaxed text-gray-400">{podcast.hostBio}</p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/episodes"
          className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-950"
        >
          Browse Episodes
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
