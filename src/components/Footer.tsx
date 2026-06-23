"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ShieldCheck, HeartHandshake, PlaneTakeoff, Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-gold-400/10 bg-onyx-950 text-cream-200">
      {/* Upper Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Info */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="group flex items-center space-x-2">
              <span className="font-serif text-2xl font-bold tracking-wide text-cream-50 transition-colors duration-300 group-hover:text-gold-400">
                Cart with <span className="text-gold-400 group-hover:text-cream-50">Zainy</span>
              </span>
              <span className="h-2 w-2 rounded-full bg-gold-400"></span>
            </Link>
            <p className="font-sans text-sm leading-relaxed text-cream-300">
              Your premium international shopping concierge. We buy from premium stores in the US, UK, and Europe, and coordinate delivery to your doorstep in Nigeria with import/customs support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold-400">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/start-order" className="hover:text-gold-400 transition-colors">
                  Submit a Request
                </Link>
              </li>
              <li>
                <Link href="/track" className="hover:text-gold-400 transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gold-400 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  Admin Dashboard
                  <span className="inline-flex items-center rounded-full bg-burgundy-700/50 px-1.5 py-0.2 text-[8px] text-gold-300">Demo</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold-400">
              Contact & Support
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex items-center space-x-3">
                <Phone className="h-4.5 w-4.5 text-gold-500 shrink-0" />
                <a href="https://wa.me/2347062987229" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
                  +234 706 298 7229
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4.5 w-4.5 text-gold-500 shrink-0" />
                <a href="mailto:concierge@cartwithzainy.com" className="hover:text-gold-400 transition-colors">
                  concierge@cartwithzainy.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4.5 w-4.5 text-gold-500 mt-0.5 shrink-0" />
                <span className="text-cream-300">
                  Lekki Phase 1, Lagos, Nigeria
                </span>
              </li>
            </ul>
          </div>

          {/* Trust badges */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold-400">
              Concierge Quality
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center p-3 rounded-md bg-onyx-900 border border-gold-400/5 text-center">
                <PlaneTakeoff className="h-5 w-5 text-gold-400 mb-1" />
                <span className="text-[11px] font-medium tracking-wide">Global Shipping Support</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-md bg-onyx-900 border border-gold-400/5 text-center">
                <ShieldCheck className="h-5 w-5 text-gold-400 mb-1" />
                <span className="text-[11px] font-medium tracking-wide">Order Tracking Included</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-md bg-onyx-900 border border-gold-400/5 text-center">
                <Award className="h-5 w-5 text-gold-400 mb-1" />
                <span className="text-[11px] font-medium tracking-wide">WhatsApp-Assisted Checkout</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-md bg-onyx-900 border border-gold-400/5 text-center">
                <HeartHandshake className="h-5 w-5 text-gold-400 mb-1" />
                <span className="text-[11px] font-medium tracking-wide">Client Demo Preview</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-16 border-t border-gold-400/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream-400">
          <p>
            &copy; {new Date().getFullYear()} Cart with Zainy. All rights reserved.
          </p>
          <p className="mt-2 sm:mt-0 text-[10px] tracking-wide text-center uppercase bg-burgundy-900/60 text-gold-300 px-3 py-1 rounded-full border border-gold-400/15">
            This is a Premium Demo Website for Client Preview
          </p>
        </div>
      </div>
    </footer>
  );
}
