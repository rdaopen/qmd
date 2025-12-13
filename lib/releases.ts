type Asset = {
  name: string;
  browser_download_url: string;
  size?: number;
};

export type Release = {
  tag_name: string;
  name: string;
  published_at: string;
  body?: string;
  assets?: Asset[];
};

export async function getReleases(): Promise<Release[]> {
  // prefer GitHub API
  try {
    const gh = await fetch(
      "https://api.github.com/repos/rdaopen/quick_downloader/releases"
    );
    if (gh.ok) {
      const data = await gh.json();
      return data;
    }
  } catch {
    // fallback to static file
  }

  try {
    const r = await fetch("/releases.json");
    if (r.ok) return await r.json();
  } catch {
    // both failed
  }

  return [];
}
