"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Catalog" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/blog", label: "Blog" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "font-headline text-lg transition-colors hover:text-primary",
        isActive ? "text-primary font-bold" : "text-foreground/80"
      )}
    >
      {children}
    </Link>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex mx-auto h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/img/logo.png?raw=true"
            alt="J&C Collections Logo"
            width={100}
            height={100}
            className="object-contain md:w-25 md:h-25 w-30 h-30"
          />
          <span className="font-headline text-2xl font-bold text-primary">
            J&C Collections
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-background p-0 flex flex-col"
            >
              <SheetHeader className="flex flex-row items-center justify-between p-4 border-b">
                <SheetTitle asChild>
                  <Link href="/" onClick={() => setIsMenuOpen(false)}>
                    <span className="font-headline text-2xl font-bold text-primary">
                      J&C Collections
                    </span>
                    <VisuallyHidden>Home</VisuallyHidden>
                  </Link>
                </SheetTitle>
                {/* This SheetClose is part of Radix's Dialog, which Sheet is built on. It will find the trigger and close the sheet. */}
                {/* The duplicate X button was inside the nav below. */}
              </SheetHeader>
              <nav className="flex flex-col gap-6 p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-medium transition-colors hover:text-primary font-headline"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
