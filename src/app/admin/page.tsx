"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Users, 
  Package, 
  DollarSign, 
  MessageSquare, 
  Search, 
  SlidersHorizontal,
  BadgeAlert,
  ArrowUpRight,
  TrendingUp,
  Mail,
  Truck,
  CheckCircle,
  Clock,
  ShieldCheck,
  Menu,
  ExternalLink
} from "lucide-react";

export default function AdminPreview() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const stats = [
    { label: "Total Orders", value: "28", icon: Package, change: "+12.5% this wk", color: "text-gold-500 bg-gold-400/5 border-gold-400/10" },
    { label: "Pending Quotes", value: "3", icon: Clock, change: "Quotes due today", color: "text-burgundy-700 bg-burgundy-700/5 border-burgundy-700/10" },
    { label: "Processing", value: "7", icon: ShieldCheck, change: "Ordered from stores", color: "text-blue-600 bg-blue-600/5 border-blue-600/10" },
    { label: "In Transit", value: "11", icon: Truck, change: "Air Cargo active", color: "text-amber-600 bg-amber-600/5 border-amber-600/10" },
    { label: "Delivered", value: "7", icon: CheckCircle, change: "Closed requests", color: "text-emerald-600 bg-emerald-600/5 border-emerald-600/10" },
  ];

  const sampleOrders = [
    {
      code: "CWZ-1042",
      name: "Samuel Olabode",
      phone: "2348039284102",
      item: "iPhone 15 Pro Max (256GB)",
      store: "Apple Store US",
      value: "₦1,850,000",
      status: "Shipped",
      date: "June 12, 2026",
    },
    {
      code: "CWZ-8491",
      name: "Chidi Nwachukwu",
      phone: "2349021948512",
      item: "Air Jordan 1 Low (Size 10)",
      store: "Nike US",
      value: "₦195,000",
      status: "Pending Quote",
      date: "June 23, 2026",
    },
    {
      code: "CWZ-3942",
      name: "Amara Adebayo",
      phone: "2348123049182",
      item: "Dyson Airwrap Multistyler",
      store: "Sephora UK",
      value: "₦850,000",
      status: "Processing",
      date: "June 20, 2026",
    },
    {
      code: "CWZ-7201",
      name: "Tunde Bakare",
      phone: "2347055910283",
      item: "MacBook Pro M3 (16-inch)",
      store: "Best Buy US",
      value: "₦3,400,000",
      status: "Delivered",
      date: "June 08, 2026",
    },
    {
      code: "CWZ-5110",
      name: "Fatima Bello",
      phone: "2348021029384",
      item: "Chanel Classic Flap Bag",
      store: "Farfetch UK",
      value: "₦9,200,000",
      status: "Payment Confirmed",
      date: "June 21, 2026",
    },
    {
      code: "CWZ-6291",
      name: "Efe Okoro",
      phone: "2349019283745",
      item: "Sony WH-1000XM5 Headphones",
      store: "Amazon US",
      value: "₦480,000",
      status: "Shipped",
      date: "June 16, 2026",
    }
  ];

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "Pending Quote":
        return "bg-burgundy-900/10 text-burgundy-700 border-burgundy-700/20";
      case "Payment Confirmed":
        return "bg-purple-600/10 text-purple-700 border-purple-600/20";
      case "Processing":
        return "bg-blue-600/10 text-blue-700 border-blue-600/20";
      case "Shipped":
        return "bg-amber-600/10 text-amber-700 border-amber-600/20";
      case "Delivered":
        return "bg-emerald-600/10 text-emerald-700 border-emerald-600/20";
      default:
        return "bg-gray-600/10 text-gray-700 border-gray-600/20";
    }
  };

  const filteredOrders = sampleOrders.filter((order) => {
    const matchesStatus = statusFilter === "All" || order.status === statusFilter || 
                          (statusFilter === "Pending" && order.status === "Pending Quote") ||
                          (statusFilter === "Completed" && order.status === "Delivered");
    
    const matchesSearch = order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.item.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesStatus && matchesSearch;
  });

  const getWhatsAppLink = (order: any) => {
    const text = `Hello ${order.name}, this is Cart with Zainy concierge desk regarding your order request ${order.code} for the ${order.item}. We are updating your status to *${order.status}*.`;
    return `https://wa.me/${order.phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Admin Demo Header Banner */}
      <div className="bg-gradient-to-r from-burgundy-800 to-burgundy-950 text-gold-300 border-b border-gold-400/20 px-4 py-3.5 text-center text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2">
        <BadgeAlert className="h-4.5 w-4.5 text-gold-400 shrink-0" />
        <span>Demo Workspace: Admin Preview Dashboard & Mock Pipeline</span>
      </div>

      {/* Header Info */}
      <section className="bg-onyx-950 py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(90,24,39,0.25),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span className="text-xs font-semibold tracking-widest text-gold-400 uppercase">
              Management Portal (Demo Preview)
            </span>
            <h1 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-cream-50">
              Admin Preview Dashboard
            </h1>
            <p className="mt-1 text-xs text-cream-300">
              Review simulated orders, test currency conversions, dispatch statuses, and contact customers via WhatsApp. (Mock Data Pipeline)
            </p>
          </div>
          <div className="flex items-center space-x-2 bg-onyx-900 border border-gold-400/15 rounded-md px-4 py-2 text-cream-100">
            <TrendingUp className="h-4 w-4 text-gold-400" />
            <span className="text-xs font-mono">Conversion (Demo): $1 USD = ₦1,485 NGN</span>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="flex-1 bg-cream-50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-10">
          
          {/* 1. KPI Stats grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-md bg-cream-100 border border-gold-400/5 shadow-sm flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-onyx-700 font-semibold">{stat.label}</span>
                  <div className={`p-2 rounded-sm border ${stat.color.split(" ").slice(1).join(" ")}`}>
                    <stat.icon className={`h-4.5 w-4.5 ${stat.color.split(" ")[0]}`} />
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-2xl font-serif font-bold text-onyx-900">{stat.value}</span>
                  <p className="text-[10px] text-onyx-600 mt-0.5">{stat.change}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 2. Order Table Box */}
          <div className="bg-cream-100 border border-gold-400/5 rounded-md shadow-sm overflow-hidden">
            
            {/* Filtering and Search Controls */}
            <div className="p-6 border-b border-gold-400/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {["All", "Pending", "Processing", "Shipped", "Completed"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setStatusFilter(filter)}
                    className={`px-4 py-2 rounded-sm text-xs font-medium uppercase tracking-wider border transition-all ${
                      statusFilter === filter
                        ? "bg-burgundy-700 text-cream-50 border-gold-400"
                        : "bg-cream-50 text-onyx-700 border-gold-400/5 hover:border-gold-400/20"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="relative max-w-sm w-full">
                <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-gold-600" />
                <input
                  type="text"
                  placeholder="Search code, client, product..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-cream-50 border border-gold-400/25 rounded-sm pl-10 pr-4 py-2 text-xs focus:outline-none focus:border-burgundy-700"
                />
              </div>
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-cream-200 border-b border-gold-400/10 font-sans uppercase tracking-wider text-onyx-700 font-bold">
                    <th className="p-4">Order Code</th>
                    <th className="p-4">Customer</th>
                    <th className="p-4">Requested Item</th>
                    <th className="p-4">Store</th>
                    <th className="p-4">Est. Value</th>
                    <th className="p-4 text-center">Status</th>
                    <th className="p-4">Submission Date</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gold-400/5">
                  {filteredOrders.length > 0 ? (
                    filteredOrders.map((order, idx) => (
                      <tr 
                        key={idx}
                        className="hover:bg-cream-50/50 transition-colors"
                      >
                        <td className="p-4 font-mono font-bold text-burgundy-800">{order.code}</td>
                        <td className="p-4 font-medium text-onyx-900">{order.name}</td>
                        <td className="p-4 text-onyx-800 font-medium max-w-[200px] truncate" title={order.item}>
                          {order.item}
                        </td>
                        <td className="p-4 text-onyx-600">{order.store}</td>
                        <td className="p-4 font-mono font-bold text-onyx-900">{order.value}</td>
                        <td className="p-4 text-center">
                          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold border ${getStatusBadgeClass(order.status)}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="p-4 text-onyx-600">{order.date}</td>
                        <td className="p-4 text-right">
                          <a
                            href={getWhatsAppLink(order)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-sm bg-gradient-to-r from-gold-400 to-gold-500 text-onyx-950 px-3 py-1.5 font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                          >
                            <MessageSquare className="h-3.5 w-3.5 fill-current" />
                            <span>WhatsApp</span>
                          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={8} className="p-8 text-center text-onyx-600">
                        No orders match your search filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div className="bg-cream-200 px-6 py-4 flex items-center justify-between text-[11px] text-onyx-600 border-t border-gold-400/10">
              <span>Showing {filteredOrders.length} of {sampleOrders.length} orders</span>
              <span className="font-mono text-burgundy-700">Cart with Zainy Workspace Console v1.0.0</span>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
