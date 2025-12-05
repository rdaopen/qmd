"use client";

import { Suspense, useEffect, useState } from "react";
import { getReleases } from "../lib/releases";
import type { Release } from "../lib/releases";
import ReleasesList from "./ReleasesList";
import { Loader2 } from "lucide-react";

export default function Releases() {
  const [releases, setReleases] = useState<Release[]>([]);

  useEffect(() => {
    getReleases().then((r) => setReleases(r || []));
  }, []);

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
          Releases
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Browse previous versions and download binaries or assets for each
          release.
        </p>
      </div>
      <Suspense
        fallback={
          <Loader2 className="h-8 w-8 animate-spin text-primary-start" />
        }
      >
        <ReleasesList releases={releases} />
      </Suspense>
    </div>
  );
}
