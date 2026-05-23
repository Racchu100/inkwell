"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const carouselSlides = [
  {
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=1600",
    title: "The Art of Bespoke Gifting",
    subtitle: "Custom Engraved Leather Wallets & Passport Covers",
    description: "Crafted from fine premium leather, personalized with names and custom lettering. A timeless gift for your loved ones.",
    ctaText: "Explore Wallets",
    ctaLink: "/services#wallets",
  },
  {
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1600",
    title: "Morning Rituals, Personalized",
    subtitle: "Premium Ceramic Mugs & Magic Heat Mirrors",
    description: "Discover white, gold, magic sequin, and heart-handle options. The perfect canvas for morning smiles and custom portraits.",
    ctaText: "Browse Mug Collection",
    ctaLink: "/services#coffee-mugs",
  },
  {
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=1600",
    title: "Illuminated Memories",
    subtitle: "Hexagonal & Rotating Shadow Lamps",
    description: "Transform your favorite memories into glowing, rotating masterpieces. Multi-color warm lighting for cozy nights.",
    ctaText: "Discover Lamps",
    ctaLink: "/services#rotating-lamp",
  },
  {
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=1600",
    title: "Curated Visual Frames",
    subtitle: "Bespoke Glass & Textured Rock Frames",
    description: "Experience premium printing on natural stone and sleek clock-integrated glass layouts that elevate home aesthetics.",
    ctaText: "View Frames",
    ctaLink: "/services#glass-frames",
  },
  {
    image: "https://images.unsplash.com/photo-1544207557-274ac5b32818?auto=format&fit=crop&q=80&w=1600",
    title: "Gallery Walls Designed for You",
    subtitle: "Custom Monogram Letter Frames & LED Trees",
    description: "From custom letter frames (Bro, Love, Brother) to beautiful wall-hanging LED circles that capture the family story.",
    ctaText: "Explore Wall Decor",
    ctaLink: "/services#wall-hang-frames",
  },
];

const featuredCategories = [
  {
    name: "Engraved Leather Wallets",
    description: "Premium name-inscribed and photo-engraved leather keepsakes.",
    image: "https://images.unsplash.com/photo-1590564313990-98a7b5b9b9fc?auto=format&fit=crop&q=80&w=600",
    link: "/services#wallets",
  },
  {
    name: "Ceramic & Magic Mugs",
    description: "Magic heat-revealing surfaces, gold/silver coatings, and heart-shaped handles.",
    image: "https://images.unsplash.com/photo-1539223963957-4ab262b662b2?auto=format&fit=crop&q=80&w=600",
    link: "/services#coffee-mugs",
  },
  {
    name: "Rotating & Shadow Lamps",
    description: "Elegant wooden rotating cylinders and personalized led shadow boxes.",
    image: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&q=80&w=600",
    link: "/services#rotating-lamp",
  },
  {
    name: "Table Top Masterpieces",
    description: "Sub-category birthday, anniversary, and heart tree carvings.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600",
    link: "/services#table-top",
  },
  {
    name: "Glass & Rock Photo Frames",
    description: "Sleek clock integrations on glass sheets and rustic textured stones.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600",
    link: "/services#glass-frames",
  },
  {
    name: "Custom Wall Hanging Clocks",
    description: "Artistic letter cutouts and illuminated frames that decorate spaces.",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdcd1d?auto=format&fit=crop&q=80&w=600",
    link: "/services#wall-clock-frames",
  },
];

const usps = [
  {
    title: "Premium Craftsmanship",
    description: "Every product is curated with editorial grade paper, robust acrylics, and genuine leather.",
    image: "https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Endless Personalization",
    description: "Choose names, warm colors, specific sizes, and select from up to 10 designs in key categories.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "WhatsApp Design Proofing",
    description: "Get detailed digital mockups on WhatsApp for your custom design before crafting. We only proceed to print or engrave once you approve.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "19 Dynamic Categories",
    description: "From pocket-sized keychains to majestic custom golden nameboards, we've got you covered.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600",
  },
];

