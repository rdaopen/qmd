import type { Release } from "../lib/releases";
import { Download, Calendar, Tag } from 'lucide-react';

export default function ReleasesList({ releases }: { releases: Release[] }) {
  if (!releases || releases.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center border rounded-lg bg-card text-muted-foreground">
        <p>No releases found at the moment.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {releases.map((r) => (
        <div key={r.tag_name} className="overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
          <div className="p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold leading-none tracking-tight">{r.name || r.tag_name}</h2>
                <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Tag className="h-3.5 w-3.5" />
                    <span>{r.tag_name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{new Date(r.published_at).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {r.assets?.map((a) => (
                  <a
                    key={a.name}
                    href={a.browser_download_url}
                    className="inline-flex h-9 items-center justify-center rounded-md bg-green-400 px-4 text-sm font-medium text-white shadow transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {a.name}
                  </a>
                ))}
              </div>
            </div>
            {r.body && (
              <div className="mt-4 prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
                <p className="whitespace-pre-wrap">{r.body}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
