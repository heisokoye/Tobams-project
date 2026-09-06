import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A070D] min-h-[420px] sm:min-h-[500px] flex items-center justify-center">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Woman working on code and analytics late at night"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 mix-blend-luminosity"
        />
        {/* Dark Violet Gradient Overlay for exact visual matching */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A070D]/80 via-[#180A15]/75 to-[#0A070D]/90" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 text-center flex flex-col items-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center px-4 sm:px-5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 sm:mb-8">
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-white">
            WHAT WE DO
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.15] mb-4 sm:mb-6 max-w-3xl">
          Training and Development
        </h1>

        {/* Description Paragraph */}
        <p className="text-sm sm:text-base md:text-lg text-gray-200 font-normal leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
          Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today&apos;s ever-evolving landscape.
        </p>

        {/* Action Button */}
        <Link
          href="#consultation"
          className="bg-[#5B1947] hover:bg-[#471237] text-white font-medium px-6 sm:px-8 py-3 sm:py-3.5 rounded-md text-sm sm:text-base inline-flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#5B1947] focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
