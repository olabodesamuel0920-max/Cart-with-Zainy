"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ArrowRight, 
  Send, 
  FileText, 
  Truck, 
  CheckCircle, 
  ShieldCheck, 
  Percent, 
  Smartphone, 
  HelpCircle,
  Plus,
  Minus,
  Sparkles,
  Search,
  ChevronRight,
  TrendingUp,
  MapPin,
  Clock,
  CreditCard,
  ShieldAlert
} from "lucide-react";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [trackCode, setTrackCode] = useState("");

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const steps = [
    {
      num: "01",
      title: "Submit Details",
      desc: "Paste product links or upload screenshots of the items you wish to purchase.",
      icon: Send,
    },
    {
      num: "02",
      title: "Receive Quote",
      desc: "Get an estimated conversion and Naira shipping quote via WhatsApp support chat.",
      icon: FileText,
    },
    {
      num: "03",
      title: "Confirm Payment",
      desc: "Approve the estimates and initiate transfer to fund the concierge purchase.",
      icon: CreditCard,
    },
    {
      num: "04",
      title: "We Purchase",
      desc: "We verify item details at our sorting facility and coordinate international cargo.",
      icon: ShieldCheck,
    },
    {
      num: "05",
      title: "Track Delivery",
      desc: "Follow status milestones locally from departures to doorstep dispatcher handoff.",
      icon: Truck,
    },
  ];

  const categories = [
    {
      title: "High Fashion & Luxury",
      stores: "Zara, Farfetch, ASOS, Nordstrom",
      tagline: "Designer apparel, shoes, and luxury bags.",
      imageClass: "from-burgundy-950 to-burgundy-800",
      accent: "text-gold-300"
    },
    {
      title: "Tech & Gadgets",
      stores: "Amazon, Apple, Best Buy, eBay",
      tagline: "Laptops, smartphones, audio gear, and parts.",
      imageClass: "from-onyx-950 to-onyx-800",
      accent: "text-gold-300"
    },
    {
      title: "Beauty & Self-Care",
      stores: "Sephora, Ulta, Boots, Cult Beauty",
      tagline: "Premium skincare, makeup, and perfumes.",
      imageClass: "from-burgundy-900 to-onyx-950",
      accent: "text-gold-300"
    },
    {
      title: "Home & Lifestyle",
      stores: "IKEA, Target, Wayfair, West Elm",
      tagline: "Exquisite decor, accents, and accessories.",
      imageClass: "from-onyx-900 to-burgundy-950",
      accent: "text-gold-300"
    }
  ];

  const valueProps = [
    {
      title: "Verified Store Ordering",
      desc: "We assist in purchasing directly from official brand sites and trusted online retailers to help you source genuine products.",
      icon: ShieldCheck
    },
    {
      title: "Transparent Cost Estimates",
      desc: "Get upfront quotes detailing item cost, estimated shipping, customs clearing fees, and local delivery in Nigeria.",
      icon: Percent
    },
    {
      title: "Customs Clearing Support",
      desc: "Our logistics partners manage the clearance process, helping to minimize delays and clearing hassles.",
      icon: Truck
    },
    {
      title: "Dedicated WhatsApp Support",
      desc: "Receive real-time order tracking updates and support directly from a concierge representative via WhatsApp.",
      icon: Smartphone
    }
  ];

  const faqPreview = [
    {
      q: "Which international stores can I purchase from?",
      a: "You can purchase from virtually any trusted online store in the US, UK, and Europe, including Amazon, Apple, Zara, Farfetch, ASOS, Sephora, eBay, and more. If they deliver online, we can shop it for you!"
    },
    {
      q: "How do you calculate the exchange rate?",
      a: "We use competitive daily market exchange rates to generate your quote in Naira. Our quote is fully transparent and all-inclusive—no extra payments will be requested at delivery."
    },
    {
      q: "How long does shipping and delivery take?",
      a: "Standard shipping takes 7-14 business days from when the store delivers the package to our international warehouse. Express options are also available upon request."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-onyx-950 px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        {/* Background luxury highlights */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(90,24,39,0.3),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.05),transparent_40%)]" />
        
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center space-x-1.5 rounded-full bg-burgundy-900/60 px-4 py-1.5 text-xs font-medium text-gold-300 border border-gold-400/25 mb-8 animate-fade-in-up">
            <Sparkles className="h-3.5 w-3.5 text-gold-400" />
            <span>PREMIUM SHOPPING CONCIERGE</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-cream-50 leading-[1.15] mb-6">
            Shop Global. <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
              Stress Less.
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-base sm:text-lg text-cream-200 font-sans leading-relaxed mb-10">
            Purchase quality products from trusted international stores in the US, UK, & Europe. We handle purchasing, customs clearance, global shipping, and direct delivery to your doorstep in Nigeria.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/start-order"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-sm bg-gradient-to-r from-gold-400 to-gold-500 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-onyx-950 transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-gold-400/15 hover:translate-y-[-1px]"
            >
              Start Your Order
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/track"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-sm border border-gold-400/30 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-cream-50 hover:bg-cream-50/5 hover:border-gold-400 transition-all duration-300"
            >
              Track Order
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-cream-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-burgundy-700">
              Seamless Process
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold tracking-tight text-onyx-900">
              How It Works
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-gold-500 rounded-full" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="relative group p-6 rounded-md bg-cream-100 border border-gold-400/5 hover:border-gold-400/20 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="absolute top-6 right-6 font-serif text-3xl font-extrabold text-gold-400/20 group-hover:text-gold-400/45 transition-colors">
                    {step.num}
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-burgundy-700 text-cream-50 mb-5 group-hover:scale-105 transition-transform duration-300">
                    <step.icon className="h-5 w-5 text-gold-400" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-onyx-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-onyx-700">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Categories */}
      <section className="bg-onyx-950 px-4 py-20 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(90,24,39,0.15),transparent_60%)]" />
        
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-400">
              Infinite Possibilities
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold tracking-tight text-cream-50">
              Popular Shopping Categories
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-gold-400 rounded-full" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat, idx) => (
              <div 
                key={idx}
                className="group relative flex flex-col justify-end overflow-hidden rounded-md border border-gold-400/10 p-6 min-h-[220px] transition-all duration-300 hover:border-gold-400/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-burgundy-900/10"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.imageClass} opacity-90 transition-transform duration-500 group-hover:scale-105`} />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/40 to-transparent" />
                
                <div className="relative z-10">
                  <h3 className="font-serif text-xl font-bold text-cream-50 mb-1">
                    {cat.title}
                  </h3>
                  <p className={`text-xs font-semibold ${cat.accent} tracking-wider uppercase mb-2`}>
                    {cat.stores}
                  </p>
                  <p className="text-xs text-cream-200 leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[50px] transition-all duration-500 ease-in-out">
                    {cat.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/start-order"
              className="inline-flex items-center text-sm font-semibold tracking-wider uppercase text-gold-400 hover:text-gold-300 transition-colors"
            >
              Order from any store now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-cream-100 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-burgundy-700">
              The Concierge Difference
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold tracking-tight text-onyx-900">
              Why Choose Cart with Zainy
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-gold-500 rounded-full" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((prop, idx) => (
              <div 
                key={idx}
                className="flex flex-col p-6 rounded-md bg-cream-50 border border-gold-400/5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-burgundy-800/10 text-burgundy-700 mb-5">
                  <prop.icon className="h-5 w-5 text-burgundy-700" />
                </div>
                <h3 className="font-serif text-lg font-bold text-onyx-900 mb-2">
                  {prop.title}
                </h3>
                <p className="text-sm leading-relaxed text-onyx-700">
                  {prop.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Safety Center Section */}
      <section className="bg-burgundy-950 px-4 py-20 sm:px-6 lg:px-8 border-t border-gold-400/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(90,24,39,0.3),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-400">
              Safe & Protected
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold tracking-tight text-cream-50">
              Trust & Handoff Safeguards
            </h2>
            <p className="mt-2 text-sm text-cream-300 max-w-lg mx-auto">
              How we verify orders and safeguard your international purchases.
            </p>
            <div className="mx-auto mt-4 h-1 w-16 bg-gold-400 rounded-full" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 rounded-md bg-burgundy-900/40 border border-gold-400/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold-400/10 text-gold-400 mb-5">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-cream-50 mb-2">
                Hub Inspection Support
              </h3>
              <p className="text-xs leading-relaxed text-cream-300">
                Our sorting warehouse teams verify sizes and product selections against order receipts upon arrival, helping catch merchant packaging mistakes prior to international shipment (subject to retailer return rules).
              </p>
            </div>

            <div className="p-6 rounded-md bg-burgundy-900/40 border border-gold-400/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold-400/10 text-gold-400 mb-5">
                <Truck className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-cream-50 mb-2">
                Reinforced Cargo Padding
              </h3>
              <p className="text-xs leading-relaxed text-cream-300">
                All concierge packages are checked and repacked with protective buffers when consolidated, ensuring fragile boxes and premium goods withstand air cargo transits securely.
              </p>
            </div>

            <div className="p-6 rounded-md bg-burgundy-900/40 border border-gold-400/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold-400/10 text-gold-400 mb-5">
                <Smartphone className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-cream-50 mb-2">
                WhatsApp Shopper Updates
              </h3>
              <p className="text-xs leading-relaxed text-cream-300">
                You are paired directly with a single logistics concierge agent on WhatsApp. They share status pictures, provide estimated tracking times, and coordinate final delivery drop-offs.
              </p>
            </div>
          </div>

          {/* Sandbox note */}
          <div className="mt-12 max-w-2xl mx-auto rounded-sm bg-gold-400/5 border border-gold-400/20 p-4 flex items-start space-x-3 text-gold-300">
            <ShieldAlert className="h-5 w-5 shrink-0 mt-0.5" />
            <p className="text-xs leading-relaxed text-left">
              <strong>Client Demo Notice:</strong> Cart with Zainy is currently presented in sandbox preview mode. All order routing, package verification steps, and status maps demonstrate simulated workflows without real backend database integrations or actual cargo transport.
            </p>
          </div>
        </div>
      </section>

      {/* Instant Order / Track Previews Section */}
      <section className="bg-onyx-950 px-4 py-16 sm:px-6 lg:px-8 border-t border-gold-400/10">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Start Order Preview Card */}
            <div className="p-8 rounded-md bg-onyx-900 border border-gold-400/15 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold tracking-wider text-gold-400 uppercase bg-gold-400/10 px-2.5 py-1 rounded-full">
                  Quick Link
                </span>
                <h3 className="mt-4 font-serif text-2xl font-bold text-cream-50">
                  Ready to start shopping?
                </h3>
                <p className="mt-2 text-sm text-cream-300 leading-relaxed">
                  Fill out our simple concierge form with item names and links. We will immediately review and generate a WhatsApp quote.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/start-order"
                  className="inline-flex w-full items-center justify-center rounded-sm bg-burgundy-700 py-3 text-sm font-semibold uppercase tracking-wider text-cream-50 hover:bg-burgundy-600 transition-colors border border-gold-400/10"
                >
                  Create Request Form
                  <ArrowRight className="ml-2 h-4 w-4 text-gold-400" />
                </Link>
              </div>
            </div>

            {/* Track Order Simulator Card */}
            <div className="p-8 rounded-md bg-onyx-900 border border-gold-400/15 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold tracking-wider text-gold-400 uppercase bg-gold-400/10 px-2.5 py-1 rounded-full">
                  Quick Track
                </span>
                <h3 className="mt-4 font-serif text-2xl font-bold text-cream-50">
                  Track your shipment
                </h3>
                <p className="mt-2 text-sm text-cream-300 leading-relaxed">
                  Check your order status. Use code <span className="text-gold-400 font-semibold font-mono">CWZ-1042</span> to see a premium tracking card in this demo preview.
                </p>
              </div>
              
              <div className="mt-6 flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Code (e.g. CWZ-1042)"
                  value={trackCode}
                  onChange={(e) => setTrackCode(e.target.value)}
                  className="flex-1 bg-onyx-950 border border-gold-400/20 rounded-sm px-4 py-2.5 text-cream-50 text-sm font-mono focus:outline-none focus:border-gold-400"
                />
                <Link
                  href={`/track?code=${trackCode || "CWZ-1042"}`}
                  className="bg-gold-400 hover:bg-gold-500 text-onyx-950 px-4 py-2.5 rounded-sm flex items-center justify-center transition-colors"
                >
                  <Search className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Accordion Preview */}
      <section className="bg-cream-50 px-4 py-20 sm:px-6 lg:px-8 border-t border-gold-400/10">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-burgundy-700">
              Questions & Answers
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-onyx-900">
              Top FAQ Preview
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-12 bg-gold-500 rounded-full" />
          </div>

          <div className="space-y-4">
            {faqPreview.map((faq, idx) => (
              <div 
                key={idx}
                className="border-b border-gold-400/10 pb-4"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between py-3 text-left font-serif text-lg font-semibold text-onyx-900 hover:text-burgundy-700 transition-colors"
                >
                  <span>{faq.q}</span>
                  {activeFaq === idx ? (
                    <Minus className="h-4 w-4 text-gold-600 shrink-0" />
                  ) : (
                    <Plus className="h-4 w-4 text-gold-600 shrink-0" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeFaq === idx ? "max-h-[200px] opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-onyx-700 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/faq"
              className="inline-flex items-center text-sm font-semibold tracking-wider uppercase text-burgundy-700 hover:text-burgundy-600"
            >
              See All FAQs
              <ChevronRight className="ml-1 h-4 w-4 text-gold-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden bg-burgundy-900 px-4 py-20 sm:px-6 lg:px-8 border-t border-gold-400/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream-50 leading-[1.2] mb-6">
            Get Whatever You Want from Overseas, Delivered Safely
          </h2>
          <p className="mx-auto max-w-xl text-sm sm:text-base text-cream-200 mb-8 leading-relaxed">
            Experience the ease of international shopping with premium personal assistance. Get your custom quote within hours.
          </p>
          <Link
            href="/start-order"
            className="inline-flex items-center justify-center rounded-sm bg-gradient-to-r from-gold-400 to-gold-500 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-onyx-950 border border-gold-300/10 hover:opacity-95 shadow-lg shadow-gold-400/5 transition-all duration-300"
          >
            Start Your Concierge Order
            <Sparkles className="ml-2 h-4 w-4 text-onyx-950 animate-pulse" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
