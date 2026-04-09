import { episodes } from "@/data/episodes";
import EpisodeCard from "@/components/EpisodeCard";

export default function EpisodesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <h1 className="mb-10 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        All Episodes
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </section>
  );
}
