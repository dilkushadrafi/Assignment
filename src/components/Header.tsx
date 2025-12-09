"use client";

import { useState } from "react";
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
        current: false,
        children: [
            { name: "Volatus Academy", href: "#" },
            { name: "Pilot Certification", href: "#" },
            { name: "Specialized Courses", href: "#" },
        ],
    },
    {
        name: "Industries",
        href: "#",
        current: false,
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
        current: false,
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

    const toggleSubmenu = (name: string) => {
        if (activeSubmenu === name) {
            setActiveSubmenu(null);
        } else {
            setActiveSubmenu(name);
        }
    };

    return (
        <header className="fixed w-full bg-white shadow-md z-50">
            {/* Top Bar */}
            <div className="bg-volatus-dark text-white text-xs py-2 px-6 hidden md:flex justify-between items-center">
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-volatus-light">News</a>
                    <a href="#" className="hover:text-volatus-light">Careers</a>
                    <a href="#" className="hover:text-volatus-light">Contact</a>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="flex items-center gap-1"><Phone size={14} /> 855-508-3127</span>
                    <span className="font-bold cursor-pointer">EN</span>
                </div>
            </div>

            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                        <span className="sr-only">Volatus Aerospace</span>
                        {/* Placeholder for Logo - In a real app, use Image component */}
                        <div className="h-8 w-8 bg-volatus-blue rounded-sm"></div>
                        <span className="text-xl font-bold text-volatus-blue tracking-tight">VOLATUS</span>
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
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <div key={item.name} className="relative group">
                            <Link
                                href={item.href}
                                className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-1 hover:text-volatus-blue"
                            >
                                {item.name}
                                {item.children && <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-volatus-blue" />}
                            </Link>

                            {/* Desktop Mega Menu Dropdown */}
                            {item.children && (
                                <div className="absolute -left-8 top-full z-10 mt-3 w-56 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <div className="p-4">
                                        {item.children.map((child) => (
                                            <div key={child.name} className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-gray-50">
                                                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    {/* Icon placeholder if needed */}
                                                </div>
                                                <div>
                                                    <a href={child.href} className="font-semibold text-gray-900">
                                                        {child.name}
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
                    <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-volatus-blue" />
                    <Link href="#" className="bg-volatus-blue text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-volatus-dark transition">
                        Get a Quote
                    </Link>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={cn("fixed inset-0 z-50 bg-white p-6 lg:hidden transition-transform duration-300 ease-in-out", mobileMenuOpen ? "translate-x-0" : "translate-x-full")}>
                <div className="flex items-center justify-between mb-8">
                    <span className="text-xl font-bold text-volatus-blue">VOLATUS</span>
                    <button onClick={() => setMobileMenuOpen(false)}>
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    {navigation.map((item) => (
                        <div key={item.name} className="border-b border-gray-100 pb-2">
                            <button
                                onClick={() => item.children && toggleSubmenu(item.name)}
                                className="flex w-full items-center justify-between text-lg font-semibold text-gray-900"
                            >
                                {item.name}
                                {item.children && <ChevronDown className={cn("w-5 h-5 transition-transform", activeSubmenu === item.name ? "rotate-180" : "")} />}
                            </button>
                            {item.children && activeSubmenu === item.name && (
                                <div className="mt-2 ml-4 flex flex-col gap-2">
                                    {item.children.map(child => (
                                        <Link key={child.name} href={child.href} className="text-gray-600 py-1">
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
