export interface Episode {
  id: number;
  episodeNumber: number;
  title: string;
  description: string;
  snippet: string;
  publicationDate: string; // YYYY-MM-DD
  durationMinutes: number;
  coverImageUrl: string;
  audioUrl: string;
}

export interface Podcast {
  name: string;
  tagline: string;
  description: string;
  hostName: string;
  hostBio: string;
  missionStatement: string;
  coverImageUrl: string;
}
