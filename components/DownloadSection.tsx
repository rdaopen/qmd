import { getReleases } from '@/lib/releases';
import { Download, Loader2 } from 'lucide-react';
import { Suspense } from 'react';

export default async function DownloadSection() {
  const releases = await getReleases();
  const latest = releases[0];

  return (
    <section id="download" className="container max-w-7xl py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-232 flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-bold text-xl leading-[1.1] sm:text-3xl md:text-4xl">
          Get Quick Media Downloader
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          A modern Windows app for downloading video and audio from popular platforms.
        </p>
        
        <div className="w-full max-w-3xl mt-8">
          <Suspense fallback={<Loader2 className="h-8 w-8 animate-spin text-primary-start" />}>
          {latest ? (
            <div className="overflow-hidden rounded-xl bg-card text-card-foreground shadow-lg transition-all">
              <div className="bg-muted/30 p-6">
                <div className="flex flex-col items-center gap-4">
                  <h3 className="text-2xl font-bold">Latest Release: {latest.name || latest.tag_name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Published on {new Date(latest.published_at).toLocaleDateString()}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mt-2">
                    {latest.assets &&
                      latest.assets.map((a) => (
                        <a
                          key={a.name}
                          href={a.browser_download_url}
                          className="inline-flex h-12 items-center justify-center rounded-md bg-green-400 px-8 text-sm font-medium text-slate-900 shadow transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Download className="mr-2 h-5 w-5" />
                          Download {a.name}
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
             <div className="p-8 text-center border rounded-lg bg-muted/20">
                <p className="text-muted-foreground">Unable to load latest release information.</p>
             </div>
          )}
          </Suspense>
        </div>
      </div>
    </section>
  );
}
