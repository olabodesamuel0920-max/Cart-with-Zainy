"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Plus, 
  Minus, 
  Search, 
  HelpCircle, 
  Sparkles, 
  ShoppingBag, 
  Truck, 
  CreditCard, 
  HeartHandshake 
} from "lucide-react";

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { name: "All", icon: HelpCircle },
    { name: "Ordering & Quotes", icon: ShoppingBag },
    { name: "Shipping & Customs", icon: Truck },
    { name: "Payments & Exchange", icon: CreditCard },
    { name: "Returns & Support", icon: HeartHandshake },
  ];

  const faqs = [
    // Category: Ordering
    {
      id: "ord-1",
      category: "Ordering & Quotes",
      q: "How do I submit an order request?",
      a: "Simply go to our 'Start Order' page, fill in the product details (name, store website, size, color, quantity), paste the URL link, and upload a screenshot if you have one. Submit the form, and it will generate an order code and direct you to WhatsApp to confirm details with your concierge agent."
    },
    {
      id: "ord-2",
      category: "Ordering & Quotes",
      q: "Can I buy from stores that don't ship internationally?",
      a: "Yes! That is exactly what our concierge service is for. We buy items on your behalf using our local billing addresses and warehouses in the US, UK, and Europe, and ship them directly to Nigeria."
    },
    {
      id: "ord-3",
      category: "Ordering & Quotes",
      q: "Is there a limit to how many items I can add to a single order?",
      a: "No, there is no limit. You can group multiple items from the same store, or even request products from completely different stores. We will bundle them and calculate a unified quote for you."
    },
    // Category: Shipping
    {
      id: "shp-1",
      category: "Shipping & Customs",
      q: "How long does shipping take from the UK/US to Nigeria?",
      a: "Standard air cargo takes between 7-14 business days from the date your package arrives at our international sorting hub. Shipping times may vary slightly based on flight schedules and destination cities in Nigeria."
    },
    {
      id: "shp-2",
      category: "Shipping & Customs",
      q: "Who handles customs and import support in Lagos?",
      a: "We coordinate with local logistics partners to provide customs/import support and airport handling. We aim to guide shipments through customs smoothly, providing you with a clear upfront estimate before confirmation."
    },
    {
      id: "shp-3",
      category: "Shipping & Customs",
      q: "Do you deliver outside Lagos?",
      a: "Yes, we ship nationwide! We deliver directly to doorsteps in Lagos, Abuja, Port Harcourt, Ibadan, and other states in Nigeria using secure local logistics partners."
    },
    // Category: Payments
    {
      id: "pay-1",
      category: "Payments & Exchange",
      q: "What payment methods do you accept?",
      a: "We accept secure Naira bank transfers directly to our corporate bank account. Once your Naira payment is confirmed, we immediately convert it to execute purchases from the merchant store."
    },
    {
      id: "pay-2",
      category: "Payments & Exchange",
      q: "Why is the Naira quote different from the direct exchange rate?",
      a: "Our Naira quotes are designed as upfront estimates, covering international transaction markups, international shipping, and customs/import support. Your final locked-in quote is confirmed via WhatsApp before payment."
    },
    // Category: Returns
    {
      id: "ret-1",
      category: "Returns & Support",
      q: "Can I return items if they don't fit or are damaged?",
      a: "Because we act as your checkout concierge, returns are subject to the merchant store's return policy. If you receive a damaged item, we will assist you in contacting the retailer and managing the return cargo process where possible."
    },
    {
      id: "ret-2",
      category: "Returns & Support",
      q: "How do I check my order status?",
      a: "You can track your order live using the 'Track Order' page on our website by inputting the unique tracking code (e.g. CWZ-1042) generated when you started your order request."
    }
  ];

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
      const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            faq.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-onyx-950 py-12 px-4 border-b border-gold-400/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(90,24,39,0.25),transparent_40%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="text-xs font-semibold tracking-widest text-gold-400 uppercase">
            Support Desk
          </span>
          <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-bold text-cream-50">
            Frequently Asked Questions
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-cream-300 max-w-lg mx-auto">
            Find answers to commonly asked questions about our luxury concierge shipping, payments, and shopping policy.
          </p>
        </div>
      </section>

      {/* FAQ Center Grid */}
      <section className="flex-1 bg-cream-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          
          {/* Search Box */}
          <div className="relative mb-10">
            <Search className="absolute left-4 top-3.5 h-4.5 w-4.5 text-gold-600" />
            <input
              type="text"
              placeholder="Search questions or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-cream-100 border border-gold-400/25 rounded-sm pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-burgundy-700"
            />
          </div>

          {/* Categories Slider/Tabs */}
          <div className="flex flex-wrap items-center justify-start gap-2 mb-10 overflow-x-auto pb-2 scrollbar-thin">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => {
                    setSelectedCategory(cat.name);
                    setActiveFaq(null);
                  }}
                  className={`inline-flex items-center space-x-2 rounded-full px-5 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300 whitespace-nowrap border ${
                    isSelected
                      ? "bg-burgundy-750 text-cream-50 border-gold-400"
                      : "bg-cream-100 text-onyx-700 border-gold-400/10 hover:border-gold-400/30"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4 bg-cream-100 border border-gold-400/5 p-6 sm:p-10 rounded-md shadow-sm">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = activeFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="border-b border-gold-400/10 pb-4 last:border-none last:pb-0"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="flex w-full items-center justify-between py-4 text-left font-serif text-lg font-bold text-onyx-900 hover:text-burgundy-700 transition-colors"
                    >
                      <span className="pr-6">{faq.q}</span>
                      {isOpen ? (
                        <Minus className="h-4 w-4 text-gold-600 shrink-0" />
                      ) : (
                        <Plus className="h-4 w-4 text-gold-600 shrink-0" />
                      )}
                    </button>
                    
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-[300px] opacity-100 mt-2" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-sm leading-relaxed text-onyx-700">
                        {faq.a}
                      </p>
                      <div className="mt-3 inline-flex items-center rounded-full bg-gold-400/5 border border-gold-400/15 px-2.5 py-0.5 text-[10px] font-semibold text-gold-700 uppercase tracking-wider">
                        Category: {faq.category}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12">
                <HelpCircle className="mx-auto h-12 w-12 text-gold-500 mb-3" />
                <h3 className="font-serif text-lg font-bold text-onyx-900">
                  No Questions Found
                </h3>
                <p className="mt-1 text-sm text-onyx-700">
                  We couldn&apos;t find any FAQs matching &ldquo;{searchQuery}&rdquo;. Try using other terms or check a different category.
                </p>
              </div>
            )}
          </div>

          {/* Quick Support Banner */}
          <div className="mt-12 text-center bg-burgundy-900/10 border border-burgundy-950/20 p-8 rounded-md">
            <h3 className="font-serif text-xl font-bold text-burgundy-950">
              Have a custom request or question?
            </h3>
            <p className="mt-2 text-sm text-onyx-750 max-w-lg mx-auto">
              Our concierge team is available to assist you with special imports, commercial orders, or direct quotes.
            </p>
            <div className="mt-6">
              <a
                href="https://wa.me/2347062987229"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-sm bg-burgundy-700 hover:bg-burgundy-600 text-cream-50 px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-colors border border-gold-400/15"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
