import { Heart } from "lucide-react";

export default function DonationSection() {
  return (
    <section
      id="donate"
      className="container max-w-7xl py-8 md:py-12 lg:py-24 bg-muted/30"
    >
      <div className="mx-auto flex max-w-232 flex-col items-center justify-center gap-4 text-center">
        <div className="flex items-center justify-center rounded-full bg-red-100 p-3 dark:bg-red-900/20">
          <Heart className="h-6 w-6 text-red-500 fill-red-500" />
        </div>
        <h2 className="font-bold text-xl leading-[1.1] sm:text-3xl md:text-4xl">
          Support the Project
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Quick Media Downloader is free and open source. If you find it useful,
          consider supporting its development. Your donation helps keep the
          project alive and ensures regular updates.
        </p>
        <div className="flex flex-col gap-4 mt-6">
          <a
            href="https://ko-fi.com/mrrda1969"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#FF5E5B,45%,#FF8C8A,55%,#FF5E5B)] bg-size-[200%_100%] px-8 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <Heart className="mr-2 h-5 w-5 fill-white" />
            Buy me a Coffee
          </a>
        </div>
      </div>
    </section>
  );
}
