"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "Wallets",
    message: "",
  });

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const categories = [
    "Keychains",
    "Wallets",
    "Coffee Mugs",
    "Pillows",
    "Rotating Lamp",
    "Glass Frames",
    "Rock Frames",
    "Bluetooth Speaker",
    "Alarm Clock",
    "Mousepad",
    "Table Top Decor",
    "Table Top Clock",
    "Caricature Table Top",
    "LED Table Top",
    "Wall Hang Frames",
    "Wall Clock Frames",
    "Wall Hang LED Frames",
    "Momento",
    "Name Board",
    "Other Photography Services",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setFormStatus("error");
      return;
    }

    setFormStatus("submitting");

    // Simulate luxury API response / local storage logging
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        phone: "",
        interest: "Wallets",
        message: "",
      });
      setSelectedImage(null);
      setImagePreview(null);
    }, 1500);
  };

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-16 md:pt-[72px] bg-secondary-bg min-h-screen">
        {/* Header */}
        <section className="bg-white py-1 lg:py-4 border-b border-border-linen/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center md:text-left space-y-1">
            <span className="font-montserrat text-[8px] tracking-[0.4em] text-accent-gold uppercase font-bold block">
              Connect With Us
            </span>
            <h1 className="font-playfair text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-text-primary tracking-wide leading-snug">
              Initiate a Custom Curation
            </h1>
            <p className="font-lato text-[10px] sm:text-[11px] md:text-xs text-text-secondary/90 max-w-2xl leading-relaxed">
              Have a bespoke design in mind or want to explore volume corporate gifting? Drop us an inquiry or initiate a direct chat with our lead designer.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Contact Form (swapped to be at top below header/first on mobile) */}
            <div className="lg:col-span-7 bg-white border border-border-linen/30 p-5 md:p-8 shadow-sm">
              <div className="space-y-3 mb-6">
                <span className="font-montserrat text-[8px] tracking-[0.3em] uppercase text-accent-gold font-bold block">
                  Bespoke Request Form
                </span>
                <h2 className="font-playfair text-xl sm:text-2xl font-bold text-text-primary tracking-wide">
                  Submit Curation Request
                </h2>
                <p className="font-lato text-xs text-text-secondary leading-relaxed">
                  Provide your detail specifications below. An art supervisor will reach back to you within 2 business hours with digital design mocks.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="font-montserrat text-[10px] tracking-widest uppercase text-text-secondary font-bold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    className="border border-border-linen/50 bg-secondary-bg/30 px-4 py-3 font-lato text-sm focus:outline-none focus:border-accent-gold focus:bg-white transition-all duration-300 text-text-primary"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="phone" className="font-montserrat text-[10px] tracking-widest uppercase text-text-secondary font-bold">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g., +91 98765 43210"
                    required
                    className="border border-border-linen/50 bg-secondary-bg/30 px-4 py-3 font-lato text-sm focus:outline-none focus:border-accent-gold focus:bg-white transition-all duration-300 text-text-primary"
                  />
                </div>

                {/* Product Interest Dropdown */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="interest" className="font-montserrat text-[10px] tracking-widest uppercase text-text-secondary font-bold">
                    Product Interest *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="border border-border-linen/50 bg-secondary-bg/30 px-4 py-3 font-lato text-sm focus:outline-none focus:border-accent-gold focus:bg-white transition-all duration-300 text-text-primary appearance-none cursor-pointer"
                  >
                    {categories.map((cat, idx) => (
                      <option key={idx} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Reference Photo for Customization */}
                <div className="flex flex-col space-y-2">
                  <span className="font-montserrat text-[10px] tracking-widest uppercase text-text-secondary font-bold">
                    Reference Photo for Customization
                  </span>
                  
                  <div className="relative border-2 border-dashed border-border-linen hover:border-accent-gold/70 transition-colors duration-300 bg-secondary-bg/20 p-6 flex flex-col items-center justify-center rounded-xl text-center group min-h-[140px] cursor-pointer">
                    <input
                      type="file"
                      id="reference-photo"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    
                    {imagePreview ? (
                      <div className="relative z-20 flex flex-col items-center space-y-3 w-full">
                        <div className="relative w-20 h-20 bg-white border border-border-linen rounded-lg overflow-hidden shadow-sm flex items-center justify-center">
                          <img
                            src={imagePreview}
                            alt="Reference Preview"
                            className="object-cover w-full h-full"
                          />
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              handleRemoveImage();
                            }}
                            className="absolute -top-1.5 -right-1.5 bg-rose-500 hover:bg-rose-600 text-white rounded-full p-1 shadow-sm transition-colors duration-250 cursor-pointer z-30 flex items-center justify-center w-5 h-5"
                            title="Remove Photo"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        <div className="text-[11px] font-lato">
                          <p className="font-semibold text-text-primary truncate max-w-[240px]">
                            {selectedImage?.name}
                          </p>
                          <p className="text-text-secondary">
                            {(selectedImage ? selectedImage.size / (1024 * 1024) : 0).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-accent-gold group-hover:scale-105 transition-transform duration-300 border border-border-linen/25">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="space-y-1">
                          <p className="font-montserrat text-[11px] font-bold text-text-primary tracking-wide">
                            Click to Upload Reference Photo
                          </p>
                          <p className="font-lato text-[10px] text-text-secondary">
                            Supports PNG, JPG, or JPEG (Max 10MB)
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="message" className="font-montserrat text-[10px] tracking-widest uppercase text-text-secondary font-bold">
                    Bespoke Requirements / Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe custom text, photos, lamp style details or special anniversary dates..."
                    className="border border-border-linen/50 bg-secondary-bg/30 px-4 py-3 font-lato text-sm focus:outline-none focus:border-accent-gold focus:bg-white transition-all duration-300 text-text-primary resize-none"
                  />
                </div>

                {/* Form Status Messages */}
                {formStatus === "success" && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-lato space-y-1">
                    <p className="font-bold font-montserrat tracking-wide uppercase text-[9px]">Submission Successful</p>
                    <p>Thank you! Your curation inquiry is registered. A design specialist will call or text your WhatsApp shortly.</p>
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 text-xs font-lato space-y-1">
                    <p className="font-bold font-montserrat tracking-wide uppercase text-[9px]">Error Encountered</p>
                    <p>Please double-check all required fields before attempting to submit.</p>
                  </div>
                )}

                {/* Submit Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="flex-grow sm:flex-grow-0 font-montserrat text-xs tracking-widest uppercase px-8 py-4 bg-accent-gold hover:bg-accent-gold-dark disabled:bg-gray-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-md text-center cursor-pointer"
                  >
                    {formStatus === "submitting" ? "Registering..." : "Submit Inquiry"}
                  </button>

                  <a
                    href="https://wa.me/918197175112"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center font-montserrat text-xs tracking-widest uppercase px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-xl transition-all duration-300 shadow-md flex items-center justify-center space-x-2"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662z" />
                    </svg>
                    <span>Instant WhatsApp Inquiry</span>
                  </a>
                </div>
              </form>
            </div>

            {/* Right Column: Info Cards & Map (swapped to be at bottom below form on mobile) */}
            <div className="lg:col-span-5 space-y-12">
              
              {/* Studio Details Card */}
              <div className="bg-white border border-border-linen/30 p-4 md:p-5 shadow-sm space-y-6">
                <h2 className="font-playfair text-xl font-bold text-text-primary tracking-wide">
                  The Ink Well Studio
                </h2>
                
                <div className="space-y-5">
                  {/* Phone */}
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-secondary-bg flex items-center justify-center shrink-0 border border-border-linen/25">
                      <svg className="w-4 h-4 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-montserrat text-[9px] tracking-wider uppercase text-text-secondary block">Call / WhatsApp</span>
                      <a href="tel:+918197175112" className="font-montserrat text-[13px] text-text-primary hover:text-accent-gold transition-colors duration-300 font-bold block mt-0.5">
                        +91 81971 75112
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-secondary-bg flex items-center justify-center shrink-0 border border-border-linen/25">
                      <svg className="w-4 h-4 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="font-montserrat text-[9px] tracking-wider uppercase text-text-secondary block">Studio Email</span>
                      <a href="mailto:hello@inkwellgifting.com" className="font-montserrat text-[12px] sm:text-xs text-text-primary hover:text-accent-gold transition-colors duration-300 font-bold block mt-0.5 break-all">
                        hello@inkwellgifting.com
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-secondary-bg flex items-center justify-center shrink-0 border border-border-linen/25">
                      <svg className="w-4 h-4 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-montserrat text-[9px] tracking-wider uppercase text-text-secondary block">Business Hours</span>
                      <div className="font-lato text-[11px] text-text-primary space-y-0.5 block mt-0.5">
                        <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                        <p>Sunday: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
