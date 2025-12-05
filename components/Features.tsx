import { Download, Music, List, Layout, History, Clipboard } from 'lucide-react';

const features = [
  {
    title: "High Quality Downloads",
    description: "Support for 4K, 1080p, and other resolutions. Get the best visual experience.",
    icon: Download,
  },
  {
    title: "Audio Extraction",
    description: "Convert videos to high-quality MP3s (up to 320kbps) with a single click.",
    icon: Music,
  },
  {
    title: "Playlist Support",
    description: "Download entire playlists efficiently. No need to download videos one by one.",
    icon: List,
  },
  {
    title: "Modern UI",
    description: "Sleek, dark-themed interface built with CustomTkinter for a premium feel.",
    icon: Layout,
  },
  {
    title: "History Tracking",
    description: "Keep track of your downloads, play them, or open their location directly.",
    icon: History,
  },
  {
    title: "Smart Clipboard",
    description: "Right-click to paste URLs instantly from your clipboard for quick access.",
    icon: Clipboard,
  },
];

export default function Features() {
  return (
    <section id="features" className="container max-w-7xl space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-232 flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-xl leading-[1.1] sm:text-3xl md:text-4xl">
          Features
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Everything you need to download and manage your media.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-5xl md:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <feature.icon className="h-12 w-12 text-primary-start" />
              <div className="space-y-2">
                <h3 className="font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
