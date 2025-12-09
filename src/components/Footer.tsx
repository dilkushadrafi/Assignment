import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block group">
                            <div className="flex flex-col items-start leading-none group-hover:opacity-80 transition-opacity">
                                <span className="text-[10px] font-black text-white tracking-[0.2em] uppercase">Volatus</span>
                                <span className="text-[10px] font-black text-white tracking-[0.2em] uppercase">Aerospace</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Global leader in drone technologies, intelligence, and aerial solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-volatus-yellow font-bold uppercase tracking-wider mb-4 text-xs">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Investors</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">News</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-volatus-yellow font-bold uppercase tracking-wider mb-4 text-xs">Solutions</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white transition-colors">Equipment Sales</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Drone Services</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Training Academy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Public Safety</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-volatus-yellow font-bold uppercase tracking-wider mb-4 text-xs">Newsletter</h4>
                        <p className="text-gray-500 text-xs mb-3">Subscribe for the latest updates.</p>
                        <form className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-volatus-yellow focus:border-volatus-yellow"
                            />
                            <button className="bg-volatus-yellow text-black font-black uppercase text-xs py-2 rounded hover:bg-white transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        © {new Date().getFullYear()} Volatus Aerospace. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Facebook className="w-4 h-4 text-gray-500 hover:text-volatus-yellow cursor-pointer transition-colors" />
                        <Twitter className="w-4 h-4 text-gray-500 hover:text-volatus-yellow cursor-pointer transition-colors" />
                        <Linkedin className="w-4 h-4 text-gray-500 hover:text-volatus-yellow cursor-pointer transition-colors" />
                        <Instagram className="w-4 h-4 text-gray-500 hover:text-volatus-yellow cursor-pointer transition-colors" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
