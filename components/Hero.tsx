import Link from 'next/link';
import { Download, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="container grid max-w-7xl items-center gap-8 pb-8 pt-6 md:grid-cols-2 md:py-10 lg:py-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-extrabold leading-tight tracking-tighter md:text-3xl lg:text-4xl">
          Download Media <br className="hidden sm:inline" />
          in Seconds
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
          A modern, feature-rich Windows application for downloading videos and audio from YouTube and other platforms. Built for speed and simplicity.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="#download"
            className="inline-flex h-10 items-center justify-center rounded-md bg-green-400 px-8 text-sm font-medium text-slate-900 shadow transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Now
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative aspect-video w-full max-w-[600px] overflow-hidden rounded-xl border bg-muted/50 shadow-xl">
            {/* Placeholder for app screenshot - using a gradient div for now */}
            <Image src='/down_screen.png' alt="App Screenshot" className='w-full h-full object-cover' width={600} height={400} loading='eager' fetchPriority='high' />
        </div>
      </div>
    </section>
  );
}
