import Link from "next/link";

const features = [
  {
    title: "Expert-Led Learning",
    description:
      "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Interactive Workshops",
    description:
      "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Global Recognition",
    description:
      "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  },
];

export default function TrainingTheConsultantSection() {
  return (
    <section className="w-full bg-[#F5EEF3] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col space-y-3 mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-semibold text-brand-purple tracking-tight leading-tight">
            Training The Consultant
          </h2>

          {/* Subheading — spelling differs by breakpoint */}
          <p className="text-brand-purple font-semibold text-sm sm:text-base lg:hidden">
            Maximize Your Potential as a Certified Trainer:
          </p>
          <p className="hidden lg:block text-brand-purple font-semibold text-sm sm:text-base">
            Maximise Your Potential as a Certified Trainer:
          </p>

          {/* Body copy — mobile calls out Business Analysis explicitly */}
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal max-w-4xl lg:hidden">
            With the help of our Business Analysis Training Consultants
            program, take a revolutionary step toward becoming a distinguished
            certified trainer. Learn from professionals in the field, immerse
            yourself in a thorough curriculum, and hone your training methods
            through interactive workshops. Participating in our program will
            enable you to gain expertise in Business Analysis while also
            developing the abilities to mentor and encourage others in their
            career advancement.
          </p>
          <p className="hidden lg:block text-sm sm:text-base text-gray-700 leading-relaxed font-normal max-w-4xl">
            With the help of our Training Consultants program, take a
            revolutionary step toward becoming a distinguished certified training
            consultant. Learn from professionals in the field, immerse yourself
            in a thorough curriculum, and hone your training methods through
            interactive workshops. Participating in our program will enable you
            to gain expertise in diverse courses while also developing the
            abilities to mentor and encourage others in their career advancement.
          </p>
        </div>

        {/* Features Card */}
        <div className="bg-[#5C1048] rounded-2xl p-6 sm:p-8 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col space-y-1.5">
                <h3 className="text-white font-semibold text-sm sm:text-base">
                  {feature.title}
                </h3>
                <p className="text-purple-200/80 text-xs sm:text-sm leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button — label and icon differ by breakpoint */}
        <div>
          {/* Mobile: "Learn more" + chevron */}
          <Link
            href="#learn-more"
            className="lg:hidden bg-[#5C1048] hover:bg-[#471237] text-white font-medium px-6 py-3 rounded-md text-sm sm:text-base inline-flex items-center gap-2 transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-brand-purple"
          >
            <span>Learn more</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>

          {/* Desktop: "Learn More" + diagonal arrow */}
          <Link
            href="#learn-more"
            className="hidden lg:inline-flex bg-[#5C1048] hover:bg-[#471237] text-white font-medium px-6 py-3 rounded-md text-sm sm:text-base items-center gap-2.5 transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-brand-purple"
          >
            <span>Learn More</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 17L17 7M17 7H7M17 7V17"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}