import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Quick Media Downloader Logo" className="h-8 w-8 rounded-md" width={32} height={32} />
          <Link href="/" className="font-bold text-xl tracking-tight text-foreground">
            Quick Media Downloader
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/releases" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Versions
          </Link>
          <Link
            href="/#download"
            className="inline-flex h-9 items-center justify-center rounded-md bg-green-400 px-4 text-sm font-medium text-slate-900 shadow transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Download
          </Link>
        </div>
      </div>
    </header>
  );
}
