"use client";

interface AudioPlayerProps {
  audioUrl: string;
  title: string;
}

export default function AudioPlayer({ audioUrl, title }: AudioPlayerProps) {
  return (
    <audio
      controls
      src={audioUrl}
      aria-label={title}
      className="w-full"
      preload="none"
    >
      Your browser does not support the audio element.
    </audio>
  );
}
