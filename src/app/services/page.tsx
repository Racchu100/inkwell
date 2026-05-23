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
  images?: string[];
  description: string;
  subproducts: string[];
}

const catalogCategories: ProductCatalogItem[] = [
  {
    id: "keychains",
    num: "01",
    name: "Custom Keychains",
    image: "/keychain_acrylic_photo.png",
    images: [
      "/keychain_acrylic_photo.png",
      "/keychain_heavy_metal.png",
      "/keychain_name_cut_metallic.png",
    ],
    description: "Compact and stylish tokens of affection. Ideal for couples, new homeowners, and automotive keys. Available in high-gloss transparency or brushed heavy metals.",
    subproducts: ["Acrylic Photo Keychains", "Heavy Metal Engraved Keychains", "Name-Cut Metallic Keychains"],
  },
  {
    id: "wallets",
    num: "02",
    name: "Luxury Engraved Wallets",
    image: "/wallet_engraved_photo.png",
    images: [
      "/wallet_engraved_photo.png",
      "/wallet_womens_clutch.png",
      "/wallet_passport_cover.png",
    ],
    description: "Handcrafted, curated vegan leather wallets and passport sleeves. Personalize with high-precision engraving of names, birthdays, or special vector illustrations.",
    subproducts: ["Engraved Photo Wallets", "Womens Clutches & Zip Wallets", "Passport Covers (Custom Engraved Names)"],
  },
  {
    id: "coffee-mugs",
    num: "03",
    name: "Custom Coffee Mugs & Bottles",
    image: "/mug_heart_handle.png",
    images: [
      "/mug_heart_handle.png",
      "/mug_patch_print.png",
      "/mug_magic_heat.png",
      "/mug_luxury_gold.png",
      "/mug_insulated_bottle.png",
    ],
    description: "Elevate daily coffee rituals. Choose from standard ceramic, heat-activated color-changing magic mugs, or heavy insulated steel sports bottles.",
    subproducts: [
      "Three-Tone Heart Handle Custom Mugs",
      "Patch Print Editorial Mugs",
      "Magic Heat-Revealing Mugs",
      "Luxury Silver & Gold Coated Mugs",
      "Insulated Metal Bottle (600ml / 750ml)",
    ],
  },
  {
    id: "magic-mirror",
    num: "03A",
    name: "Magic Mirror Frames",
    image: "/mirror_round.jpg",
    images: [
      "/mirror_round.jpg",
      "/mirror_heart.jpg",
    ],
    description: "Stunning illuminated photo frames that double as decorative mirrors. Featuring built-in warm LED rings around your favourite photo prints, creating a glowing halo effect perfect for bedrooms and gifting.",
    subproducts: ["Round Magic Mirror (Photo + LED Frame)", "Heart Magic Mirror (Photo + LED Frame)"],
  },
  {
    id: "pillows",
    num: "04",
    name: "Personalized Cushions & Pillows",
    image: "/pillow_heart.jpg",
    images: [
      "/pillow_heart.jpg",
      "/pillow_square.jpg",
      "/pillow_sequin.jpg",
    ],
    description: "Luxuriously soft throw pillows that add character to sofas and bedrooms. Choose between elegant shapes or interactive color-swiping sequins.",
    subproducts: ["Heart Shaped Photo Pillow", "Square Velvet Throw Pillow", "Interactive Magic Sequin Pillow"],
  },
  {
    id: "rotating-lamp",
    num: "05",
    name: "Rotating & Shadow Lamps",
    image: "/lamp_big.jpg",
    images: [
      "/lamp_big.jpg",
      "/lamp_heart.jpg",
      "/lamp_shadow.jpg",
      "/lamp_hexagonal.jpg",
    ],
    description: "A gorgeous interplay of light and shade. Features high-quality internal rotation motors and elegant laser-cut shadow templates that reflect beautiful message art on your bedroom walls.",
    subproducts: ["Big Rotating Lamp (Multi-Photo)", "Heart-Shaped Rotating Lamp", "Personalized Wooden Shadow Box", "Hexagonal LED Rotating Lamp"],
  },
  {
    id: "glass-frames",
    num: "06",
    name: "Bespoke Glass Frames",
    image: "/glass_triptych.jpg",
    images: [
      "/glass_triptych.jpg",
      "/glass_clock.jpg",
      "/glass_plaque.jpg",
    ],
    description: "Sleek, frameless glass sheets featuring high-definition direct sub-surface printing. Available with integrated premium silent clock movements and custom multi-photo layouts.",
    subproducts: ["3-Image Triptych Glass Frame", "Clock-Integrated Glass Photo Frame", "Floating Glass Plaque (With Stand)"],
  },
  {
    id: "rock-frames",
    num: "07",
    name: "Rustic Rock Slate Frames",
    image: "/slate_square.jpg",
    images: [
      "/slate_square.jpg",
      "/slate_rectangle.jpg",
      "/slate_heart.jpg",
    ],
    description: "Hand-chiseled natural slate stones that boast organic, rough textures around the borders. High-gloss visual print layer prevents color fading and ensures an artisanal feel.",
    subproducts: ["Square Natural Stone Slate (6x6\")", "Rectangular Rock Slate Frame (8x6\")", "Heart-Shaped Stone Photo Plaque"],
  },
  {
    id: "bluetooth-speaker",
    num: "08",
    name: "Bluetooth Speakers",
    image: "/bluetooth_speaker.jpg",
    description: "Wireless speakers featuring high-fidelity sound, glowing warm LED illumination, and a circular custom printed photo layout on the speaker grill or top plate.",
    subproducts: ["Customized/Personalized Bluetooth Speaker with Photo"],
  },
  {
    id: "alarm-clock",
    num: "09",
    name: "Cubical Alarm Clocks",
    image: "/cube_clock.jpg",
    description: "Sleek, glowing cubical alarm clocks with temperature sensors. Personalize up to 4 sides with high-quality translucent prints that glow elegantly when the backlights activate.",
    subproducts: ["Multi-Color LED Glowing Cube Clock"],
  },
  {
    id: "mousepad",
    num: "10",
    name: "Custom Mousepads",
    image: "/mousepad_collage.jpg",
    images: [
      "/mousepad_collage.jpg",
      "/mousepad_anime.jpg",
    ],
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
    image: "/table_top_clock.jpg",
    images: [
      "/table_top_clock.jpg",
      "/table_top_multi.jpg",
    ],
    description: "Functional desktop art pieces with premium brass clock needles. Beautifully styled backdrops printed on heavy acrylics or composite wood sheets.",
    subproducts: ["Minimalist Acrylic Desk Clock", "Contemporary Multi-Photo Table Clock (4 Designs)"],
  },
  {
    id: "caricature-table-top",
    num: "13",
    name: "Caricature Table Tops",
    image: "/caricature_bike.jpg",
    images: [
      "/caricature_bike.jpg",
      "/caricature_superhero.jpg",
    ],
    description: "A fun, animated perspective! Our professional graphic designers map your faces onto artistic, high-resolution comic bodies. Perfect for quirky couples, professional milestones, and friend birthdays.",
    subproducts: ["Quirky Couple Caricature Stand (8\" / 10\")", "Super Hero Caricature Stand"],
  },
  {
    id: "led-table-top",
    num: "14",
    name: "Acrylic LED Table Tops",
    image: "/led_tabletop_spotify.jpg",
    images: [
      "/led_tabletop_spotify.jpg",
      "/led_tabletop_neon.jpg",
    ],
    description: "Gleaming acrylic panels slotted into polished solid-wood bases featuring integrated LED strips. Colors switch between warm white, cold blue, and vibrant magenta.",
    subproducts: ["Custom Acrylic Song Plaque (Spotify code)", "Neon Love LED Stand"],
  },
  {
    id: "wall-hang-frames",
    num: "15",
    name: "Monogram Wall Letter Frames",
    image: "/monogram_letter.jpg",
    images: [
      "/monogram_letter.jpg",
      "/monogram_bro.jpg",
      "/monogram_couple.jpg",
    ],
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
  {
    id: "sunboard",
    num: "20",
    name: "Sunboard Prints",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600",
    description: "Lightweight yet rigid foam-core sunboard sheets with vibrant, weather-resistant full-color printing. Ideal for indoor displays, event backdrops, retail signage, and promotional standees.",
    subproducts: ["Standard Sunboard Print (1ft–6ft)", "Custom Shaped Cut-Out Sunboard", "Double-Sided Sunboard Display", "Matte & Glossy Laminated Sunboard"],
  },
  {
    id: "album-design",
    num: "21",
    name: "Album Design Making",
    image: "https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&q=80&w=600",
    description: "Professionally crafted photo albums and memory books that preserve your most precious moments. Each layout is custom designed by our studio team with elegant typography, borders, and thematic collage arrangements.",
    subproducts: ["Wedding Photo Album (20–80 pages)", "Birthday & Anniversary Memory Book", "Baby Milestone Album", "Graduation & Farewell Album", "Corporate Event Album"],
  },
  {
    id: "baby-name-board",
    num: "22",
    name: "Baby Name Reveal Boards",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=600",
    description: "Whimsical, pastel-themed personalised name boards crafted to celebrate a baby's arrival. Features the baby's name in hand-styled lettering with illustrated motifs — stars, animals, clouds, and more.",
    subproducts: ["Wooden Carved Name Board (12\" / 18\")", "Acrylic Backlit Baby Name Plaque", "Felt Letter Board with Name & Date", "Gender Reveal Themed Board"],
  },
  {
    id: "poster-banner",
    num: "23",
    name: "Posters, Banners & Invitation Cards",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=600",
    description: "High-impact print designs for every occasion — from birthday celebrations and weddings to product launches and corporate events. Crafted with premium print substrates and vibrant inks.",
    subproducts: ["Birthday & Anniversary Posters", "Wedding Invitation Posters", "Flex Banners (2ft–20ft)", "Roll-Up Standee Banners", "Event Backdrop Banners", "Custom Digital Invitation Cards"],
  },
  {
    id: "cards",
    num: "24",
    name: "Cards (Identity, Business & Invitations)",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&q=80&w=600",
    description: "Premium quality cards printed on thick, luxury card stock with UV coating, spot gloss, or matte lamination. From professional identity and business cards to beautifully designed certificates and invitation cards.",
    subproducts: ["Identity Cards (PVC / Matt Laminated)", "Certificates (A4 / A5 Custom Design)", "Business Cards (Standard / Square / Rounded)", "Invitation Cards (Wedding / Birthday / Event)", "Thank You & Greeting Cards"],
  },
  {
    id: "photo-frames",
    num: "25",
    name: "Premium Photo Frames",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600",
    description: "Showcase your cherished memories in luxurious, high-definition photo frames. Available in stunning acrylic glass and sparkle-finish materials for a premium display that truly stands out.",
    subproducts: ["Acrylic Glass Print Photo Frames", "Sparkle High Quality Print Photo Frames", "Multi-Photo Collage Frames", "Floating Frameless Glass Prints", "Heart & Custom Shape Photo Frames"],
  },
  {
    id: "stickers",
    num: "26",
    name: "Custom Stickers",
    image: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=600",
    description: "Vibrant, waterproof custom stickers in any shape, size, or finish. Perfect for branding, packaging, event decorations, laptops, bottles, gifting, and personal expression.",
    subproducts: ["Die-Cut Custom Shape Stickers", "Circle & Square Sticker Sheets", "Transparent / Clear Stickers", "Holographic Foil Stickers", "Bulk Branding & Packaging Stickers", "Kids & Fun Theme Sticker Packs"],
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("keychains");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [keychainSlide, setKeychainSlide] = useState(0);
  const [keychainPaused, setKeychainPaused] = useState(false);
  const [walletSlide, setWalletSlide] = useState(0);
  const [walletPaused, setWalletPaused] = useState(false);
  const [mugSlide, setMugSlide] = useState(0);
  const [mugPaused, setMugPaused] = useState(false);
  const [mirrorSlide, setMirrorSlide] = useState(0);
  const [mirrorPaused, setMirrorPaused] = useState(false);
  const [pillowSlide, setPillowSlide] = useState(0);
  const [pillowPaused, setPillowPaused] = useState(false);
  const [lampSlide, setLampSlide] = useState(0);
  const [lampPaused, setLampPaused] = useState(false);
  const [glassSlide, setGlassSlide] = useState(0);
  const [glassPaused, setGlassPaused] = useState(false);
  const [slateSlide, setSlateSlide] = useState(0);
  const [slatePaused, setSlatePaused] = useState(false);
  const [mousepadSlide, setMousepadSlide] = useState(0);
  const [mousepadPaused, setMousepadPaused] = useState(false);
  const [tableClockSlide, setTableClockSlide] = useState(0);
  const [tableClockPaused, setTableClockPaused] = useState(false);
  const [caricatureSlide, setCaricatureSlide] = useState(0);
  const [caricaturePaused, setCaricaturePaused] = useState(false);
  const [ledSlide, setLedSlide] = useState(0);
  const [ledPaused, setLedPaused] = useState(false);
  const [monogramSlide, setMonogramSlide] = useState(0);
  const [monogramPaused, setMonogramPaused] = useState(false);

  // Auto-advance keychain carousel every 3 seconds
  useEffect(() => {
    if (keychainPaused) return;
    const timer = setInterval(() => {
      setKeychainSlide((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, [keychainPaused]);

  // Auto-advance wallet carousel every 3 seconds
  useEffect(() => {
    if (walletPaused) return;
    const timer = setInterval(() => {
      setWalletSlide((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, [walletPaused]);

  // Auto-advance mug carousel every 3 seconds
  useEffect(() => {
    if (mugPaused) return;
    const timer = setInterval(() => {
      setMugSlide((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(timer);
  }, [mugPaused]);

  // Auto-advance magic mirror carousel every 3 seconds
  useEffect(() => {
    if (mirrorPaused) return;
    const timer = setInterval(() => {
      setMirrorSlide((prev) => (prev + 1) % 2);
    }, 3000);
    return () => clearInterval(timer);
  }, [mirrorPaused]);

  // Auto-advance pillow carousel every 3 seconds
  useEffect(() => {
    if (pillowPaused) return;
    const timer = setInterval(() => {
      setPillowSlide((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, [pillowPaused]);

  // Auto-advance rotating lamp carousel every 3 seconds
  useEffect(() => {
    if (lampPaused) return;
    const timer = setInterval(() => {
      setLampSlide((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, [lampPaused]);

  // Auto-advance glass frame carousel every 3 seconds
  useEffect(() => {
    if (glassPaused) return;
    const timer = setInterval(() => {
      setGlassSlide((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, [glassPaused]);

  // Auto-advance rock slate carousel every 3 seconds
  useEffect(() => {
    if (slatePaused) return;
    const timer = setInterval(() => {
      setSlateSlide((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, [slatePaused]);

  // Auto-advance mousepad carousel every 3 seconds
  useEffect(() => {
    if (mousepadPaused) return;
    const timer = setInterval(() => {
      setMousepadSlide((prev) => (prev + 1) % 2);
    }, 3000);
    return () => clearInterval(timer);
  }, [mousepadPaused]);

  // Auto-advance table clock carousel every 3 seconds
  useEffect(() => {
    if (tableClockPaused) return;
    const timer = setInterval(() => {
      setTableClockSlide((prev) => (prev + 1) % 2);
    }, 3000);
    return () => clearInterval(timer);
  }, [tableClockPaused]);

  // Auto-advance caricature carousel every 3 seconds
  useEffect(() => {
    if (caricaturePaused) return;
    const timer = setInterval(() => {
      setCaricatureSlide((prev) => (prev + 1) % 2);
    }, 3000);
    return () => clearInterval(timer);
  }, [caricaturePaused]);

  // Auto-advance led table top carousel every 3 seconds
  useEffect(() => {
    if (ledPaused) return;
    const timer = setInterval(() => {
      setLedSlide((prev) => (prev + 1) % 2);
    }, 3000);
    return () => clearInterval(timer);
  }, [ledPaused]);

  // Auto-advance monogram wall frames carousel every 3 seconds
  useEffect(() => {
    if (monogramPaused) return;
    const timer = setInterval(() => {
      setMonogramSlide((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, [monogramPaused]);

  // Helper: get active slide index for a category
  const getSlide = (catId: string) =>
    catId === "wallets" ? walletSlide
    : catId === "coffee-mugs" ? mugSlide
    : catId === "magic-mirror" ? mirrorSlide
    : catId === "pillows" ? pillowSlide
    : catId === "rotating-lamp" ? lampSlide
    : catId === "glass-frames" ? glassSlide
    : catId === "rock-frames" ? slateSlide
    : catId === "mousepad" ? mousepadSlide
    : catId === "table-top-clock" ? tableClockSlide
    : catId === "caricature-table-top" ? caricatureSlide
    : catId === "led-table-top" ? ledSlide
    : catId === "wall-hang-frames" ? monogramSlide
    : keychainSlide;
  const setSlide = (catId: string, idx: number) => {
    if (catId === "wallets") setWalletSlide(idx);
    else if (catId === "coffee-mugs") setMugSlide(idx);
    else if (catId === "magic-mirror") setMirrorSlide(idx);
    else if (catId === "pillows") setPillowSlide(idx);
    else if (catId === "rotating-lamp") setLampSlide(idx);
    else if (catId === "glass-frames") setGlassSlide(idx);
    else if (catId === "rock-frames") setSlateSlide(idx);
    else if (catId === "mousepad") setMousepadSlide(idx);
    else if (catId === "table-top-clock") setTableClockSlide(idx);
    else if (catId === "caricature-table-top") setCaricatureSlide(idx);
    else if (catId === "led-table-top") setLedSlide(idx);
    else if (catId === "wall-hang-frames") setMonogramSlide(idx);
    else setKeychainSlide(idx);
  };
  const setPaused = (catId: string, val: boolean) => {
    if (catId === "wallets") setWalletPaused(val);
    else if (catId === "coffee-mugs") setMugPaused(val);
    else if (catId === "magic-mirror") setMirrorPaused(val);
    else if (catId === "pillows") setPillowPaused(val);
    else if (catId === "rotating-lamp") setLampPaused(val);
    else if (catId === "glass-frames") setGlassPaused(val);
    else if (catId === "rock-frames") setSlatePaused(val);
    else if (catId === "mousepad") setMousepadPaused(val);
    else if (catId === "table-top-clock") setTableClockPaused(val);
    else if (catId === "caricature-table-top") setCaricaturePaused(val);
    else if (catId === "led-table-top") setLedPaused(val);
    else if (catId === "wall-hang-frames") setMonogramPaused(val);
    else setKeychainPaused(val);
  };

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

  const getWhatsAppLink = (catName: string, subProduct?: string) => {
    const number = "918197175112";
    const product = subProduct ? `${subProduct} (from the ${catName} collection)` : catName;
    const text = encodeURIComponent(
      `Hello Ink Well Colour Crafts Studio! I am very interested in customizing a *${product}*. Could you share some pricing and design options with me?`
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
              Explore all 26 signature product categories. Select a category below to jump directly to its options, and customize your piece via WhatsApp instant chat.
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
                  {cat.images ? (
                    /* === Carousel for categories with multiple images === */
                    <div
                      className="w-full lg:w-80 shrink-0 h-44 sm:h-56 md:h-64 relative overflow-hidden bg-secondary-bg rounded-xl select-none"
                      onMouseEnter={() => setPaused(cat.id, true)}
                      onMouseLeave={() => setPaused(cat.id, false)}
                    >
                      {/* Slides */}
                      {cat.images.map((img, slideIdx) => (
                        <div
                          key={slideIdx}
                          className={`absolute inset-0 transition-opacity duration-700 ${
                            slideIdx === getSlide(cat.id) ? "opacity-100 z-10" : "opacity-0 z-0"
                          }`}
                        >
                          <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url('${img}')` }}
                          />
                        </div>
                      ))}

                      {/* Category number badge */}
                      <div className="absolute top-3 left-3 w-8 h-8 bg-white/90 backdrop-blur-sm border border-border-linen flex items-center justify-center z-20">
                        <span className="font-montserrat text-[10px] text-accent-gold-dark font-bold">
                          {cat.num}
                        </span>
                      </div>

                      {/* Prev / Next arrows */}
                      <>
                        <button
                          onClick={() => setSlide(cat.id, (getSlide(cat.id) - 1 + cat.images!.length) % cat.images!.length)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-200"
                          aria-label="Previous slide"
                        >
                          <svg className="w-3.5 h-3.5 text-text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => setSlide(cat.id, (getSlide(cat.id) + 1) % cat.images!.length)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-200"
                          aria-label="Next slide"
                        >
                          <svg className="w-3.5 h-3.5 text-text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>

                      {/* Dot indicators */}
                      <div className="absolute bottom-14 left-0 w-full flex justify-center gap-1.5 z-20">
                        {cat.images.map((_, dotIdx) => (
                          <button
                            key={dotIdx}
                            onClick={() => setSlide(cat.id, dotIdx)}
                            className={`rounded-full transition-all duration-300 ${
                              dotIdx === getSlide(cat.id)
                                ? "w-5 h-1.5 bg-accent-gold"
                                : "w-1.5 h-1.5 bg-white/60"
                            }`}
                            aria-label={`Slide ${dotIdx + 1}`}
                          />
                        ))}
                      </div>

                      {/* WhatsApp CTA Overlay — links to exact active sub-product */}
                      <a
                        href={getWhatsAppLink(cat.name, cat.subproducts[getSlide(cat.id)])}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-0 left-0 right-0 z-30 flex items-center justify-center gap-2 py-3 bg-[#25D366]/90 hover:bg-[#128C7E] backdrop-blur-sm text-white font-montserrat text-[10px] tracking-widest uppercase font-semibold transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662z" />
                        </svg>
                        <span>Customize via WhatsApp</span>
                      </a>
                    </div>
                  ) : (
                    /* === Static image for all other categories === */
                    <div className="w-full lg:w-80 shrink-0 h-44 sm:h-56 md:h-64 relative overflow-hidden bg-secondary-bg rounded-xl group">
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                        style={{ backgroundImage: `url('${cat.image}')` }}
                      />
                      <div className="absolute top-3 left-3 w-8 h-8 bg-white/90 backdrop-blur-sm border border-border-linen flex items-center justify-center z-10">
                        <span className="font-montserrat text-[10px] text-accent-gold-dark font-bold">
                          {cat.num}
                        </span>
                      </div>
                      {/* WhatsApp CTA Overlay — static image */}
                      <a
                        href={getWhatsAppLink(cat.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center gap-2 py-3 bg-[#25D366]/90 hover:bg-[#128C7E] backdrop-blur-sm text-white font-montserrat text-[10px] tracking-widest uppercase font-semibold transition-all duration-300"
                      >
                        <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662z" />
                        </svg>
                        <span>Customize via WhatsApp</span>
                      </a>
                    </div>
                  )}

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
                          {cat.subproducts.map((sub, sIdx) => {
                            const hasCarousel = !!cat.images;
                            const isActiveSlide = hasCarousel && sIdx === getSlide(cat.id);
                            if (hasCarousel) {
                              return (
                                <button
                                  key={sIdx}
                                  onClick={() => {
                                    setSlide(cat.id, sIdx);
                                    setPaused(cat.id, true);
                                    setTimeout(() => setPaused(cat.id, false), 5000);
                                  }}
                                  title={`View ${sub}`}
                                  className={`font-montserrat text-[9px] sm:text-[9.5px] tracking-wider uppercase px-2.5 py-1 border transition-all duration-500 cursor-pointer focus:outline-none ${
                                    isActiveSlide
                                      ? "bg-accent-gold text-white border-accent-gold font-bold scale-105 shadow-sm"
                                      : "bg-secondary-bg text-text-primary border-border-linen/35 hover:border-accent-gold/60 hover:text-accent-gold-dark"
                                  }`}
                                >
                                  {sub}
                                </button>
                              );
                            }
                            const isSingleProduct = cat.subproducts.length === 1;
                            return (
                              <span
                                key={sIdx}
                                className={`font-montserrat text-[9px] sm:text-[9.5px] tracking-wider uppercase px-2.5 py-1 border ${
                                  isSingleProduct
                                    ? "bg-accent-gold text-white border-accent-gold font-bold shadow-sm"
                                    : "bg-secondary-bg text-text-primary border-border-linen/35"
                                }`}
                              >
                                {sub}
                              </span>
                            );
                          })}
                        </div>
                      </div>
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
