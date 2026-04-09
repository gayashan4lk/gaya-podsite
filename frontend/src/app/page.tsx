import Image from "next/image";
import Link from "next/link";
import { podcast } from "@/data/podcast";
import { episodes } from "@/data/episodes";
import FeaturedEpisode from "@/components/FeaturedEpisode";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-purple-950/40 to-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-800/20 via-transparent to-transparent" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-20 text-center md:flex-row md:py-28 md:text-left lg:py-32">
          <div className="flex-1">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {podcast.name}
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-gray-300 md:text-xl">
              {podcast.tagline}
            </p>
            <Link
              href="/episodes"
              className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              All Episodes
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
          <div className="relative h-64 w-64 shrink-0 overflow-hidden rounded-2xl shadow-2xl shadow-purple-900/30 sm:h-72 sm:w-72 md:h-80 md:w-80">
            <Image
              src={podcast.coverImageUrl}
              alt={`${podcast.name} cover art`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 256px, 320px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Episode */}
      <FeaturedEpisode episode={episodes[0]} />
    </>
  );
}
