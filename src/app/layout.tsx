import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });

export const metadata: Metadata = {
    title: "Volatus Aerospace | Drone Services & Solutions",
    description: "Volatus Aerospace provides integrated drone solutions, training, and equipment sales globally.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <Header />
                <main className="min-h-screen pt-20">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
