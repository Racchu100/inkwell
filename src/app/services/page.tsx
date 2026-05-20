"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface ProductCatalogItem {
  id: string;
  num: string;
  name: string;
  image: string;
  description: string;
  subproducts: string[];
}

const catalogCategories: ProductCatalogItem[] = [
  {
    id: "keychains",
    num: "01",
    name: "Custom Keychains",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
    description: "Compact and stylish tokens of affection. Ideal for couples, new homeowners, and automotive keys. Available in high-gloss transparency or brushed heavy metals.",
    subproducts: ["Acrylic Photo Keychains", "Heavy Metal Engraved Keychains", "Name-Cut Metallic Keychains"],
  },
  {
    id: "wallets",
    num: "02",
    name: "Luxury Engraved Wallets",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600",
    description: "Handcrafted, curated vegan leather wallets and passport sleeves. Personalize with high-precision engraving of names, birthdays, or special vector illustrations.",
    subproducts: ["Mens Premium Classic (Name + Charm)", "Engraved Photo Wallets", "Womens Clutches & Zip Wallets", "Passport Covers (Custom Engraved Names)"],
  },
  {
    id: "coffee-mugs",
    num: "03",
    name: "Custom Coffee Mugs & Bottles",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600",
    description: "Elevate daily coffee rituals. Choose from standard ceramic, heat-activated color-changing magic mugs, or heavy insulated steel sports bottles.",
    subproducts: [
      "White Ceramic Mug (11oz / 15oz)",
      "Three-Tone Contrast Mugs",
      "Three-Tone Heart Handle Custom Mugs",
      "Patch Print Editorial Mugs",
      "Magic Heat-Revealing Mugs",
      "Luxury Silver & Gold Coated Mugs",
      "Insulated Metal Bottle (600ml / 750ml)",
      "Round Magic Mirror (Photo + LED Frame)",
      "Heart Magic Mirror (Photo + LED Frame)",
    ],
  },
  {
    id: "pillows",
    num: "04",
    name: "Personalized Cushions & Pillows",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=600",
    description: "Luxuriously soft throw pillows that add character to sofas and bedrooms. Choose between elegant shapes or interactive color-swiping sequins.",
    subproducts: ["Heart Shaped Photo Pillow", "Square Velvet Throw Pillow", "Interactive Magic Sequin Pillow"],
  },
  {
    id: "rotating-lamp",
    num: "05",
    name: "Rotating & Shadow Lamps",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=600",
    description: "A gorgeous interplay of light and shade. Features high-quality internal rotation motors and elegant laser-cut shadow templates that reflect beautiful message art on your bedroom walls.",
    subproducts: ["Small Cylindrical Rotating Lamp", "Big Rotating Lamp (Multi-Photo)", "Heart-Shaped Rotating Lamp", "Personalized Wooden Shadow Box", "Hexagonal LED Rotating Lamp"],
  },
  {
    id: "glass-frames",
    num: "06",
    name: "Bespoke Glass Frames",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=600",
    description: "Sleek, frameless glass sheets featuring high-definition direct sub-surface printing. Available with integrated premium silent clock movements and custom multi-photo layouts.",
    subproducts: ["3-Image Triptych Glass Frame", "Clock-Integrated Glass Photo Frame", "Floating Glass Plaque (With Stand)"],
  },
  {
    id: "rock-frames",
    num: "07",
    name: "Rustic Rock Slate Frames",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600",
    description: "Hand-chiseled natural slate stones that boast organic, rough textures around the borders. High-gloss visual print layer prevents color fading and ensures an artisanal feel.",
    subproducts: ["Square Natural Stone Slate (6x6\")", "Rectangular Rock Slate Frame (8x6\")", "Heart-Shaped Stone Photo Plaque"],
  },
  {
    id: "bluetooth-speaker",
    num: "08",
    name: "Bluetooth Speaker Clocks",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=600",
    description: "Wireless speakers featuring high-fidelity sound, glowing warm LED illumination, and a circular custom printed photo layout on the speaker grill or top plate.",
    subproducts: ["Round Bluetooth Speaker (Photo Plate)", "Smart Touch Bedside Speaker Lamp with Photo"],
  },
  {
    id: "alarm-clock",
    num: "09",
    name: "Cubical Alarm Clocks",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdcd1d?auto=format&fit=crop&q=80&w=600",
    description: "Sleek, glowing cubical alarm clocks with temperature sensors. Personalize up to 4 sides with high-quality translucent prints that glow elegantly when the backlights activate.",
    subproducts: ["Multi-Color LED Glowing Cube Clock", "Digital Desk Clock with Custom Sides"],
  },
  {
    id: "mousepad",
    num: "10",
    name: "Custom Mousepads",
    image: "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?auto=format&fit=crop&q=80&w=600",
    description: "High-grade neoprene pads with non-slip rubber backs and ultra-smooth tracking fabrics. Customize with inspirational office typography, family grids, or calendar overlays.",
    subproducts: ["Standard Custom Desk Pad (9x7\")", "Large Panoramic Gaming Pad (30x15\")"],
  },
  {
    id: "table-top",
    num: "11",
    name: "Table Top Decorative Plaques",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600",
    description: "Elegant freestanding table-top pieces. Carefully laser cut into custom shapes celebrating life's most precious milestones: birthdays, anniversaries, and family unions.",
    subproducts: [
      "Love/Birthday/Anniversary Plaques (8\")",
      "Sweet Couple Curved Table Tops (9\")",
      "Heart Frame Monogram (8\" / 10\")",
      "Family Tree Carved Plaque",
      "Baby Welcome Wooden Photo Stand",
    ],
  },
  {
    id: "table-top-clock",
    num: "12",
    name: "Table Top Art Clocks",
    image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&q=80&w=600",
    description: "Functional desktop art pieces with premium brass clock needles. Beautifully styled backdrops printed on heavy acrylics or composite wood sheets.",
    subproducts: ["Minimalist Acrylic Desk Clock", "Vintage Editorial Wooden Desk Clock", "Contemporary Multi-Photo Table Clock (4 Designs)"],
  },
  {
    id: "caricature-table-top",
    num: "13",
    name: "Caricature Table Tops",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=600",
    description: "A fun, animated perspective! Our professional graphic designers map your faces onto artistic, high-resolution comic bodies. Perfect for quirky couples, professional milestones, and friend birthdays.",
    subproducts: ["Quirky Couple Caricature Stand (8\" / 10\")", "Super Hero Caricature Stand", "Professional / Corporate Milestone Stand (14\")"],
  },
  {
    id: "led-table-top",
    num: "14",
    name: "Acrylic LED Table Tops",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600",
    description: "Gleaming acrylic panels slotted into polished solid-wood bases featuring integrated LED strips. Colors switch between warm white, cold blue, and vibrant magenta.",
    subproducts: ["Custom Acrylic Song Plaque (Spotify code)", "Neon Love LED Stand", "Multi-Color Illuminated Photo Board"],
  },
  {
    id: "wall-hang-frames",
    num: "15",
    name: "Monogram Wall Letter Frames",
    image: "https://images.unsplash.com/photo-1544207557-274ac5b32818?auto=format&fit=crop&q=80&w=600",
    description: "Magnificent monogram letters (e.g. A, M, S) or popular terms (BRO, LOVE, BROTHER) custom-filled with dozens of your favorite photos in an artistic photo-collage layout.",
    subproducts: ["Custom Monogram Letter Collage (12\" / 15\" / 18\")", "LOVE / BRO Words Photo Collage", "Pranaya Couple Intersecting Frames"],
  },
  {
    id: "wall-clock-frames",
    num: "16",
    name: "Bespoke Wall Clock Frames",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdcd1d?auto=format&fit=crop&q=80&w=600",
    description: "Oversized, wall-mounted clock frameworks surrounded by smaller heart or square photo slots. Serves as a breathtaking centerpiece for living room walls.",
    subproducts: ["Heart-Array Wall Clock Frame (10 designs)", "Circular Wooden Collage Wall Clock", "Minimalist Gold Metallic Pointer Clock"],
  },
  {
    id: "wall-hang-led-frames",
    num: "17",
    name: "Illuminated Wall LED Frames",
    image: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&q=80&w=600",
    description: "Elevated, warm floating wall art. Built using circular wood frames containing integrated back-lit LEDs that radiate a soft halo glow behind custom collage trees or heart cutouts.",
    subproducts: ["Backlit LED Circle Photo Wall Art", "Illuminated Family Tree Silhouette Frame", "Glowing Modern Canvas Floating Wall Frame"],
  },
  {
    id: "momento",
    num: "18",
    name: "Studio Momentos & Awards",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=600",
    description: "Premium awards, heavy trophies, and commemorative plaques. Perfectly suited for graduation milestones, athletic achievement, corporate appreciation, or retirement keepsakes.",
    subproducts: ["Crystal Heart Memorial Plaque", "High-Gloss Heavy Wooden Trophies", "Brushed Gold Acrylic Certificate Plate"],
  },
  {
    id: "name-board",
    num: "19",
    name: "Golden Designer Name Boards",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=600",
    description: "The ultimate curb-appeal statement. Heavy outdoor-safe acrylic sheets adorned with raised golden 3D metallic lettering, designable logos, and weather-proof LED backlighting.",
    subproducts: ["Raised Golden Acrylic House Name Plate", "Contemporary Backlit LED Board for Offices", "Vintage Wooden Engraved Door Plaque"],
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("keychains");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = catalogCategories.filter(
    (cat) =>
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.subproducts.some((sub) => sub.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (const cat of catalogCategories) {
        const el = document.getElementById(cat.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveCategory(cat.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (id: string) => {
    setActiveCategory(id);
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - 140;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  const getWhatsAppLink = (catName: string) => {
    const number = "919876543210";
    const text = encodeURIComponent(
      `Hello Ink Well Colour Crafts Studio! I am very interested in customizing a product from your '${catName}' collection. Could you share some pricing and layout designs with me?`
    );
    return `https://wa.me/${number}?text=${text}`;
  };

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-16 lg:pt-[72px] bg-secondary-bg min-h-screen">
        {/* Banner Section */}
        <section className="bg-white py-3 lg:py-16 border-b border-border-linen/30">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center md:text-left space-y-2 md:space-y-3">
            <span className="font-montserrat text-[10px] tracking-[0.4em] text-accent-gold uppercase font-bold block">
              Curated Catalog
            </span>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-text-primary tracking-wide">
              Personalized Photo Gifting
            </h1>
            <p className="font-lato text-sm md:text-base text-text-secondary max-w-2xl leading-relaxed">
              Explore all 19 signature product categories. Select a category below to jump directly to its options, and customize your piece via WhatsApp instant chat.
            </p>
          </div>
        </section>

        {/* Mobile/Tablet Sticky Filter Bar */}
        <div className="lg:hidden sticky top-14 z-40 bg-white/95 backdrop-blur-md border-b border-border-linen/30 px-6 py-2 flex items-center justify-between shadow-sm">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="p-2 border border-border-linen/40 rounded-xl bg-secondary-bg/50 hover:bg-secondary-bg text-accent-gold-dark hover:text-accent-gold transition-colors focus:outline-none flex items-center justify-center flex-shrink-0"
            aria-label={isFilterOpen ? "Close Filters" : "Open Filters"}
          >
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${isFilterOpen ? "rotate-90" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="21" x2="4" y2="14" />
              <line x1="4" y1="10" x2="4" y2="3" />
              <line x1="12" y1="21" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12" y2="3" />
              <line x1="20" y1="21" x2="20" y2="16" />
              <line x1="20" y1="12" x2="20" y2="3" />
              <line x1="1" y1="14" x2="7" y2="14" />
              <line x1="9" y1="8" x2="15" y2="8" />
              <line x1="17" y1="16" x2="23" y2="16" />
            </svg>
          </button>
          
          <div className="flex-grow mx-3 relative">
            <input
              type="text"
              placeholder="Search catalog..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-secondary-bg/50 border border-border-linen/45 rounded-xl pl-8 pr-3 py-1.5 text-xs font-montserrat text-text-primary focus:outline-none focus:border-accent-gold transition-colors placeholder:text-text-secondary/60 placeholder:text-[10px]"
            />
            <svg
              className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-text-secondary/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <div className="flex flex-col items-end flex-shrink-0 text-right">
            <span className="font-montserrat text-[7.5px] text-text-secondary tracking-wider uppercase leading-none">Active:</span>
            <span className="font-cormorant font-bold text-[10px] text-accent-gold whitespace-nowrap overflow-hidden text-ellipsis max-w-[75px] sm:max-w-[120px] leading-tight mt-0.5">
              {catalogCategories.find(cat => cat.id === activeCategory)?.name || ""}
            </span>
          </div>
        </div>

        {/* Overlay Backdrop */}
        {isFilterOpen && (
          <div
            onClick={() => setIsFilterOpen(false)}
            className="lg:hidden fixed inset-0 top-[96px] bg-black/30 backdrop-blur-xs z-30 transition-opacity duration-300"
          />
        )}

        {/* Sliding Categories Navigation Drawer */}
        <div
          className={`lg:hidden fixed top-[96px] left-0 w-72 max-w-[80vw] h-[calc(100vh-96px)] bg-white border-r border-border-linen/35 z-40 transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col p-6 shadow-2xl overflow-y-auto no-scrollbar ${
            isFilterOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-border-linen/20">
            <span className="font-montserrat text-[9px] tracking-[0.3em] uppercase text-accent-gold font-bold">
              Select Category
            </span>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="p-1.5 rounded-lg bg-secondary-bg hover:bg-border-linen/40 text-text-secondary hover:text-logo-blue transition-colors focus:outline-none flex items-center justify-center cursor-pointer"
              aria-label="Close Filter"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-1.5">
            {filteredCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  handleAnchorClick(cat.id);
                  setIsFilterOpen(false);
                }}
                className={`text-left font-montserrat text-[10px] tracking-widest uppercase py-3 px-3 border-l-2 transition-all duration-300 flex items-center justify-between group ${
                  activeCategory === cat.id
                    ? "border-accent-gold text-accent-gold-dark bg-secondary-bg font-semibold"
                    : "border-transparent text-text-secondary hover:text-text-primary hover:bg-secondary-bg/50"
                }`}
              >
                <span className="truncate">{cat.num}. {cat.name}</span>
                <span className={`text-[9px] text-accent-gold opacity-0 group-hover:opacity-100 transition-opacity ${
                  activeCategory === cat.id ? "opacity-100" : ""
                }`}>
                  &rarr;
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Dual Layout for Desktop */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 lg:py-16 flex flex-col lg:flex-row gap-12">
          
          {/* Sticky Left Index (Desktop Only) */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-28 bg-white border border-border-linen/40 p-8 shadow-sm flex flex-col max-h-[80vh] overflow-y-auto no-scrollbar rounded-2xl">
              <span className="font-montserrat text-[9px] tracking-[0.3em] uppercase text-accent-gold font-bold mb-4 block">
                Catalog Index
              </span>
              
              {/* Search Bar on Desktop */}
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search catalog..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-secondary-bg/50 border border-border-linen/40 rounded-xl pl-8 pr-3 py-2 text-[10px] font-montserrat text-text-primary focus:outline-none focus:border-accent-gold transition-colors placeholder:text-text-secondary/50"
                />
                <svg
                  className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-text-secondary/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <div className="flex flex-col space-y-1">
                {filteredCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleAnchorClick(cat.id)}
                    className={`text-left font-montserrat text-[11px] tracking-widest uppercase py-2.5 px-3 border-l-2 transition-all duration-300 flex items-center justify-between group ${
                      activeCategory === cat.id
                        ? "border-accent-gold text-accent-gold-dark bg-secondary-bg font-semibold"
                        : "border-transparent text-text-secondary hover:text-text-primary hover:bg-secondary-bg/50"
                    }`}
                  >
                    <span className="truncate">{cat.num}. {cat.name}</span>
                    <span className={`text-[9px] text-accent-gold opacity-0 group-hover:opacity-100 transition-opacity ${
                      activeCategory === cat.id ? "opacity-100" : ""
                    }`}>
                      &rarr;
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Right Product Grid */}
          <div className="flex-grow space-y-6 md:space-y-10">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((cat, idx) => (
                <div
                  key={cat.id}
                  id={cat.id}
                  className="bg-white border border-border-linen/30 shadow-sm p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 scroll-mt-28 transition-all duration-500 hover:shadow-md rounded-2xl"
                >
                  {/* Visual Section */}
                  <div className="w-full lg:w-80 shrink-0 h-44 sm:h-56 md:h-64 relative overflow-hidden bg-secondary-bg rounded-xl">
                    <div
                      className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url('${cat.image}')` }}
                    />
                    <div className="absolute top-3 left-3 w-8 h-8 bg-white/90 backdrop-blur-sm border border-border-linen flex items-center justify-center">
                      <span className="font-montserrat text-[10px] text-accent-gold-dark font-bold">
                        {cat.num}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <span className="font-montserrat text-[8.5px] tracking-[0.3em] uppercase text-accent-gold font-bold block">
                        Category Collection
                      </span>
                      <h2 className="font-playfair text-xl sm:text-2xl font-bold text-text-primary tracking-wide leading-tight">
                        {cat.name}
                      </h2>
                      <p className="font-lato text-xs sm:text-[13px] text-text-secondary leading-relaxed">
                        {cat.description}
                      </p>

                      {/* Sub-products lists */}
                      <div className="pt-1">
                        <span className="font-montserrat text-[8px] sm:text-[8.5px] tracking-wider uppercase text-text-secondary font-bold block mb-2">
                          Sub-Products & Finishes:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.subproducts.map((sub, sIdx) => (
                            <span
                              key={sIdx}
                              className="bg-secondary-bg text-text-primary font-montserrat text-[9px] sm:text-[9.5px] tracking-wider uppercase px-2.5 py-1 border border-border-linen/35"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Ordering CTA */}
                    <div className="pt-3 border-t border-border-linen/15 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                      <div>
                        <span className="text-[9px] font-lato text-text-secondary">Starting curation at</span>
                        <p className="font-montserrat text-[10px] sm:text-xs text-accent-gold-dark font-bold uppercase tracking-wider mt-0.5">
                          Inquire for Pricing Quote
                        </p>
                      </div>
                      <a
                        href={getWhatsAppLink(cat.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto text-center font-montserrat text-xs tracking-widest uppercase px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-green-500/10 flex items-center justify-center space-x-2"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662z" />
                        </svg>
                        <span>Customize via WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white border border-border-linen/30 p-12 text-center rounded-2xl shadow-sm space-y-4">
                <span className="font-montserrat text-xs tracking-widest uppercase text-accent-gold font-bold block">
                  No Categories Found
                </span>
                <p className="font-lato text-sm text-text-secondary max-w-md mx-auto">
                  We couldn&apos;t find any custom gifts matching &ldquo;{searchQuery}&rdquo;. Try checking the spelling or search for standard finishes like leather, gold, magic, or glass.
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="font-montserrat text-[10px] tracking-widest uppercase px-4 py-2 border border-accent-gold text-accent-gold-dark hover:bg-accent-gold hover:text-white transition-colors duration-300 font-semibold rounded-xl"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
