"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const showSolid = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileOpen
          ? "bg-transparent shadow-none"
          : showSolid
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Aura Aquatics"
            width={180}
            height={50}
            className={`h-10 w-auto transition-all ${
              showSolid ? "" : "brightness-0 invert"
            }`}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-ocean-500 ${
                pathname === link.href
                  ? "text-ocean-500"
                  : showSolid
                  ? "text-slate-700"
                  : "text-white/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href={COMPANY.phoneHref}
            className={`text-sm font-semibold transition-colors ${
              showSolid ? "text-navy" : "text-white"
            }`}
          >
            {COMPANY.phone}
          </a>
          <Button href="/careers" size="sm">
            Apply Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-[70] flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              mobileOpen
                ? "translate-y-2 rotate-45 bg-white"
                : showSolid
                ? "bg-navy"
                : "bg-white"
            }`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              mobileOpen
                ? "opacity-0"
                : showSolid
                ? "bg-navy"
                : "bg-white"
            }`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              mobileOpen
                ? "-translate-y-2 -rotate-45 bg-white"
                : showSolid
                ? "bg-navy"
                : "bg-white"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[60] bg-navy md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-2xl font-bold transition-colors ${
                    pathname === link.href
                      ? "text-ocean-400"
                      : "text-white hover:text-ocean-300"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-8 flex flex-col items-center gap-4 border-t border-white/10 pt-8">
                <a
                  href={COMPANY.phoneHref}
                  className="text-lg font-semibold text-white"
                >
                  {COMPANY.phone}
                </a>
                <Button href="/careers" size="lg">
                  Apply Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
