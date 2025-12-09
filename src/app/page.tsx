import { ArrowRight, CheckCircle2, Globe, Shield, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full py-24 lg:py-32 bg-volatus-dark overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-volatus-blue to-volatus-dark opacity-90"></div>
                {/* Abstract Background Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>

                <div className="container relative z-10 mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-start gap-4 lg:w-1/2">
                        <div className="inline-block rounded-lg bg-volatus-light/10 px-3 py-1 text-sm text-volatus-light">
                            Global Leader in UAV Solutions
                        </div>
                        <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
                            From the Ground <br />
                            <span className="text-volatus-light">To the Stratosphere</span>
                        </h1>
                        <p className="max-w-[700px] text-gray-300 md:text-xl">
                            Volatus Aerospace provides integrated drone solutions, training, and equipment sales for industries worldwide. We are shaping the future of flight.
                        </p>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link
                                href="#"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-volatus-light px-8 text-sm font-medium text-white shadow transition-colors hover:bg-volatus-blue focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            >
                                Explore Solutions
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-700 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            >
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-volatus-blue">Our Expertise</h2>
                    <p className="mt-4 text-gray-500">Comprehensive aerial solutions tailored to your industry.</p>
                </div>
                <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Service Cards */}
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                        <div className="h-12 w-12 bg-volatus-light/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-volatus-blue group-hover:text-white transition-colors text-volatus-blue">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Equipment Sales</h3>
                        <p className="text-gray-500 mb-4">
                            Authorized dealer for DJI Enterprise, Autel, and Parrot. Get the best hardware for your mission.
                        </p>
                        <Link href="#" className="text-volatus-blue font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                            View Catalog <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                        <div className="h-12 w-12 bg-volatus-light/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-volatus-blue group-hover:text-white transition-colors text-volatus-blue">
                            <Globe className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">UAV Services</h3>
                        <p className="text-gray-500 mb-4">
                            Professional drone services including inspections, mapping, surveying, and cargo delivery.
                        </p>
                        <Link href="#" className="text-volatus-blue font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                            Our Services <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                        <div className="h-12 w-12 bg-volatus-light/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-volatus-blue group-hover:text-white transition-colors text-volatus-blue">
                            <Shield className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Training Academy</h3>
                        <p className="text-gray-500 mb-4">
                            Industry-leading pilot certification (RPAS) and specialized training courses across North America.
                        </p>
                        <Link href="#" className="text-volatus-blue font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                            Start Learning <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* About / Why Us */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="bg-gray-200 rounded-2xl h-[400px] w-full animate-pulse flex items-center justify-center text-gray-400">
                            {/* Placeholder for About Image */}
                            [About Image Placeholder]
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-volatus-blue mb-6">Why Choose Volatus?</h2>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-volatus-light flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">Regulatory Expertise</h4>
                                        <p className="text-gray-500">We navigate complex airspace regulations so you don't have to.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-volatus-light flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">National Network</h4>
                                        <p className="text-gray-500">Pilots and equipment available coast-to-coast.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-volatus-light flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">Safety First</h4>
                                        <p className="text-gray-500">Uncompromising commitment to operational safety and compliance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-volatus-blue py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to elevate your operations?</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Get in touch with our team of experts today to discuss your drone solution needs.</p>
                    <Link href="#" className="bg-white text-volatus-blue px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </div>
    );
}
