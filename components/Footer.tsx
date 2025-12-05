export default function Footer() {
  return (
    <footer className="bg-(--surface) border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-6 text-center text-sm font-medium text-foreground/80">
        © {new Date().getFullYear()} Quick Media Downloader
      </div>
    </footer>
  );
}
