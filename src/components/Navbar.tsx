"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag, Landmark, ShieldCheck, BadgeAlert } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Start Order", href: "/start-order" },
    { name: "Track Order", href: "/track" },
    { name: "FAQs", href: "/faq" },
    { name: "Admin Dashboard", href: "/admin", isDemo: true },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gold-400/10 bg-onyx-950/85 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center space-x-2">
              <span className="font-serif text-2xl font-bold tracking-wide text-cream-50 transition-colors duration-300 group-hover:text-gold-400">
                Cart with <span className="text-gold-400 group-hover:text-cream-50">Zainy</span>
              </span>
              <span className="h-2 w-2 rounded-full bg-gold-400 animate-pulse"></span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-sans text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                    isActive
                      ? "text-gold-400"
                      : "text-cream-200 hover:text-gold-400"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {link.name}
                    {link.isDemo && (
                      <span className="inline-flex items-center rounded-full bg-burgundy-700/60 px-1.5 py-0.5 text-[9px] font-semibold text-gold-300 border border-gold-400/20">
                        Demo
                      </span>
                    )}
                  </span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gold-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Start Order Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              href="/start-order"
              className="inline-flex items-center justify-center rounded-sm bg-gradient-to-r from-burgundy-700 to-burgundy-600 px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-cream-50 border border-gold-400/20 transition-all duration-300 hover:border-gold-400 hover:shadow-lg hover:shadow-gold-400/10 hover:translate-y-[-1px] active:translate-y-[0px]"
            >
              Start Order
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-cream-200 hover:bg-burgundy-800/40 hover:text-gold-400 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[380px] opacity-100 border-t border-gold-400/10" : "max-h-0 opacity-0"
        } bg-onyx-950/95`}
        id="mobile-menu"
      >
        <div className="space-y-2 px-4 py-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-md px-3 py-2 text-base font-medium tracking-wide uppercase transition-colors ${
                  isActive
                    ? "bg-burgundy-800/50 text-gold-400"
                    : "text-cream-200 hover:bg-burgundy-900/30 hover:text-gold-400"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{link.name}</span>
                  {link.isDemo && (
                    <span className="inline-flex items-center rounded-full bg-burgundy-700 px-2 py-0.5 text-[10px] font-semibold text-gold-300 border border-gold-400/20">
                      DEMO PREVIEW
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
          <div className="pt-4 border-t border-gold-400/10">
            <Link
              href="/start-order"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center rounded-sm bg-gradient-to-r from-burgundy-700 to-burgundy-600 px-4 py-3 text-base font-semibold uppercase tracking-wider text-cream-50 border border-gold-400/20"
            >
              Start Order
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
