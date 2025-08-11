import { Twitter, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-secondary">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 py-8 sm:flex-row">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} J&C Collections. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="#" aria-label="Facebook">
            <Facebook className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
