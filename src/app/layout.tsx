import type { Metadata } from "next";
import {Geist, Geist_Mono, Inter, Lexend_Deca, Poppins} from "next/font/google";
import "./globals.css";
import AnimatedSpace from "@/components/background/animated-space";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"]
})

const inter = Inter({
    variable: "--font-inter",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"]
})

const lexendDeca = Lexend_Deca({
    variable: "--font-lexend-deca",
    weight: ["100", "200", "300", "400", "500", "600", "800", "900"],
    subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Phast",
  description: "Official Phast website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"scroll-smooth"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${inter.variable} ${lexendDeca.variable} antialiased`}
      >
          <AnimatedSpace />
          <div className={"bg-gradient-to-b from-[#06000A] via-[#1a0033] to-[#0d0015] relative z-10"}>
              {children}
          </div>
      </body>
    </html>
  );
}
