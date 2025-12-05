
import { Suspense } from "react";
import { getReleases } from "@/lib/releases";
import ReleasesList from "@/components/ReleasesList";
import { Loader2 } from "lucide-react";
import { Metadata } from "next";

const baseURL = process.env?.NEXT_PUBLIC_BASE_URL || "https://qmd.everything-open.online";

export const metadata: Metadata = {
  title: "Releases - Quick Media Downloader",
  description: "Browse previous versions and download binaries or assets for each release.",
  keywords: ["Quick Downloader", "QMD", "Quick Media Downloader", "QMD", "Quick Media Downloader", "QMD", "Youtube downloader", "download qmd", "download", "qmd version", "Video downloader", "download video", "audio downloader", "download music"],
  openGraph: {
    title: "Releases - Quick Media Downloader",
    description: "Browse previous versions and download binaries or assets for each release.",
    type: "website",
    url: `${baseURL}/releases`,
    siteName: "Quick Media Downloader",
    images: [
      {
        url: `${baseURL}/logo.png`,
        alt: "Quick Media Downloader"
      }
    ]
  }
}

export default async function Releases() {

  const releases = await getReleases();

  return (
    <section className="container max-w-7xl py-8 md:py-12 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">Releases</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Browse previous versions and download binaries or assets for each release.
          </p>
        </div>
        

        <Suspense fallback={<Loader2 className="h-8 w-8 animate-spin text-primary-start" />}>
          <ReleasesList releases={releases} />
        </Suspense>
      </div>
    </section>
  );
}
