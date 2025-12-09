
"use client";

import { ArrowRight, CheckCircle2, Globe, Shield, Zap, Play, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative w-full h-screen flex items-center bg-volatus-dark overflow-hidden">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1559869188-14490f209589?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-volatus-blue/90 to-transparent z-0"></div>

                <div className="container relative z-10 mx-auto px-4 md:px-6">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="flex flex-col items-start gap-6 lg:w-2/3"
                    >
                        <motion.div variants={fadeInUp} className="inline-block rounded-full bg-volatus-light/20 border border-volatus-light/30 px-4 py-1.5 text-sm font-bold text-volatus-light uppercase tracking-wider backdrop-blur-sm">
                            Global Leader in UAV Solutions
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className="text-5xl font-black tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1]">
                            THE SKY IS <br />
                            <span className="text-volatus-light">NOT THE LIMIT</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="max-w-[700px] text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                            Volatus Aerospace provides integrated drone solutions, pilot training, and equipment sales for industries worldwide. We are shaping the future of flight.
                        </motion.p>
                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Link
                                href="#"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-volatus-light px-8 text-sm font-bold text-white shadow-lg shadow-volatus-light/25 transition-all hover:bg-white hover:text-volatus-blue hover:shadow-xl hover:-translate-y-1"
                            >
                                EXPLORE SOLUTIONS
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white/20 bg-transparent px-8 text-sm font-bold text-white shadow-sm transition-all hover:bg-white/10 hover:border-white hover:-translate-y-1"
                            >
                                CONTACT SALES
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Partners / Trusted By */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 overflow-hidden">
                    <p className="text-center text-gray-400 text-sm font-bold uppercase tracking-widest mb-8">Trusted by Industry Leaders</p>
                    <div className="flex justify-between items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500 gap-8 flex-wrap lg:flex-nowrap">
                        {/* Placeholders for Partner Logos */}
                        {['DJI ENTERPRISE', 'AUTEL ROBOTICS', 'PARROT', 'TELEDYNE FLIR', 'WINGTRA'].map((partner) => (
                            <div key={partner} className="text-xl font-black text-gray-300 mx-auto lg:mx-0">{partner}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest Innovations (Grid) */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-black tracking-tighter text-volatus-blue mb-4">LATEST INNOVATIONS</h2>
                        <div className="h-1 w-20 bg-volatus-light mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Volatus A.I.R.", desc: "Advanced Intelligence & Reconnaissance", img: "bg-blue-900" },
                            { title: "Synergy Aviation", desc: "Manned Aviation Services", img: "bg-gray-800" },
                            { title: "iRed Thermal", desc: "Thermography Experts", img: "bg-volatus-dark" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="group relative h-[400px] overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                            >
                                <div className={`absolute inset - 0 ${item.img} transition - transform duration - 700 group - hover: scale - 110`}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8">
                                    <div className="h-1 w-12 bg-volatus-light mb-4 transition-all duration-300 group-hover:w-20"></div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-300 mb-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">{item.desc}</p>
                                    <span className="flex items-center text-volatus-light font-bold text-sm uppercase tracking-wider gap-2">Read More <ChevronRight size={16} /></span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Focused Sectors */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-black tracking-tighter text-volatus-blue mb-6">CLIENT FOCUSED SOLUTIONS</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                We don't just sell drones; we provide complete aerial solutions tailored to your specific industry needs. From simple photography to complex industrial inspections and cargo delivery.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: "Commercial", desc: "Real Estate, Media, Construction" },
                                    { title: "Industrial", desc: "Oil & Gas, Energy, Mining, Utilities" },
                                    { title: "Defense & Public Safety", desc: "Police, Fire, SAR, Tactical" }
                                ].map((sector, idx) => (
                                    <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border-l-4 border-transparent hover:border-volatus-light">
                                        <div className="h-12 w-12 rounded-full bg-volatus-blue/10 flex items-center justify-center text-volatus-blue flex-shrink-0">
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-volatus-blue">{sector.title}</h4>
                                            <p className="text-gray-500">{sector.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-200 h-[600px] relative">
                                {/* Placeholder for Client Focus Image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-volatus-blue to-volatus-dark opacity-10"></div>
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-xl uppercase tracking-widest">
                                    [Interactive Sector Map]
                                </div>
                            </div>
                            {/* Floating Stats Card */}
                            <div className="absolute -bottom-8 -left-8 bg-volatus-light text-white p-8 rounded-xl shadow-xl max-w-xs hidden lg:block">
                                <p className="text-4xl font-black mb-2">1200+</p>
                                <p className="font-medium opacity-90">Successful Missions Completed This Year</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Volatus Advantage */}
            <section className="py-24 bg-volatus-dark text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-volatus-light/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-widest text-volatus-light uppercase mb-2">Why Choose Us</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-white">THE VOLATUS ADVANTAGE</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: Shield, title: "SAFETY", desc: "Transport Canada & FAA Compliant" },
                            { icon: Globe, title: "NETWORK", desc: "Coast-to-Coast Pilot Coverage" },
                            { icon: Zap, title: "EXPERIENCE", desc: "Decades of Aviation Heritage" },
                            { icon: CheckCircle2, title: "SUPPORT", desc: "24/7 Operational Support" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-colors text-center border border-white/10"
                            >
                                <div className="mx-auto h-16 w-16 bg-volatus-light rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-volatus-light/20">
                                    <item.icon size={32} />
                                </div>
                                <h4 className="text-xl font-black mb-3">{item.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Training Academy CTA */}
            <section className="py-24 bg-gray-50 relative">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                        <div className="md:w-1/2 bg-gray-200 min-h-[400px] relative">
                            {/* Image Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">
                                [Pilot Training Image]
                            </div>
                        </div>
                        <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center items-start">
                            <span className="text-volatus-light font-bold text-sm uppercase tracking-wider mb-2">Launch Your Career</span>
                            <h2 className="text-4xl font-black text-volatus-blue mb-6">VOLATUS ACADEMY</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Become a certified drone pilot with our industry-leading RPAS training programs. From basic certification to advanced flight reviews.
                            </p>

                            <div className="flex flex-col gap-4 w-full sm:w-auto">
                                <Link href="#" className="flex items-center justify-between bg-volatus-blue text-white px-6 py-4 rounded-xl hover:bg-volatus-dark transition-colors group">
                                    <span className="font-bold">View Course Calendar</span>
                                    <ArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link href="#" className="flex items-center justify-between border border-gray-200 text-gray-700 px-6 py-4 rounded-xl hover:bg-gray-50 transition-colors group">
                                    <span className="font-bold">Book a Flight Review</span>
                                    <ArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-volatus-blue py-20 border-t border-white/10">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">READY TO LAUNCH?</h2>
                    <p className="text-blue-200 mb-10 max-w-2xl mx-auto text-lg">
                        Connect with our team of aviation experts to discuss your project requirements.
                    </p>
                    <Link href="#" className="inline-block bg-white text-volatus-blue px-10 py-4 rounded-full font-bold text-lg hover:bg-volatus-light hover:text-white transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                        CONTACT US TODAY
                    </Link>
                </div>
            </section>
        </div>
    );
}

