"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!openDropdown) return;
    const handlePointerDown = (e: PointerEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKey);
    };
  }, [openDropdown]);

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
        <div ref={dropdownRef} className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) =>
            "children" in link && link.children ? (
              (() => {
                const isOpen = openDropdown === link.href;
                const hasOverview = link.children.some((c) => c.href === link.href);
                return (
                  <div key={link.href} className="relative group">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown(isOpen ? null : link.href)
                      }
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      className={`text-sm font-medium transition-colors hover:text-ocean-500 inline-flex items-center gap-1 cursor-pointer ${
                        pathname.startsWith(link.href)
                          ? "text-ocean-500"
                          : showSolid
                          ? "text-slate-700"
                          : "text-white/90"
                      }`}
                    >
                      {link.label}
                      <svg
                        className={`h-3.5 w-3.5 opacity-60 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 transition-all duration-200 ${
                        isOpen
                          ? "opacity-100 visible"
                          : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                      }`}
                    >
                      <div className="bg-white rounded-xl shadow-lg border border-slate-100 py-2 min-w-[220px]">
                        {!hasOverview && (
                          <Link
                            href={link.href}
                            onClick={() => setOpenDropdown(null)}
                            className={`block px-4 py-2.5 text-sm font-semibold border-b border-slate-100 transition-colors hover:bg-ocean-50 hover:text-ocean-600 ${
                              pathname === link.href
                                ? "text-ocean-500 bg-ocean-50/50"
                                : "text-navy"
                            }`}
                          >
                            {link.label} Overview
                          </Link>
                        )}
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className={`block px-4 py-2.5 text-sm transition-colors hover:bg-ocean-50 hover:text-ocean-600 ${
                              pathname === child.href
                                ? "text-ocean-500 bg-ocean-50/50"
                                : "text-slate-700"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()
            ) : (
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
            )
          )}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-navy md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-6">
              {NAV_LINKS.map((link) => (
                <div key={link.href} className="flex flex-col items-center gap-3">
                  <Link
                    href={link.href}
                    className={`text-2xl font-bold transition-colors ${
                      pathname === link.href
                        ? "text-ocean-400"
                        : "text-white hover:text-ocean-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {"children" in link && link.children && (
                    <div className="flex flex-col items-center gap-2">
                      {link.children.filter((child) => child.href !== link.href).map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`text-base font-medium transition-colors ${
                            pathname === child.href
                              ? "text-ocean-400"
                              : "text-slate-400 hover:text-ocean-300"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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
