import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tobams Group - Training & Development",
  description:
    "Enhance skills, broaden knowledge, and propel careers forward with Tobams Group training programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} font-sans antialiased scroll-smooth`}>
      <body className="min-h-screen bg-white text-[#1E1B1E] flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}

