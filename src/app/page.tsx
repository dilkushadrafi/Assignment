
"use client";

import { ChevronRight, ArrowRight, ChevronsRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans">

            {/* 1. HERO SECTION - Exact Match */}
            {/* Black background, White bold text, Yellow button */}
            <section className="relative w-full h-[90vh] flex items-center bg-black overflow-hidden mt-16">
                {/* Background video/image placeholder */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>

                <div className="container relative z-10 mx-auto px-4 lg:px-12">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="max-w-4xl"
                    >
                        <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-2 tracking-wide">The Sky Is Not the Limit.</h2>
                        <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-12">
                            IT'S WHERE <br />
                            WE BEGIN...
                        </h1>

                        <Link href="#" className="inline-block bg-volatus-yellow text-black text-sm font-black px-10 py-4 uppercase tracking-widest hover:bg-white transition-colors">
                            Get In Touch
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 2. TRUSTED PARTNER SECTION - Exact Match */}
            {/* White bg, Split layout, Yellow accent line */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-12">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <div className="flex flex-col items-start text-right lg:text-right mb-8">
                                {/* Note: Screenshot has text left aligned but seemingly right heavy title? Let's stick to standard left align for readability unless specifically right */}
                                {/* Checked screenshot 2: Title is huge, left aligned. Button left aligned. */}
                                <h2 className="text-4xl lg:text-6xl font-black text-black uppercase leading-tight text-left">
                                    YOUR TRUSTED <br />
                                    PARTNER FOR <br />
                                    AERIAL <br />
                                    INTELLIGENCE <br />
                                    SOLUTIONS
                                </h2>
                                <div className="h-1.5 w-16 bg-volatus-yellow mt-6 mb-8 self-end lg:self-end mr-auto lg:mr-0"></div> {/* Actually screenshot shows it under "SOLUTIONS" aligned right? No, aligned right of the block? Let's put under text. Screenshot shows aligned to end of "SOLUTIONS text"? */}
                                {/* Correction: The yellow line is small, under the text block. I'll center align or left align based on screenshot flow. Screenshot 2 shows text block on left. Line is on right side of text block? No, it's under 'SOLUTIONS'. */}
                            </div>

                            <div className="lg:w-full flex flex-col items-end">
                                <div className="h-2 w-24 bg-volatus-yellow mb-8"></div>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8 text-right font-medium">
                                    At Volatus Aerospace, our mission is clear: to provide unmatched innovation, reliability, and expertise in every aerial intelligence solution.
                                </p>
                                <p className="text-gray-500 mb-10 leading-relaxed text-right">
                                    As an innovator of aerial intelligence solutions, we seamlessly merge cutting-edge technology with extensive specialized expertise in every flight mission. Our unique methodology provides our clients unprecedented access to advanced data, enhancing operational efficiency, cutting costs, and empowering fact-based decision-making.
                                </p>
                                <Link href="#" className="inline-block bg-volatus-yellow text-black text-sm font-black px-8 py-3 uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                                    Learn More
                                </Link>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative h-[600px] w-full">
                            {/* Screenshot shows man with controller */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524143986875-3b098d78b363?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SERVICES SECTION - Exact Match */}
            {/* "SERVICES WE PROVIDE" Header image background? Screenshot 3 shows grey background image with overlay text. */}
            {/* Services cards: White with Yellow icon */}
            <section className="relative py-24 bg-gray-100">
                {/* Background Overlay Image */}
                <div className="absolute top-0 left-0 w-full h-[400px] bg-[url('https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-gray-900/60"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 lg:px-12">
                    <div className="mb-20 text-white">
                        <h2 className="text-5xl font-black uppercase mb-6">Services We Provide</h2>
                        <div className="h-1.5 w-24 bg-volatus-yellow mb-6"></div>
                        <p className="max-w-3xl text-lg font-light md:text-xl text-gray-200">
                            Learn about our diverse range of drone and fixed-wing services tailored to meet your exact needs. Each service is designed to optimize efficiency, accuracy, and safety.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-10 shadow-lg hover:-translate-y-2 transition-transform duration-300 group">
                            <div className="bg-volatus-yellow w-16 h-16 flex items-center justify-center mb-8">
                                {/* Icon placeholder */}
                                <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            </div>
                            <h3 className="text-3xl font-black text-black mb-6 uppercase leading-none">Drone <br /> Inspections</h3>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                Explore drone inspections for high-quality, cost-effective drone-based images, video, and data for analysis, surveying, mapping, and more.
                            </p>
                            <Link href="#" className="flex items-center gap-2 text-volatus-yellow font-black uppercase tracking-widest text-sm hover:gap-4 transition-all">
                                Learn More <ChevronsRight size={16} />
                            </Link>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-10 shadow-lg hover:-translate-y-2 transition-transform duration-300 group">
                            <div className="bg-volatus-yellow w-16 h-16 flex items-center justify-center mb-8">
                                <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 7m0 13V7" /></svg>
                            </div>
                            <h3 className="text-3xl font-black text-black mb-6 uppercase leading-none">Lidar <br /> Services</h3>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                Discover lidar services that leverage the latest aerial, terrestrial, bathymetric, and subsurface data collection technology.
                            </p>
                            <Link href="#" className="flex items-center gap-2 text-volatus-yellow font-black uppercase tracking-widest text-sm hover:gap-4 transition-all">
                                Learn More <ChevronsRight size={16} />
                            </Link>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-10 shadow-lg hover:-translate-y-2 transition-transform duration-300 group">
                            <div className="bg-volatus-yellow w-16 h-16 flex items-center justify-center mb-8">
                                <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                            </div>
                            <h3 className="text-3xl font-black text-black mb-6 uppercase leading-none">Aviation <br /> Services</h3>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                Learn about our fixed-wing and rotary surveillance operations, ensuring that your assets are protected and monitored with precision.
                            </p>
                            <Link href="#" className="flex items-center gap-2 text-volatus-yellow font-black uppercase tracking-widest text-sm hover:gap-4 transition-all">
                                Learn More <ChevronsRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. INDUSTRIES SECTION - Exact Match */}
            {/* Full width background image, White card with yellow border centered */}
            <section className="relative py-32 bg-black">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>

                <div className="container relative z-10 mx-auto px-4 lg:px-12 flex justify-center">
                    <div className="bg-white border-4 border-volatus-yellow p-12 lg:p-16 max-w-5xl w-full shadow-2xl">
                        <h2 className="text-4xl lg:text-5xl font-black text-black uppercase mb-4 text-center">Industries We Serve</h2>
                        <div className="h-1.5 w-20 bg-volatus-yellow mx-auto mb-10"></div>

                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
                            Volatus Aerospace delivers full-scale aerial solutions across a diverse range of industries, including agriculture, construction, energy, and public safety. With experts in every field, we understand the unique challenges of each sector.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            {[
                                "Energy & Utilities", "Construction & Engineering", "Oil & Gas",
                                "Mining & Aggregates", "Defense", "Precision Agriculture",
                                "Forestry & Conservation", "Property Development",
                                "Government & Public Agencies", "Public Safety", "Infrastructure & Transportation"
                            ].map((industry) => (
                                <div key={industry} className="flex items-center gap-3 group cursor-pointer">
                                    <ChevronsRight className="text-black group-hover:text-volatus-yellow transition-colors" size={20} />
                                    <span className="text-lg font-bold text-gray-800 group-hover:text-black">{industry}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. TRAINING / ACADEMY - Exact Match */}
            {/* Yellow Left / Image Right split? Screenshot 5 shows Yellow Left Block, Image on Right */}
            <section className="flex flex-col lg:flex-row h-auto lg:h-[600px]">
                {/* Left: Yellow Content Block */}
                <div className="lg:w-5/12 bg-volatus-yellow flex items-center justify-end p-12 lg:pr-24 relative">
                    {/* White Box Overlay */}
                    <div className="bg-white p-12 shadow-xl relative lg:-mr-32 z-20 w-full max-w-xl">
                        <h2 className="text-4xl font-black uppercase text-black mb-4 leading-none">
                            Industry Leading <br /> Drone Training
                        </h2>
                        <div className="h-1.5 w-16 bg-volatus-yellow mb-8"></div>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Stay ahead in the drone industry by acquiring the skills that set you apart. Our inclusive drone training programs provide flexible learning options, offering both online and in-person courses.
                        </p>
                        <Link href="#" className="inline-block bg-volatus-yellow text-black text-sm font-black px-8 py-3 uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                            Learn More
                        </Link>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="lg:w-7/12 bg-black relative">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574352726485-de3eb7782b6b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
                </div>
            </section>

        </div>
    );
}

