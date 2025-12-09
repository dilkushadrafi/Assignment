import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
    return (
                    </p >
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
                </div >
            </div >

        <div className="max-w-7xl mx-auto px-4 mt-8 text-center flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <p>© 2025 Volatus Aerospace Corp. All Rights Reserved.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
                <a href="#" className="hover:text-gray-400">Terms of Service</a>
                <a href="#" className="hover:text-gray-400">Sitemap</a>
            </div>
        </div>
        </footer >
    );
}
