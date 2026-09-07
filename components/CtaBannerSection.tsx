import Link from "next/link";

export default function CtaBannerSection() {
  return (
    <section className="w-full bg-white py-10 sm:py-14 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Mobile card: rounded, centered multi-line copy */}
        <div className="lg:hidden bg-[#5C1048] rounded-2xl px-6 py-10 flex flex-col items-center text-center gap-8">
          <p className="text-white text-lg sm:text-xl font-medium leading-relaxed max-w-xs">
            Don&apos;t just dream it&mdash;let&apos;s build it! Click now and
            start your project with Tobams Group. Your journey to digital
            excellence begins here.
          </p>
          <Link
            href="#book-consultation"
            className="bg-white text-[#5C1048] font-medium px-10 py-3.5 rounded-lg text-sm sm:text-base hover:bg-gray-100 transition-colors shadow-xs focus:outline-none focus:ring-2 focus:ring-white/50 w-full max-w-xs text-center"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Desktop banner: full-width, short two-line copy */}
        <div className="hidden lg:flex bg-[#5C1048] rounded-2xl px-12 py-10 flex-col items-center text-center gap-8">
          <p className="text-white text-lg font-medium leading-relaxed">
            Want to accelerate professional growth and development at your organisation?<br />
            See how we can help.
          </p>
          <Link
            href="#book-consultation"
            className="bg-white text-[#5C1048] font-medium px-12 py-3.5 rounded-lg text-base hover:bg-gray-100 transition-colors shadow-xs focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Book a Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}
