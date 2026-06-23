"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ShoppingBag, 
  User, 
  MapPin, 
  FileText, 
  Upload, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  MessageSquare,
  BadgeInfo,
  Clock,
  X,
  Calculator,
  Scale,
  HelpCircle,
  TrendingUp,
  Info
} from "lucide-react";

export default function StartOrder() {
  const [formData, setFormData] = useState({
    productLink: "",
    productName: "",
    storeName: "",
    category: "Fashion & Luxury",
    size: "",
    color: "",
    quantity: "1",
    notes: "",
    fullName: "",
    phoneNumber: "",
    deliveryAddress: "",
    cityState: "",
  });

  const [screenshotName, setScreenshotName] = useState<string | null>(null);
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Calculator States (Demo exchange rates, easily customizable)
  const EXCHANGE_RATES = {
    USD: 1485,
    GBP: 1920
  };
  const [calcInput, setCalcInput] = useState({
    price: "150",
    currency: "USD" as "USD" | "GBP",
    weight: "2.0"
  });

  const calculatedEstimate = React.useMemo(() => {
    const rate = EXCHANGE_RATES[calcInput.currency];
    const retail = parseFloat(calcInput.price) || 0;
    const weightVal = parseFloat(calcInput.weight) || 0;
    
    // Concierge calculations:
    // 10% Service Fee, Shipping rate ($12/kg for USD, £10/kg for GBP)
    const shippingPerKg = calcInput.currency === "USD" ? 12 : 10;
    
    const serviceFeeBase = retail * 0.10;
    const shippingBase = weightVal * shippingPerKg;
    const customsImportSupportBase = retail * 0.05; // 5% Customs/import support estimate
    
    const retailNaira = retail * rate;
    const serviceFeeNaira = serviceFeeBase * rate;
    const shippingNaira = shippingBase * rate;
    const customsNaira = customsImportSupportBase * rate;
    const totalNaira = retailNaira + serviceFeeNaira + shippingNaira + customsNaira;

    return {
      rate,
      retailNaira,
      serviceFeeNaira,
      shippingNaira,
      customsNaira,
      totalNaira
    };
  }, [calcInput]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleScreenshotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setScreenshotName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate Order Code (e.g. CWZ-4821)
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const code = `CWZ-${randomNum}`;
    setGeneratedCode(code);
    setShowModal(true);
  };

  const handleWhatsAppRedirect = () => {
    // Format WhatsApp Summary
    const message = `*CART WITH ZAINY ORDER REQUEST* 🌟
----------------------------------
*Order Code:* ${generatedCode}
*Status:* Quote Pending

*PRODUCT DETAILS*
🛍️ *Name:* ${formData.productName || "Not Specified"}
🏪 *Store:* ${formData.storeName || "Not Specified"}
🔗 *Link:* ${formData.productLink || "None"}
📂 *Category:* ${formData.category}
📏 *Size:* ${formData.size || "N/A"}
🎨 *Color:* ${formData.color || "N/A"}
🔢 *Quantity:* ${formData.quantity}
📸 *Screenshot:* ${screenshotName ? `Uploaded (${screenshotName})` : "None"}

*CUSTOMER INFO*
👤 *Client:* ${formData.fullName}
📞 *Phone:* ${formData.phoneNumber}
📍 *Deliver To:* ${formData.deliveryAddress}, ${formData.cityState}

*NOTES:* ${formData.notes || "None"}
----------------------------------
_Please send this message to receive your Naira quote and payment details._`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2347062987229?text=${encodedText}`;
    
    // Open in a new tab
    window.open(whatsappUrl, "_blank");
    setShowModal(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-onyx-950 py-12 px-4 border-b border-gold-400/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(90,24,39,0.25),transparent_40%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="text-xs font-semibold tracking-widest text-gold-400 uppercase">
            Order Desk
          </span>
          <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-bold text-cream-50">
            Submit Your Shopping Request
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-cream-300 max-w-lg mx-auto">
            Provide the details of the items you want. We will calculate shipping, handling, and duties, and generate your Naira quote.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="flex-1 bg-cream-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Demo Warning Banner */}
          <div className="mb-8 rounded-sm bg-burgundy-900/10 border border-burgundy-900/25 p-4 flex items-start space-x-3 text-burgundy-900">
            <BadgeInfo className="h-5 w-5 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-bold">DEMO MODE:</span> Filling out this form simulates generating a quote request. On submission, a mock tracking code is generated, and a pre-formatted checkout summary will open on WhatsApp.
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Form Column (Spans 2) */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8 bg-cream-100 border border-gold-400/5 p-6 sm:p-10 rounded-md shadow-sm">
                
                {/* 1. Product Information */}
                <div>
                  <h2 className="flex items-center space-x-2 font-serif text-xl font-bold text-onyx-900 border-b border-gold-400/10 pb-2 mb-6">
                    <ShoppingBag className="h-5 w-5 text-burgundy-700" />
                    <span>1. Product Details</span>
                  </h2>
                  
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label htmlFor="productLink" className="block text-xs font-semibold uppercase tracking-wider text-onyx-700 mb-2">
                        Product Link / URL
                      </label>
                      <input
                        type="url"
                        id="productLink"
                        name="productLink"
                        required
                        value={formData.productLink}
                        onChange={handleChange}
                        placeholder="https://example.com/store/item-page"
                        className="w-full bg-cream-50 border border-gold-400/25 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-burgundy-700"
                      />
                    </div>

                    <div>
                      <label htmlFor="productName" className="block text-xs font-semibold uppercase tracking-wider text-onyx-700 mb-2">
                        Product Name
                      </label>
                      <input
                        type="text"
                        id="productName"
                        name="productName"
                        required
                        value={formData.productName}
                        onChange={handleChange}
                        placeholder="e.g. Air Jordan 1 Low"
                        className="w-full bg-cream-50 border border-gold-400/25 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-burgundy-700"
                      />
                    </div>

                    <div>
                      <label htmlFor="storeName" className="block text-xs font-semibold uppercase tracking-wider text-onyx-700 mb-2">
                        Store / Website Name
                      </label>
                      <input
                        type="text"
                        id="storeName"
                        name="storeName"
                        required
                        value={formData.storeName}
                        onChange={handleChange}
                        placeholder="e.g. Nike US"
                        className="w-full bg-cream-50 border border-gold-400/25 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-burgundy-700"
                      />
                    </div>

                    <div>
                      <label htmlFor="category" className="block text-xs font-semibold uppercase tracking-wider text-onyx-700 mb-2">
                        Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full bg-cream-50 border border-gold-400/25 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-burgundy-700"
                      >
                        <option>Fashion & Luxury</option>
                        <option>Electronics & Tech</option>
                        <option>Beauty & Wellness</option>
                        <option>Home & Lifestyle</option>
                        <option>Other / Special Import</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="quantity" className="block text-xs font-semibold uppercase tracking-wider text-onyx-700 mb-2">
                        Quantity
                      </label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        required
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full bg-cream-50 border border-gold-400/25 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-burgundy-700"
                      />
                    </div>

                    <div>
                      <label htmlFor="size" className="block text-xs font-semibold uppercase tracking-wider text-onyx-700 mb-2">
                        Size (optional)
                      </label>
                      <input
                        type="text"
                        id="size"
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                        placeholder="e.g. US 10 / Medium"
                        className="w-full bg-cream-50 border border-gold-400/25 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-burgundy-700"
                      />
                    </div>

                    <div>
                      <label htmlFor="color" className="block text-xs font-semibold uppercase tracking-wider text-onyx-700 mb-2">
                        Color / Shade (optional)
                      </label>
                      <input
                        type="text"
                        id="color"
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                        placeholder="e.g. Black/Red"
                        className="w-full bg-cream-50 border border-gold-400/25 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-burgundy-700"
                      />
                    </div>
                  </div>

                  {/* Upload Screenshot Placeholder */}
                  <div className="mt-6">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-onyx-700 mb-2">
                      Upload Screenshot / Visual Reference (optional)
                    </label>
                    <div className="mt-1 flex justify-center rounded-sm border-2 border-dashed border-gold-400/25 px-6 pt-5 pb-6 bg-cream-50/50 hover:bg-cream-50 transition-colors">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-10 w-10 text-gold-500" />
                        <div className="flex text-xs text-onyx-600">
                          <label
                            htmlFor="screenshot-upload"
                            className="relative cursor-pointer rounded-md font-semibold text-burgundy-700 hover:text-burgundy-600 focus-within:outline-none"
                          >
                            <span>Upload a screenshot</span>
                            <input
                              id="screenshot-upload"
                              name="screenshot"
                              type="file"
                              accept="image/*"
                              className="sr-only"
                              onChange={handleScreenshotChange}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-[10px] text-onyx-600">PNG, JPG up to 10MB</p>
                        <p className="text-[9px] text-gold-600 font-medium">Demo Mode: Uploading a file updates the status locally for this session. Files are not saved to any server.</p>
                        {screenshotName && (
                          <p className="mt-2 text-xs text-emerald-600 font-medium">
                            ✓ Selected: {screenshotName}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Customer & Delivery Info */}
                <div className="pt-4">
                  <h2 className="flex items-center space-x-2 font-serif text-xl font-bold text-onyx-900 border-b border-gold-400/10 pb-2 mb-6">
                    <User className="h-5 w-5 text-burgundy-700" />
                    <span>2. Customer & Delivery Info</span>
                  </h2>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-onyx-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Zainab Yusuf"
                        className="w-full bg-cream-50 border border-gold-400/25 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-burgundy-700"
                      />
                    </div>

                    <div>
                      <label htmlFor="phoneNumber" className="block text-xs font-semibold uppercase tracking-wider text-onyx-700 mb-2">
                        WhatsApp Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="e.g. 08031234567"
                        className="w-full bg-cream-50 border border-gold-400/25 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-burgundy-700"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="deliveryAddress" className="block text-xs font-semibold uppercase tracking-wider text-onyx-700 mb-2">
                        Delivery Address in Nigeria
                      </label>
                      <input
                        type="text"
                        id="deliveryAddress"
                        name="deliveryAddress"
                        required
                        value={formData.deliveryAddress}
                        onChange={handleChange}
                        placeholder="Street Address, Apartment, Suite"
                        className="w-full bg-cream-50 border border-gold-400/25 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-burgundy-700"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="cityState" className="block text-xs font-semibold uppercase tracking-wider text-onyx-700 mb-2">
                        City / State
                      </label>
                      <input
                        type="text"
                        id="cityState"
                        name="cityState"
                        required
                        value={formData.cityState}
                        onChange={handleChange}
                        placeholder="e.g. Lekki, Lagos"
                        className="w-full bg-cream-50 border border-gold-400/25 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-burgundy-700"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Special Notes */}
                <div className="pt-4">
                  <h2 className="flex items-center space-x-2 font-serif text-xl font-bold text-onyx-900 border-b border-gold-400/10 pb-2 mb-6">
                    <FileText className="h-5 w-5 text-burgundy-700" />
                    <span>3. Instructions / Notes</span>
                  </h2>
                  <div>
                    <label htmlFor="notes" className="block text-xs font-semibold uppercase tracking-wider text-onyx-700 mb-2">
                      Additional requests, promo codes, packaging specs
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Tell us if you want direct gift packaging, original boxes, or other items grouped."
                      className="w-full bg-cream-50 border border-gold-400/25 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-burgundy-700"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center rounded-sm bg-gradient-to-r from-burgundy-700 to-burgundy-600 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-cream-50 border border-gold-400/20 shadow-md hover:border-gold-400 hover:opacity-95 transition-all"
                  >
                    Generate Code & Open WhatsApp
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

              </form>
            </div>

            {/* Sidebar Column: Estimator & Delivery Guide */}
            <div className="space-y-8">
              
              {/* Naira Quote Estimator */}
              <div className="bg-cream-100 border border-gold-400/15 p-6 rounded-md shadow-sm">
                <h3 className="font-serif text-lg font-bold text-onyx-900 border-b border-gold-400/10 pb-3 mb-4 flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-burgundy-700" />
                  <span>Naira Quote Estimator</span>
                </h3>

                <p className="text-[10px] text-onyx-600 leading-relaxed mb-4">
                  Input details from your source website to get an estimated Naira value.
                </p>

                <div className="space-y-4">
                  {/* Retail Price input */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-onyx-755 mb-1">
                      Retail Price
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={calcInput.currency}
                        onChange={(e) => setCalcInput(prev => ({ ...prev, currency: e.target.value as "USD" | "GBP" }))}
                        className="bg-cream-50 border border-gold-400/25 rounded-sm px-2.5 py-2 text-xs focus:outline-none focus:border-burgundy-700"
                      >
                        <option value="USD">USD ($)</option>
                        <option value="GBP">GBP (£)</option>
                      </select>
                      <input
                        type="number"
                        value={calcInput.price}
                        onChange={(e) => setCalcInput(prev => ({ ...prev, price: e.target.value }))}
                        className="flex-1 bg-cream-50 border border-gold-400/25 rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-burgundy-700"
                        placeholder="Price"
                      />
                    </div>
                  </div>

                  {/* Shipping Weight input */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-onyx-755 mb-1 flex justify-between">
                      <span>Est. Weight (kg)</span>
                      <span className="text-[9px] text-gold-600 lowercase font-medium">1kg = 2.2 lbs</span>
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={calcInput.weight}
                      onChange={(e) => setCalcInput(prev => ({ ...prev, weight: e.target.value }))}
                      className="w-full bg-cream-50 border border-gold-400/25 rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-burgundy-700"
                      placeholder="e.g. 1.5"
                    />
                  </div>

                  {/* Calculations breakdown */}
                  <div className="mt-6 border-t border-gold-400/10 pt-4 space-y-2 text-xs text-onyx-700">
                    <div className="flex justify-between">
                      <span>Rate (Demo Preset):</span>
                      <span className="font-semibold text-onyx-900">
                        ₦{calculatedEstimate.rate.toLocaleString()} / {calcInput.currency === "USD" ? "$" : "£"}1
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Retail Base:</span>
                      <span>₦{calculatedEstimate.retailNaira.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service Fee (10%):</span>
                      <span>₦{calculatedEstimate.serviceFeeNaira.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Est. Air Cargo:</span>
                      <span>₦{calculatedEstimate.shippingNaira.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Customs / Import Support Estimate:</span>
                      <span>₦{calculatedEstimate.customsNaira.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                    </div>

                    <div className="border-t border-gold-400/10 pt-3 flex justify-between items-center text-sm font-bold text-onyx-900 mt-2">
                      <span>Total Demo Estimate:</span>
                      <span className="text-burgundy-800 text-base font-mono">
                        ₦{calculatedEstimate.totalNaira.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      </span>
                    </div>
                  </div>

                  {/* Safety note */}
                  <div className="mt-4 rounded-sm bg-burgundy-900/5 p-3 border border-burgundy-950/10 text-[10px] leading-relaxed text-burgundy-900">
                    <Info className="h-4 w-4 shrink-0 inline-block mr-1 -mt-0.5 text-burgundy-700" />
                    <strong>Note:</strong> This is an interactive demo estimation. Final items packaging checks, actual weights, and official exchange rates are manual and locked in directly with your assigned agent via WhatsApp.
                  </div>
                </div>
              </div>

              {/* Delivery & Quote Guide */}
              <div className="bg-cream-100 border border-gold-400/15 p-6 rounded-md shadow-sm text-xs space-y-4">
                <h3 className="font-serif text-lg font-bold text-onyx-900 border-b border-gold-400/10 pb-3 mb-2 flex items-center gap-2">
                  <Scale className="h-5 w-5 text-burgundy-700" />
                  <span>Quote & Weight Guide</span>
                </h3>

                <div className="space-y-3 text-onyx-700">
                  <div className="border-b border-gold-400/5 pb-2">
                    <h4 className="font-bold text-onyx-900 uppercase text-[10px] tracking-wide mb-0.5">Item Retail Value</h4>
                    <p className="text-[11px] leading-relaxed text-onyx-700">The checkout cost from the official merchant web page including any domestic shipping charges.</p>
                  </div>

                  <div className="border-b border-gold-400/5 pb-2">
                    <h4 className="font-bold text-onyx-900 uppercase text-[10px] tracking-wide mb-0.5">Service Fee (10%)</h4>
                    <p className="text-[11px] leading-relaxed text-onyx-700">Covers international checkout credit/debit card processing taxes, warehouse sorting checks, and consolidation.</p>
                  </div>

                  <div className="border-b border-gold-400/5 pb-2">
                    <h4 className="font-bold text-onyx-900 uppercase text-[10px] tracking-wide mb-0.5">Estimated Delivery Timeframe</h4>
                    <p className="text-[11px] leading-relaxed text-onyx-700">Standard air transit has an estimated delivery timeframe of 7–14 business days from the date your consolidated packages reach our international sorting warehouses.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-onyx-900 uppercase text-[10px] tracking-wide mb-0.5">Customs & Import Support</h4>
                    <p className="text-[11px] leading-relaxed text-onyx-700">Our estimates include import support and logistics coordination, helping navigate documentation and airport handling procedures.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-onyx-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md rounded-md bg-cream-50 border border-gold-400/35 p-6 shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-onyx-600 hover:text-onyx-900"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-400/10 text-gold-500 mb-4">
                <CheckCircle2 className="h-8 w-8 text-gold-400" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-onyx-900">
                Order Code Generated
              </h3>
              <p className="mt-1 font-mono text-lg font-bold text-burgundy-700 tracking-wider">
                {generatedCode}
              </p>
              <p className="mt-2 text-xs text-onyx-700">
                Save this code to track your concierge request on the website.
              </p>
            </div>

            {/* Preview Box */}
            <div className="mt-6 p-4 rounded-sm bg-cream-100 border border-gold-400/10 text-left">
              <div className="flex items-center justify-between text-[10px] font-bold text-onyx-600 uppercase mb-2">
                <span>Summary Preview</span>
                <span className="text-gold-600">Pending Quote</span>
              </div>
              <div className="text-xs space-y-1.5 text-onyx-700">
                <p><span className="font-semibold">Product:</span> {formData.productName}</p>
                <p><span className="font-semibold">Website:</span> {formData.storeName}</p>
                <p><span className="font-semibold">Recipient:</span> {formData.fullName}</p>
                <p><span className="font-semibold">Shipping to:</span> {formData.cityState}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col space-y-3">
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full inline-flex items-center justify-center rounded-sm bg-[#25D366] text-white py-3 text-sm font-semibold uppercase tracking-wider transition-all hover:opacity-90"
              >
                <MessageSquare className="mr-2 h-4 w-4 fill-current" />
                Submit to WhatsApp
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="w-full border border-gold-400/35 hover:bg-cream-100 text-onyx-900 py-3 text-sm font-semibold uppercase tracking-wider transition-colors"
              >
                Back to Form
              </button>
            </div>

            <div className="mt-4 text-[10px] text-center text-onyx-600 flex items-center justify-center space-x-1.5 bg-gold-400/5 py-1.5 rounded-sm">
              <Clock className="h-3.5 w-3.5 text-gold-500 shrink-0" />
              <span>Quotes typically generated in 1-3 hours on WhatsApp.</span>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
