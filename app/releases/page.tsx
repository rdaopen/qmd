import { Metadata } from "next";
import Releases from "@/components/Releases";

const baseURL =
  process.env?.NEXT_PUBLIC_BASE_URL || "https://qmd.everything-open.online";

export const metadata: Metadata = {
  title: "Releases - Quick Media Downloader",
  description:
    "Browse previous versions and download binaries or assets for each release.",
  keywords: [
    "Quick Downloader",
    "QMD",
    "Quick Media Downloader",
    "QMD",
    "Quick Media Downloader",
    "QMD",
    "Youtube downloader",
    "download qmd",
    "download",
    "qmd version",
    "Video downloader",
    "download video",
    "audio downloader",
    "download music",
  ],
  openGraph: {
    title: "Releases - Quick Media Downloader",
    description:
      "Browse previous versions and download binaries or assets for each release.",
    type: "website",
    url: `${baseURL}/releases`,
    siteName: "Quick Media Downloader",
    images: [
      {
        url: `${baseURL}/logo.png`,
        alt: "Quick Media Downloader",
      },
    ],
  },
};

export default async function ReleasesPage() {
  return (
    <section className="container max-w-7xl py-8 md:py-12 lg:py-24">
      <Releases />
    </section>
  );
}
