import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="1.5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="1.5" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      name: "Pinterest",
      href: "https://pinterest.com",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M8 22a9.6 9.6 0 0 0 5-1.5c4-2.5 5.5-7 4-11C15.5 5.5 11 3.5 7 5.5c-4 2-5 7.5-2 10.5.5.5 1 .5 1.5 0s0-1 0-1.5c-1-1.5-1-4.5.5-6.5C8.5 6 12 7.5 12.5 10c.5 3-2 5.5-4 4.5-1.5-1-1-3.5 1-4 0-.5 0-1-.5-1.5-1-.5-2.5.5-2.5 2.5 0 1 .5 2 1 2.5L6.5 19C6 20 6.5 21 8 22z" strokeWidth="1.5" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-secondary-bg text-text-primary pt-20 pb-10 border-t border-border-linen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-16">
        {/* Brand Section */}
        <div className="md:col-span-2 flex flex-col space-y-6">
          <Link href="/" className="flex items-center group">
            <img
              src="/logo.png"
              alt="Ink Well Colour Crafts Studio Logo"
              className="h-12 w-auto object-contain transition-all duration-300 hover:scale-[1.02]"
            />
          </Link>
          <p className="font-lato text-sm text-text-secondary max-w-sm leading-relaxed">
            Curating your precious memories into beautiful, physical masterpieces. We specialize in custom-crafted gifting, exquisite photo products, and editorial-quality keepsakes.
          </p>
          <div className="flex space-x-6 pt-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-logo-blue transition-colors duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="font-montserrat text-xs tracking-[0.2em] uppercase text-accent-gold mb-6 font-semibold">
            Explore
          </h4>
          <ul className="space-y-4 font-montserrat text-xs tracking-wider">
            <li>
              <Link href="/" className="text-text-secondary hover:text-logo-blue transition-colors duration-300">
                Home Portfolio
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-text-secondary hover:text-logo-blue transition-colors duration-300">
                Gifts & Catalog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-text-secondary hover:text-logo-blue transition-colors duration-300">
                Book a Custom Order
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact/Studio Details Section */}
        <div>
          <h4 className="font-montserrat text-xs tracking-[0.2em] uppercase text-accent-gold mb-6 font-semibold">
            Studio Info
          </h4>
          <ul className="space-y-4 font-lato text-sm text-text-secondary">
            <li className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-logo-blue shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-text-primary font-medium">+91 98765 43210</span>
            </li>
            <li className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-logo-blue shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-text-primary font-medium">hello@inkwellgifting.com</span>
            </li>
            <li className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-logo-blue shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-text-primary font-medium">
                <p className="text-xs">Mon - Sat: 9:00 AM - 8:00 PM</p>
                <p className="text-xs">Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-border-linen flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="font-lato text-xs text-text-secondary/70">
          &copy; {currentYear} Ink Well Colour Crafts Studio. All rights reserved.
        </p>
        <div className="flex space-x-6 text-xs text-text-secondary/70 font-montserrat tracking-widest">
          <Link href="/services" className="hover:text-logo-blue transition-colors duration-300 uppercase">
            Catalog
          </Link>
          <span className="text-border-linen">|</span>
          <Link href="/contact" className="hover:text-logo-blue transition-colors duration-300 uppercase">
            Inquire
          </Link>
        </div>
      </div>
    </footer>
  );
}
