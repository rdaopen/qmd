export default function Footer() {
  return (
    <footer className="bg-(--surface) border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-6 text-center text-sm font-medium text-foreground/80">
        <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
          <span>© {new Date().getFullYear()} Quick Media Downloader</span>
          <span className="hidden sm:inline">•</span>
          <a
            href="https://ko-fi.com/mrrda1969"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground hover:underline"
          >
            Support on Ko-fi
          </a>
        </div>
      </div>
    </footer>
  );
}
