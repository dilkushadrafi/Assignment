"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  {
    name: "EQUIPMENT",
    href: "#",
    children: [
      { name: "DJI Enterprise", href: "#" },
      { name: "Volatus A.I.R.", href: "#" },
      { name: "Accessories", href: "#" },
    ]
  },
  {
    name: "SERVICES",
    href: "#",
    children: [
      { name: "UAV Services", href: "#" },
      { name: "Cargo & Delivery", href: "#" },
    ]
  },
  {
    name: "ACADEMY",
    href: "#",
    children: [
      { name: "Pilot Certification", href: "#" },
      { name: "Flight Reviews", href: "#" },
    ]
  },
  { name: "INVESTORS", href: "#" },
  {
    name: "INDUSTRIES",
    href: "#",
    children: [
      { name: "Public Safety", href: "#" },
      { name: "Oil & Gas", href: "#" },
      { name: "Mining", href: "#" },
    ]
  },
  {
    name: "ABOUT",
    href: "#",
    children: [
      { name: "Our Story", href: "#" },
      { name: "Contact", href: "#" },
    ]
  },
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
    <header className={cn("fixed w-full z-50 transition-all duration-300 bg-black")}>
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between p-4 lg:px-8 py-4" aria-label="Global">

        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex flex-col items-center gap-0 group">
            {/* Logo Icon Replication */}
            <div className="relative h-6 w-10 mb-0.5">
              {/* Abstract stylized bird/wing icon approximation with CSS shapes */}
              <div className="absolute top-0 right-0 h-full w-full">
                <svg viewBox="0 0 100 60" className="fill-volatus-yellow w-full h-full">
                  <path d="M10,30 Q40,10 70,30 T90,20 L80,10 Q50,0 20,20 Z" />
                  <path d="M20,40 Q50,20 80,40 T95,30 L90,25 Q60,15 30,35 Z" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center leading-none">
              <span className="text-[10px] font-black text-white tracking-[0.2em] uppercase">Volatus</span>
              <span className="text-[10px] font-black text-white tracking-[0.2em] uppercase">Aerospace</span>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8 items-center">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="text-[13px] font-bold uppercase tracking-wider leading-6 text-white flex items-center gap-1 hover:text-volatus-yellow transition-colors py-2"
              >
                {item.name}
                {item.children && <ChevronDown className="h-3 w-3 text-white group-hover:text-volatus-yellow transition-colors" />}
              </Link>

              {/* Dropdown Menu */}
              {item.children && (
                <div className="absolute -left-4 top-full z-20 w-48 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="rounded-none bg-white shadow-xl border-t-2 border-volatus-yellow py-2">
                    {item.children.map((child) => (
                      <div key={child.name} className="relative group px-4 py-2 hover:bg-gray-100">
                        <a href={child.href} className="font-semibold text-gray-900 text-xs uppercase tracking-wide group-hover:text-volatus-black transition-colors">
                          {child.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="flex items-center gap-4 ml-4">
            <Search className="text-white w-4 h-4 cursor-pointer hover:text-volatus-yellow transition-colors" />
            <div className="hidden xl:block text-volatus-yellow font-bold text-lg tracking-wide">
              855-508-3127
            </div>
            <Link href="#" className="bg-volatus-yellow text-volatus-black px-6 py-2.5 text-xs font-black uppercase tracking-widest hover:bg-white transition-colors">
              Contact Us
            </Link>
            <div className="flex items-center gap-1 text-white text-xs font-bold cursor-pointer hover:text-volatus-yellow">
              EN <ChevronDown className="w-3 h-3" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={cn("fixed inset-0 z-50 bg-black p-6 lg:hidden transition-transform duration-300 ease-in-out overflow-y-auto", mobileMenuOpen ? "translate-x-0" : "translate-x-full")}>
        <div className="flex items-center justify-between mb-8">
          <span className="text-xl font-black text-white">VOLATUS</span>
          <button onClick={() => setMobileMenuOpen(false)}>
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {navigation.map((item) => (
            <div key={item.name} className="border-b border-gray-800 pb-2">
              <button
                onClick={() => item.children && toggleSubmenu(item.name)}
                className="flex w-full items-center justify-between text-base font-bold text-white uppercase tracking-wider"
              >
                {item.name}
                {item.children && <ChevronDown className={cn("w-4 h-4 text-volatus-yellow transition-transform", activeSubmenu === item.name ? "rotate-180" : "")} />}
              </button>
              {item.children && activeSubmenu === item.name && (
                <div className="mt-2 ml-4 flex flex-col gap-2">
                  {item.children.map(child => (
                    <Link key={child.name} href={child.href} className="text-gray-400 py-2 text-sm font-medium hover:text-volatus-yellow uppercase tracking-wide">
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-6 flex flex-col gap-4">
            <div className="text-volatus-yellow font-bold text-lg text-center">855-508-3127</div>
            <Link href="#" className="bg-volatus-yellow text-volatus-black w-full py-3 text-center text-sm font-black uppercase tracking-widest hover:bg-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
