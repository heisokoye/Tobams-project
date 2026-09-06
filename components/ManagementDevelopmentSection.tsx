import Image from "next/image";

function WhiteLightningIcon() {
  return (
    <svg
      className="w-4 h-4 text-white fill-current shrink-0"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M13 2L3 14h7v8l10-12h-7z" />
    </svg>
  );
}

export default function ManagementDevelopmentSection() {
  const pills = [
    "Enhanced Leadership Skills",
    "Improved Employee Engagement",
    "Stronger Organisational Culture",
    "Sustainable Growth",
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1280px] mx-auto bg-[#250A1B] text-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-md border border-[#3D142E]">
        
        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Mobile Order Heading (visible at top on mobile) */}
          <div className="lg:hidden">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-4">
              Management Development Program
            </h2>
          </div>

          {/* Left Column: Image */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-white/10">
              <Image
                src="/management-development.jpg"
                alt="Corporate executives collaborating over a digital tablet in a modern office"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Heading (desktop), Paragraphs & Feature Pills */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            
            {/* Desktop Heading */}
            <h2 className="hidden lg:block text-3xl md:text-[36px] font-bold text-white tracking-tight leading-tight">
              Management Development Program
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-gray-200 font-normal leading-relaxed">
              <p>
                Tobams Group offers a comprehensive Management Development Program designed to equip corporate organisations with the high -performing leaders they need to thrive.
              </p>
              <p>
                Our program includes workshops, seminars, coaching sessions, online courses, and experiential learning opportunities designed to improve leadership, strategic thinking, communication, and other essential managerial competencies for corporate organisations.
              </p>
            </div>

            {/* Feature Pills Stack */}
            <div className="flex flex-col space-y-3 pt-2">
              {pills.map((pill, index) => (
                <div
                  key={index}
                  className="bg-[#845778]/80 hover:bg-[#845778] backdrop-blur-xs rounded-xl px-5 py-3.5 flex items-center gap-3 text-xs sm:text-sm font-medium text-white shadow-xs border border-white/15 transition-all"
                >
                  <WhiteLightningIcon />
                  <span>{pill}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
