```javascript
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Search, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  {
    name: "Solutions",
    href: "#",
    current: false,
    children: [
      { name: "Equipment Sales", href: "#" },
      { name: "UAV Services", href: "#" },
      { name: "Cargo & Delivery", href: "#" },
      { name: "Public Safety", href: "#" },
    ],
  },
  {
    name: "Training",
    href: "#",
    children: [
      { name: "Volatus Academy", href: "#" },
      { name: "Pilot Certification", href: "#" },
      { name: "Specialized Courses", href: "#" },
    ],
  },
  {
    name: "Industries",
    href: "#",
    children: [
      { name: "Oil & Gas", href: "#" },
      { name: "Utilities", href: "#" },
      { name: "Agriculture", href: "#" },
      { name: "Infrastructure", href: "#" },
    ],
  },
  {
    name: "The Group",
    href: "#",
    children: [
      { name: "Connexicore", href: "#" },
      { name: "iRed", href: "#" },
      { name: "Synergy Aviation", href: "#" },
      { name: "Drone Delivery Canada", href: "#" },
    ],
  },
  { name: "Investors", href: "#" },
  { name: "About", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  return (
    // Update: Header opacity and shadow change on scroll
    <header className={cn("fixed w-full z-50 transition-all duration-300", scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white shadow-sm")}>
      
      {/* Top Bar - Color updated to specific Dark Blue */}
      <div className="bg-volatus-dark text-white text-xs py-2 px-6 hidden md:flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-volatus-light transition-colors">News</a>
          <a href="#" className="hover:text-volatus-light transition-colors">Careers</a>
          <a href="#" className="hover:text-volatus-light transition-colors">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
             <span className="flex items-center gap-1"><Phone size={14} className="text-volatus-light"/> 855-508-3127</span>
             <span className="font-bold cursor-pointer hover:text-volatus-light transition-colors">EN</span>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
            <span className="sr-only">Volatus Aerospace</span>
            {/* Logo updated to use Brand Blue */}
            <div className="h-8 w-8 bg-volatus-blue rounded-sm group-hover:bg-volatus-light transition-colors"></div>
            <span className="text-xl font-black text-volatus-blue tracking-tighter">VOLATUS</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
        
        {/* Navigation Items */}
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="text-sm font-bold uppercase tracking-wide leading-6 text-volatus-blue flex items-center gap-1 hover:text-volatus-light transition-colors py-4"
              >
                {item.name}
                {item.children && <ChevronDown className="h-3 w-3 text-volatus-light/70 group-hover:text-volatus-light transition-colors" />}
              </Link>
              
              {/* Refined Mega Menu / Dropdown Animation */}
              {item.children && (
                <div className="absolute -left-4 top-[95%] z-20 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform group-hover:-translate-y-1">
                  <div className="overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-black/5 border-t-4 border-volatus-light">
                    <div className="p-2">
                        {item.children.map((child) => (
                        <div key={child.name} className="group relative flex gap-x-4 rounded-md p-3 hover:bg-gray-50 transition-colors">
                            <div className="mt-1 h-2 w-2 rounded-full bg-volatus-light/30 group-hover:bg-volatus-light transition-colors"></div>
                            <div>
                                <a href={child.href} className="font-semibold text-gray-900 text-sm group-hover:text-volatus-blue transition-colors">
                                    {child.name}
                                    <span className="absolute inset-0" />
                                </a>
                            </div>
                        </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 items-center">
             <Search className="w-5 h-5 text-gray-400 cursor-pointer hover:text-volatus-light transition-colors" />
             <Link href="#" className="bg-volatus-light text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-volatus-blue transition-all shadow-md hover:shadow-lg">
                Get a Quote
             </Link>
        </div>
      </nav>
      
      {/* Mobile Menu (unchanged logic, just colors if needed) */}
      <div className={cn("fixed inset-0 z-50 bg-white p-6 lg:hidden transition-transform duration-300 ease-in-out", mobileMenuOpen ? "translate-x-0" : "translate-x-full")}>
         <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-black text-volatus-blue">VOLATUS</span>
            <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6 text-volatus-blue" />
            </button>
         </div>
         <div className="flex flex-col gap-4">
            {navigation.map((item) => (
                <div key={item.name} className="border-b border-gray-100 pb-2">
                    <button 
                        onClick={() => item.children && toggleSubmenu(item.name)}
                        className="flex w-full items-center justify-between text-lg font-bold text-gray-800"
                    >
                        {item.name}
                        {item.children && <ChevronDown className={cn("w-5 h-5 text-volatus-light transition-transform", activeSubmenu === item.name ? "rotate-180" : "")} />}
                    </button>
                    {item.children && activeSubmenu === item.name && (
                        <div className="mt-2 ml-4 flex flex-col gap-2">
                            {item.children.map(child => (
                                <Link key={child.name} href={child.href} className="text-gray-600 py-2 text-sm font-medium hover:text-volatus-light">
                                    {child.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
         </div>
      </div>
    </header>
  );
}
```
