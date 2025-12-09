import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* Column 1: Brand */}
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <div className="h-8 w-8 bg-volatus-light rounded-sm"></div>
                        <span className="text-2xl font-bold tracking-tight">VOLATUS</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-6">
                        Volatus Aerospace is a leading provider of integrated drone solutions throughout North America and globally.
                    </p>
                    <div className="flex gap-4">
                        <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                        <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                        <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                        <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li><Link href="#" className="hover:text-volatus-light">About Us</Link></li>
                        <li><Link href="#" className="hover:text-volatus-light">Investors</Link></li>
                        <li><Link href="#" className="hover:text-volatus-light">Careers</Link></li>
                        <li><Link href="#" className="hover:text-volatus-light">News & Press</Link></li>
                        <li><Link href="#" className="hover:text-volatus-light">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Column 3: The Group */}
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">The Volatus Group</h3>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li><a href="https://volatusdrones.com" className="hover:text-volatus-light">Volatus Drones</a></li>
                        <li><a href="https://volatusacademy.ca" className="hover:text-volatus-light">Volatus Academy</a></li>
                        <li><a href="https://connexicore.com" className="hover:text-volatus-light">Connexicore</a></li>
                        <li><a href="https://ired.co.uk" className="hover:text-volatus-light">iRed Thermal</a></li>
                        <li><a href="https://dronedeliverycanada.com" className="hover:text-volatus-light">Drone Delivery Canada</a></li>
                    </ul>
                </div>

                {/* Column 4: Contact */}
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Stay Connected</h3>
                    <p className="text-gray-400 text-sm mb-4">
                        Subscribe to our newsletter for the latest UAV industry news and updates.
                    </p>
                    <form className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-gray-800 border-none rounded-md px-3 py-2 text-sm text-white w-full focus:ring-1 focus:ring-volatus-light"
                        />
                        <button className="bg-volatus-blue hover:bg-volatus-light text-white px-3 py-2 rounded-md">
                            <Mail size={16} />
                        </button>
                    </form>
                    <div className="mt-8 text-sm text-gray-400">
                        <p>Toll Free: 855-508-3127</p>
                        <p>Email: info@volatusaerospace.com</p>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                <p className="text-xs text-gray-500">© 2025 Volatus Aerospace Corp. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
