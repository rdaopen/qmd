import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DownloadSection from "@/components/DownloadSection";
import DonationSection from "@/components/DonationSection";
import { Metadata } from "next";

const baseURL =
  process.env?.NEXT_PUBLIC_BASE_URL || "https://qmd.everything-open.online";

export const metadata: Metadata = {
  title: "Quick Media Downloader",
  description:
    "A modern, feature-rich Windows application for downloading videos and audio from YouTube and other platforms.",
  keywords: [
    "Quick Downloader",
    "QMD",
    "Quick Media Downloader",
    "QMD",
    "Quick Media Downloader",
    "QMD",
    "Youtube downloader",
    "Video downloader",
    "download video",
    "audio downloader",
    "download music",
  ],
  openGraph: {
    title: "Quick Media Downloader",
    description:
      "A modern, feature-rich Windows application for downloading videos and audio from YouTube and other platforms.",
    type: "website",
    url: baseURL,
    siteName: "Quick Media Downloader",
    images: [
      {
        url: `${baseURL}/logo.png`,
        alt: "Quick Media Downloader",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      <Features />
      <DownloadSection />
      <DonationSection />
    </div>
  );
}
