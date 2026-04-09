import { podcast } from "@/data/podcast";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gray-950 py-6">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} {podcast.name}. All rights reserved.
      </div>
    </footer>
  );
}
