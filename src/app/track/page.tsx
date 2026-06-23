"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Search, 
  MapPin, 
  Calendar, 
  Package, 
  Truck, 
  MessageSquare, 
  AlertCircle,
  CheckCircle2,
  Clock,
  ChevronRight,
  TrendingUp,
  User
} from "lucide-react";

// Separate search parsing component for Next.js Suspense compatibility
function TrackingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const queryCode = searchParams.get("code") || "";
  const [orderCode, setOrderCode] = useState(queryCode);
  const [searchCode, setSearchCode] = useState(queryCode);
  const [errorMsg, setErrorMsg] = useState("");
  const [orderData, setOrderData] = useState<any>(null);

  // Mock data for the demo code CWZ-1042
  const mockOrderCWZ1042 = {
    code: "CWZ-1042",
    product: "Apple iPhone 15 Pro Max (256GB, Natural Titanium)",
    store: "Apple Store US",
    customer: "Samuel Olabode",
    dateOrdered: "June 12, 2026",
    estimatedDelivery: "June 25 - June 28, 2026",
    carrier: "Cart with Zainy Luxury Cargo",
    trackingNum: "CWZ-TX94021-US",
    destination: "Lekki Phase 1, Lagos, Nigeria",
    timeline: [
      { status: "Request Received", date: "June 12, 2026 - 10:24 AM", desc: "Order details submitted by client, quote calculated.", state: "completed" },
      { status: "Payment Confirmed", date: "June 12, 2026 - 02:45 PM", desc: "Naira payment confirmed via bank transfer. Order locked in.", state: "completed" },
      { status: "Processing", date: "June 14, 2026 - 09:00 AM", desc: "Item purchased from Apple Store. Received at US warehouse and checked.", state: "completed" },
      { status: "Shipped", date: "June 18, 2026 - 04:30 PM", desc: "Departed US sorting facility via air cargo. In transit to Lagos, Nigeria.", state: "active" },
      { status: "Delivered", date: "Pending", desc: "Awaiting arrival in Lagos, clearing, and local dispatcher handoff.", state: "pending" }
    ]
  };

  // Mock generator for user custom codes
  const generateCustomOrder = (code: string) => {
    return {
      code: code,
      product: "Your Requested Custom Item",
      store: "International Retailer",
      customer: "Valued Customer",
      dateOrdered: "Today",
      estimatedDelivery: "10-14 Business Days",
      carrier: "Cart with Zainy Standard Cargo",
      trackingNum: `CWZ-TX${Math.floor(10000 + Math.random() * 90000)}-INTL`,
      destination: "Lagos, Nigeria",
      timeline: [
        { status: "Request Received", date: "Just Now", desc: "Your order details have been received. Please click 'Contact Agent' to lock in your payment.", state: "completed" },
        { status: "Payment Confirmed", date: "Pending", desc: "Waiting for bank transfer or card payment confirmation.", state: "active" },
        { status: "Processing", date: "Pending", desc: "We purchase your items from the source site.", state: "pending" },
        { status: "Shipped", date: "Pending", desc: "Package leaves our UK/US warehouse for Lagos.", state: "pending" },
        { status: "Delivered", date: "Pending", desc: "Handover to dispatch rider in Nigeria.", state: "pending" }
      ]
    };
  };

  useEffect(() => {
    if (searchCode) {
      const cleanCode = searchCode.trim().toUpperCase();
      if (!cleanCode.startsWith("CWZ-")) {
        setErrorMsg("Invalid tracking format. Code must start with 'CWZ-' (e.g. CWZ-1042).");
        setOrderData(null);
      } else {
        setErrorMsg("");
        if (cleanCode === "CWZ-1042") {
          setOrderData(mockOrderCWZ1042);
        } else {
          setOrderData(generateCustomOrder(cleanCode));
        }
      }
    } else {
      setOrderData(null);
      setErrorMsg("");
    }
  }, [searchCode]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderCode) {
      router.push(`/track?code=${orderCode.trim().toUpperCase()}`);
      setSearchCode(orderCode);
    }
  };

  return (
    <div className="mx-auto max-w-4xl">
      {/* Search Bar Container */}
      <div className="bg-cream-100 border border-gold-400/5 p-6 rounded-md shadow-sm mb-8">
        <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-3.5 h-4.5 w-4.5 text-gold-600" />
            <input
              type="text"
              placeholder="Enter Order Code (e.g. CWZ-1042)"
              value={orderCode}
              onChange={(e) => setOrderCode(e.target.value)}
              className="w-full bg-cream-50 border border-gold-400/25 rounded-sm pl-12 pr-4 py-3 text-sm font-mono tracking-wider focus:outline-none focus:border-burgundy-700"
            />
          </div>
          <button
            type="submit"
            className="rounded-sm bg-burgundy-700 hover:bg-burgundy-600 text-cream-50 px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-colors border border-gold-400/10"
          >
            Track Status
          </button>
        </form>

        {errorMsg && (
          <p className="mt-3 text-xs text-burgundy-700 flex items-center gap-1.5 font-medium">
            <AlertCircle className="h-4 w-4 shrink-0" />
            {errorMsg}
          </p>
        )}

        {!searchCode && (
          <p className="mt-3 text-xs text-onyx-600">
            💡 Try tracking our sample order using code: <span className="font-mono font-bold text-burgundy-700 cursor-pointer" onClick={() => { setOrderCode("CWZ-1042"); setSearchCode("CWZ-1042"); router.push("/track?code=CWZ-1042"); }}>CWZ-1042</span>.
          </p>
        )}
      </div>

      {/* Tracking Card */}
      {orderData && (
        <div className="space-y-6">
          
          {/* Summary Card */}
          <div className="bg-onyx-950 text-cream-200 border border-gold-400/15 p-6 sm:p-8 rounded-md shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(90,24,39,0.25),transparent_40%)]" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between border-b border-gold-400/10 pb-6 mb-6">
              <div>
                <span className="text-[10px] font-semibold tracking-widest text-gold-400 uppercase">
                  Active Shipment
                </span>
                <h2 className="font-mono text-2xl font-bold tracking-wider text-cream-50 mt-1">
                  {orderData.code}
                </h2>
              </div>
              <div className="mt-4 md:mt-0 flex flex-col md:items-end">
                <span className="text-xs text-cream-300 uppercase tracking-wider font-semibold">
                  Carrier / Shipway
                </span>
                <span className="text-sm text-gold-300 font-medium mt-0.5">
                  {orderData.carrier} ({orderData.trackingNum})
                </span>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-3 text-sm">
              <div className="flex items-start space-x-3">
                <Package className="h-5 w-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs text-cream-400 uppercase font-semibold">Product Description</h4>
                  <p className="mt-1 font-medium text-cream-50">{orderData.product}</p>
                  <p className="text-xs text-cream-300 mt-0.5">from {orderData.store}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs text-cream-400 uppercase font-semibold">Estimated Arrival</h4>
                  <p className="mt-1 font-medium text-cream-50">{orderData.estimatedDelivery}</p>
                  <p className="text-xs text-cream-300 mt-0.5">Ordered on {orderData.dateOrdered}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs text-cream-400 uppercase font-semibold">Local Destination</h4>
                  <p className="mt-1 font-medium text-cream-50">{orderData.destination}</p>
                  <p className="text-xs text-cream-300 mt-0.5">Recipient: {orderData.customer}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="bg-cream-100 border border-gold-400/5 p-6 sm:p-10 rounded-md shadow-sm">
            <h3 className="font-serif text-xl font-bold text-onyx-900 mb-8 border-b border-gold-400/10 pb-3">
              Shipment Status Timeline
            </h3>

            <div className="flow-root">
              <ul className="-mb-8">
                {orderData.timeline.map((step: any, idx: number) => {
                  const isCompleted = step.state === "completed";
                  const isActive = step.state === "active";
                  const isLast = idx === orderData.timeline.length - 1;

                  return (
                    <li key={idx}>
                      <div className="relative pb-8">
                        {/* Line */}
                        {!isLast && (
                          <span
                            className={`absolute left-5 top-5 -ml-px h-full w-0.5 ${
                              isCompleted ? "bg-burgundy-700" : "bg-gold-400/25"
                            }`}
                            aria-hidden="true"
                          />
                        )}
                        
                        <div className="relative flex items-start space-x-3">
                          {/* Dot / Icon */}
                          <div>
                            <span
                              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-transform duration-300 ${
                                isCompleted
                                  ? "bg-burgundy-700 border-burgundy-700 text-cream-50"
                                  : isActive
                                  ? "bg-cream-100 border-gold-500 text-gold-600 scale-110 shadow-md shadow-gold-500/10"
                                  : "bg-cream-50 border-gold-400/20 text-gold-400/40"
                              }`}
                            >
                              {isCompleted ? (
                                <CheckCircle2 className="h-5 w-5 text-gold-400" />
                              ) : isActive ? (
                                <Clock className="h-5 w-5 text-gold-600 animate-pulse" />
                              ) : (
                                <Package className="h-4 w-4" />
                              )}
                            </span>
                          </div>

                          {/* Content */}
                          <div className="min-w-0 flex-1 pt-1.5 pl-2">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                              <p
                                className={`text-sm font-semibold uppercase tracking-wider ${
                                  isCompleted
                                    ? "text-onyx-900"
                                    : isActive
                                    ? "text-gold-700"
                                    : "text-onyx-600/50"
                                }`}
                              >
                                {step.status}
                              </p>
                              <span className="text-xs text-onyx-600 font-mono">
                                {step.date}
                              </span>
                            </div>
                            <p className="mt-1 text-xs sm:text-sm text-onyx-700 leading-relaxed">
                              {step.desc}
                            </p>
                          </div>

                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Quick Action Button */}
            <div className="mt-8 border-t border-gold-400/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-xs text-onyx-600 text-center sm:text-left">
                Have questions about this status? Reach out to your personal shopper.
              </span>
              <a
                href={`https://wa.me/2347062987229?text=Hello%20Zainy,%20I%20have%20a%20question%20about%20my%20order%20${orderData.code}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-sm bg-gradient-to-r from-gold-400 to-gold-500 text-onyx-950 px-6 py-2.5 text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                <MessageSquare className="mr-2 h-4 w-4 shrink-0" />
                Contact Concierge
              </a>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default function TrackOrder() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-onyx-950 py-12 px-4 border-b border-gold-400/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(90,24,39,0.25),transparent_40%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="text-xs font-semibold tracking-widest text-gold-400 uppercase">
            Order Status
          </span>
          <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-bold text-cream-50">
            Track Shipment & Clearing
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-cream-300 max-w-lg mx-auto">
            Input your personal concierge tracking code to see the transit updates of your international package.
          </p>
        </div>
      </section>

      {/* Main Track Section */}
      <section className="flex-1 bg-cream-50 py-12 px-4 sm:px-6 lg:px-8">
        <Suspense fallback={
          <div className="text-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold-500 mx-auto"></div>
            <p className="mt-4 text-sm text-onyx-700">Loading tracking engine...</p>
          </div>
        }>
          <TrackingContent />
        </Suspense>
      </section>

      <Footer />
    </div>
  );
}
