import Image from "next/image";
import { Episode } from "@/types";
import AudioPlayer from "@/components/AudioPlayer";

function formatDate(dateString: string): string {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

interface FeaturedEpisodeProps {
  episode: Episode;
}

export default function FeaturedEpisode({ episode }: FeaturedEpisodeProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-purple-400">
        Latest Episode
      </h2>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-gray-900 md:flex">
        <div className="relative aspect-square w-full shrink-0 md:w-72 lg:w-80">
          <Image
            src={episode.coverImageUrl}
            alt={episode.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 320px"
          />
          <span className="absolute left-4 top-4 rounded-full bg-purple-600 px-3 py-1 text-xs font-bold text-white">
            #{episode.episodeNumber}
          </span>
        </div>
        <div className="flex flex-col justify-between p-6 md:p-8">
          <div>
            <h3 className="mb-3 text-2xl font-bold text-white lg:text-3xl">
              {episode.title}
            </h3>
            <p className="mb-4 leading-relaxed text-gray-400">
              {episode.snippet}
            </p>
            <div className="mb-6 flex flex-wrap gap-4 text-sm text-gray-500">
              <time dateTime={episode.publicationDate}>
                {formatDate(episode.publicationDate)}
              </time>
              <span>{episode.durationMinutes} min</span>
            </div>
          </div>
          <AudioPlayer audioUrl={episode.audioUrl} title={episode.title} />
        </div>
      </div>
    </section>
  );
}
