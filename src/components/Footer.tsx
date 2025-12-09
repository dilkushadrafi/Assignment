import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-volatus-dark text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-12">

                {/* Column 1: Brand */}
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <div className="h-8 w-8 bg-volatus-blue rounded-sm"></div>
                        <span className="text-2xl font-black tracking-tighter">VOLATUS</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        Volatus Aerospace is a leading provider of integrated drone solutions throughout North America and globally. We are shaping the future of flight with safety and innovation.
                    </p>
                    <div className="flex gap-4">
                        <Linkedin className="w-5 h-5 text-gray-400 hover:text-volatus-light cursor-pointer transition-colors" />
                        <Twitter className="w-5 h-5 text-gray-400 hover:text-volatus-light cursor-pointer transition-colors" />
                        <Facebook className="w-5 h-5 text-gray-400 hover:text-volatus-light cursor-pointer transition-colors" />
                        <Instagram className="w-5 h-5 text-gray-400 hover:text-volatus-light cursor-pointer transition-colors" />
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-volatus-light">Quick Links</h3>
                    <ul className="space-y-4 text-gray-400 text-sm font-medium">
                        <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Investors</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">News & Press</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Column 3: The Group */}
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-volatus-light">The Volatus Group</h3>
                    <ul className="space-y-4 text-gray-400 text-sm font-medium">
                        <li><a href="https://volatusdrones.com" className="hover:text-white transition-colors">Volatus Drones</a></li>
                        <li><a href="https://volatusacademy.ca" className="hover:text-white transition-colors">Volatus Academy</a></li>
                        <li><a href="https://connexicore.com" className="hover:text-white transition-colors">Connexicore</a></li>
                        <li><a href="https://ired.co.uk" className="hover:text-white transition-colors">iRed Thermal</a></li>
                        <li><a href="https://dronedeliverycanada.com" className="hover:text-white transition-colors">Drone Delivery Canada</a></li>
                    </ul>
                </div>

                {/* Column 4: Contact */}
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-volatus-light">Stay Connected</h3>
                    <p className="text-gray-400 text-sm mb-4">
                        Subscribe to our newsletter for the latest UAV industry news and updates.
                    </p>
                    <form className="flex gap-2 mb-8">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm text-white w-full focus:ring-1 focus:ring-volatus-light focus:border-transparent outline-none transition-all placeholder:text-gray-600"
                        />
                        <button className="bg-volatus-light hover:bg-volatus-blue text-white px-3 py-2 rounded-md transition-colors">
                            <Mail size={16} />
                        </button>
                    </form>
                    <div className="space-y-2 text-sm text-gray-400">
                        <p><span className="text-white font-semibold">Toll Free:</span> 855-508-3127</p>
                        <p><span className="text-white font-semibold">Email:</span> info@volatusaerospace.com</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-8 text-center flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                <p>© 2025 Volatus Aerospace Corp. All Rights Reserved.</p>
                <div className="flex gap-4 mt-2 md:mt-0">
                    <a href="#" className="hover:text-gray-400">Terms of Service</a>
                    <a href="#" className="hover:text-gray-400">Sitemap</a>
                </div>
            </div>
        </footer>
    );
}
