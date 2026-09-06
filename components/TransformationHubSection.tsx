import Image from "next/image";
import Link from "next/link";

function PurpleLightningIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#5B1947] fill-current shrink-0"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M13 2L3 14h7v8l10-12h-7z" />
    </svg>
  );
}

export default function TransformationHubSection() {
  const features = [
    "Strategic Career Guidance",
    "Leadership Development",
    "CV Development",
    "Sustainability Leadership",
    "Communication Skills",
    "Business Model",
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1280px] mx-auto bg-[#FDE8EC] rounded-3xl p-6 sm:p-10 md:p-12 shadow-xs border border-[#FCDDEC]">
        
        {/* Header Text Area */}
        <div className="flex flex-col space-y-2 mb-8">
          <span className="text-[#3B52D4] font-semibold italic text-sm sm:text-base tracking-wide">
            Learning With Our CEO:
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold italic text-[#5B1947] tracking-tight leading-tight">
            Transformation Hub With Jite Newton
          </h2>
          <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-normal pt-2 max-w-5xl">
            Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you&apos;re seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.
          </p>
        </div>

        {/* Content Grid: Left Image & Right White Pills Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-6">
            <div className="relative w-full h-[260px] sm:h-[320px] lg:h-full min-h-[280px] rounded-2xl overflow-hidden shadow-xs border border-white/60">
              <Image
                src="/transformation-hub.jpg"
                alt="Woman examining futuristic code projections during Transformation Hub webinar"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Inner Soft Pink Card with White Pills */}
          <div className="lg:col-span-6 bg-[#FDEDF0] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 border border-white/50">
            
            {/* White Feature Pills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl px-4 py-3.5 flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#5B1947] shadow-2xs border border-pink-50 hover:shadow-xs transition-shadow"
                >
                  <PurpleLightningIcon />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="#learn-more"
                className="bg-[#5B1947] hover:bg-[#471237] text-white font-medium px-6 py-3 rounded-md text-sm sm:text-base inline-flex items-center gap-2.5 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#5B1947]"
              >
                <span>Learn More</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
