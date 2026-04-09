import Image from "next/image";
import { Episode } from "@/types";
import AudioPlayer from "@/components/AudioPlayer";

function formatMonthYear(dateString: string): string {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
}

interface EpisodeCardProps {
  episode: Episode;
}

export default function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-white/10 bg-gray-900 transition-colors hover:border-purple-500/30">
      <div className="relative aspect-square w-full">
        <Image
          src={episode.coverImageUrl}
          alt={episode.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-purple-600 px-2.5 py-0.5 text-xs font-bold text-white">
          #{episode.episodeNumber}
        </span>
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-lg font-bold leading-snug text-white">
          {episode.title}
        </h3>
        <p className="mb-3 text-sm leading-relaxed text-gray-400">
          {episode.snippet}
        </p>
        <div className="mb-4 flex flex-wrap gap-3 text-xs text-gray-500">
          <time dateTime={episode.publicationDate}>
            {formatMonthYear(episode.publicationDate)}
          </time>
          <span>{episode.durationMinutes} min</span>
        </div>
        <AudioPlayer audioUrl={episode.audioUrl} title={episode.title} />
      </div>
    </article>
  );
}