const testimonials = [
  {
    quote: "The magic mug and engraved wallet exceeded my expectations. The name carving on the wallet is incredibly precise, and the warm gold layout looks remarkably high-end.",
    author: "Elena Rostova",
    role: "Lifestyle Blogger",
    stars: 5,
  },
  {
    quote: "We ordered a rotating lamp for our anniversary. The shadow cast on the wall is sharp and romantic, and the wood base smells authentic and looks incredibly elegant.",
    author: "Marcus Vance",
    role: "Art Director",
    stars: 5,
  },
  {
    quote: "Ink Well Colour Crafts Studio has become my absolute go-to for corporate gifting. Their acrylic keychains and custom clocks are flawless. They look premium and feel premium.",
    author: "Siddharth Sen",
    role: "HR Lead, DevCorp",
    stars: 5,
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-sliding Hero Carousel every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-16 md:pt-[72px]">
        {/* Section 1: Hero Carousel (Framed, Half-size, Rounded corners) */}
        <section className="bg-secondary-bg pt-4 md:pt-12 pb-2">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="relative h-[38vh] md:h-[50vh] w-full overflow-hidden bg-black rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl flex items-center justify-center">
              {carouselSlides.map((slide, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <div
                    key={idx}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                      isActive ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  >
                    {/* Background Image with Ken-Burns Animation */}
                    <div
                      className={`absolute inset-0 w-full h-full bg-cover bg-center transition-all ${
                        isActive ? "animate-ken-burns" : ""
                      }`}
                      style={{ backgroundImage: `url('${slide.image}')` }}
                    />
                    {/* Soft editorial dark overlay - lightened to let product photography shine */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />

                    {/* Carousel Content */}
                    <div className="absolute bottom-16 left-0 w-full z-20 flex justify-center">
                      <div className="animate-[fade-in-up_0.8s_ease]">
                        <Link
                          href={slide.ctaLink}
                          className="font-montserrat text-xs tracking-widest uppercase px-8 py-3.5 bg-accent-gold hover:bg-accent-gold-dark text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-accent-gold/20"
                        >
                          {slide.ctaText}
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Carousel Dots */}
              <div className="absolute bottom-6 left-0 w-full z-20 flex justify-center space-x-3">
                {carouselSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? "bg-accent-gold w-6" : "bg-white/40"
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Intro/Tagline Section */}
        <section className="bg-secondary-bg pt-4 pb-6 md:pt-8 md:pb-14 border-b border-border-linen/30 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-2 sm:px-8 relative flex items-center justify-center min-h-[300px] sm:min-h-[280px]">
            
            {/* Absolute Left Image: Heart Shape Photo Frame */}
            <div className="absolute left-1 sm:left-4 lg:left-12 top-1/2 -translate-y-1/2 w-20 h-20 sm:w-28 sm:h-28 lg:w-44 lg:h-44 opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-500 ease-out z-20 select-none">
              <img
                src="/heart_photo_frame.png"
                alt="Heart Shape Photo Frame"
                className="w-full h-full object-contain drop-shadow-[0_8px_16px_rgba(7,44,79,0.08)] lg:drop-shadow-[0_12px_24px_rgba(7,44,79,0.12)]"
              />
            </div>

            {/* Central Content */}
            <div className="max-w-xs sm:max-w-md md:max-w-xl lg:max-w-3xl mx-auto text-center space-y-4 sm:space-y-5 py-4 sm:py-6 px-16 sm:px-24 md:px-0">
              <span className="font-montserrat text-[9px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.5em] text-accent-gold uppercase block">
                Curated Masterpieces
              </span>
              <h2 className="font-playfair text-base sm:text-2xl md:text-4xl font-bold text-text-primary tracking-wide leading-snug">
                Preserving your timeless memories in premium, physical art forms.
              </h2>
              <div className="w-12 sm:w-16 h-[1.5px] bg-accent-gold mx-auto" />
              <p className="font-cormorant text-xs sm:text-lg md:text-xl text-text-secondary leading-relaxed italic">
                At Ink Well Colour Crafts Studio, we believe that photographs shouldn&apos;t just live on screens. We translate your wedding portraits, travel snaps, and custom designs into elegant keepsakes that enhance your living spaces.
              </p>
            </div>

            {/* Absolute Right Image: Caricature Table Top */}
            <div className="absolute right-1 sm:right-4 lg:right-12 top-1/2 -translate-y-1/2 w-20 h-20 sm:w-28 sm:h-28 lg:w-44 lg:h-44 opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-500 ease-out z-20 select-none">
              <img
                src="/caricature_table_top.png"
                alt="Custom Caricature Table Top"
                className="w-full h-full object-contain drop-shadow-[0_8px_16px_rgba(7,44,79,0.08)] lg:drop-shadow-[0_12px_24px_rgba(7,44,79,0.12)]"
              />
            </div>

          </div>
        </section>

        {/* Section 3: Featured Categories Grid */}
        <section className="bg-white pt-6 pb-12 md:pt-14 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 space-y-4 md:space-y-0">
              <div className="space-y-2">
                <span className="font-montserrat text-[10px] tracking-[0.3em] text-accent-gold uppercase font-semibold">
                  Handpicked
                </span>
                <h3 className="font-playfair text-3xl md:text-5xl font-bold text-text-primary">
                  Featured Gift Curations
                </h3>
              </div>
              <Link
                href="/services"
                className="font-montserrat text-xs tracking-widest text-accent-gold-dark hover:text-accent-gold uppercase font-semibold flex items-center space-x-2 group transition-colors duration-300"
              >
                <span>Explore Full 19 Categories</span>
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
                  &rarr;
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 lg:gap-10">
              {featuredCategories.map((cat, idx) => (
                <Link
                  key={idx}
                  href={cat.link}
                  className="group flex flex-col bg-secondary-bg border border-border-linen/30 hover:border-accent-gold/40 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-lg w-full rounded-2xl"
                >
                  <div className="relative h-44 sm:h-64 md:h-80 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url('${cat.image}')` }}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                  </div>
                  <div className="p-4 md:p-8 space-y-2 md:space-y-3 flex-grow flex flex-col justify-between">
                    <div className="space-y-1.5 md:space-y-2">
                      <h4 className="font-cormorant font-bold text-lg md:text-2xl text-text-primary tracking-wide group-hover:text-accent-gold transition-colors duration-300">
                        {cat.name}
                      </h4>
                      <p className="font-lato text-[11px] md:text-xs text-text-secondary leading-relaxed line-clamp-2 sm:line-clamp-none">
                        {cat.description}
                      </p>
                    </div>
                    <span className="font-montserrat text-[9px] md:text-[10px] tracking-widest uppercase text-accent-gold font-semibold pt-2 md:pt-4 flex items-center space-x-1">
                      <span>View details</span>
                      <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                        &rarr;
                      </span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Why Choose Us (USPs) */}
        <section className="bg-secondary-bg py-12 md:py-32 border-y border-border-linen/40">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <div className="max-w-3xl mx-auto space-y-4 mb-10 md:mb-20">
              <span className="font-montserrat text-[10px] tracking-[0.4em] text-accent-gold uppercase font-bold">
                The Ink Well Distinction
              </span>
              <h3 className="font-playfair text-3xl md:text-5xl font-bold text-text-primary tracking-wide">
                Why Discerning Clients Choose Us
              </h3>
              <p className="font-lato text-sm text-text-secondary max-w-xl mx-auto leading-relaxed">
                We combine meticulous studio photography techniques with high-end print substrates to ensure an editorial grade artifact.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 lg:gap-10">
              {usps.map((usp, idx) => (
                <div
                  key={idx}
                  className="bg-[#25292a] border border-white/10 flex flex-col overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 w-full rounded-2xl group"
                >
                  <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden shrink-0">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-750 ease-out"
                      style={{ backgroundImage: `url('${usp.image}')` }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>
                  <div className="p-4 md:p-6 lg:p-7 flex flex-col text-center space-y-2 md:space-y-3 flex-grow justify-between">
                    <h4 className="font-cormorant font-bold text-base md:text-lg lg:text-xl text-white tracking-wide group-hover:text-accent-gold transition-colors duration-300">
                      {usp.title}
                    </h4>
                    <p className="font-lato text-[11px] md:text-xs text-white/75 leading-relaxed flex-grow">
                      {usp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Premium Minimalist Split Section */}
        <section className="bg-secondary-bg/35 border-t border-border-linen/20 py-16 md:py-24 lg:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              {/* Left Column: Visual Representation (Luxury wrap box showcasing upload & popping products) */}
              <div className="lg:col-span-6 relative group overflow-hidden rounded-2xl border border-border-linen/35 shadow-md aspect-[4/3] md:aspect-[16/10]">
                <div 
                  className="absolute inset-0 bg-[url('/curation_mockup.png')] bg-cover bg-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-text-primary/10 to-transparent opacity-30" />
                
                {/* Signature Tag */}
                <div className="absolute bottom-6 left-6 z-10">
                  <span className="font-montserrat text-[9px] tracking-[0.3em] text-[#F8F5F0] uppercase font-bold bg-[#072C4F]/65 backdrop-blur-sm px-4 py-2 rounded-full border border-[#D5E0EA]/10 shadow-sm">
                    Ink Well Signature
                  </span>
                </div>
              </div>

              {/* Right Column: Content wrapped inside a beautiful premium card box */}
              <div className="lg:col-span-6 bg-logo-blue p-8 md:p-12 shadow-xl rounded-2xl space-y-6 md:space-y-8 text-left border border-white/10 relative overflow-hidden">
                {/* Visual subtle glow backgrounds */}
                <div className="absolute -right-16 -top-16 w-36 h-36 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -left-16 -bottom-16 w-36 h-36 bg-accent-gold/10 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-3 relative z-10">
                  <span className="inline-block font-montserrat text-[10px] tracking-[0.4em] text-accent-gold uppercase font-bold bg-white px-3 py-1.5 rounded shadow-sm">
                    Bespoke Service
                  </span>
                  <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white tracking-wide leading-tight">
                    Custom Curation Made Simple
                  </h2>
                </div>
                
                {/* Visual Process Points */}
                <div className="space-y-5 py-2 relative z-10">
                  <div className="flex items-start space-x-3.5 group/item">
                    <span className="w-6 h-6 mt-0.5 bg-white text-accent-gold border border-white rounded-full flex items-center justify-center font-montserrat text-[9px] font-bold shadow-sm shrink-0">
                      01
                    </span>
                    <div className="space-y-0.5">
                      <p className="font-montserrat text-[11px] font-bold text-white uppercase tracking-wider">Select Product Category</p>
                      <p className="font-lato text-xs text-border-linen/80">Choose wallets, shadow lamps, magic mugs, or wall frames</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3.5 group/item">
                    <span className="w-6 h-6 mt-0.5 bg-white text-accent-gold border border-white rounded-full flex items-center justify-center font-montserrat text-[9px] font-bold shadow-sm shrink-0">
                      02
                    </span>
                    <div className="space-y-0.5">
                      <p className="font-montserrat text-[11px] font-bold text-white uppercase tracking-wider">Upload Reference Image</p>
                      <p className="font-lato text-xs text-border-linen/80">Attach the beautiful photo or design you want custom engraved</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5 group/item">
                    <span className="w-6 h-6 mt-0.5 bg-white text-accent-gold border border-white rounded-full flex items-center justify-center font-montserrat text-[9px] font-bold shadow-sm shrink-0">
                      03
                    </span>
                    <div className="space-y-0.5">
                      <p className="font-montserrat text-[11px] font-bold text-white uppercase tracking-wider">Describe Your Styling Details</p>
                      <p className="font-lato text-xs text-border-linen/80">Specify custom text, dates, styles, or specific anniversary details</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 relative z-10">
                  <Link
                    href="/contact"
                    className="inline-block font-montserrat text-xs tracking-widest uppercase px-8 py-4 bg-accent-gold hover:bg-accent-gold-dark text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 transform cursor-pointer border border-white/5"
                  >
                    Submit Curation Request
                  </Link>
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
