import Image from "next/image";

function LightningIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#1E1B1E] fill-current shrink-0"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M13 2L3 14h7v8l10-12h-7z" />
    </svg>
  );
}

export default function TrainingServicesSection() {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-[1280px] mx-auto space-y-16 sm:space-y-24 lg:space-y-28">
        
        {/* Item 1: Corporate Trainings */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center gap-6">
          {/* Mobile Order: Heading -> Image -> Description -> Bullets */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#1E1B1E] tracking-tight leading-tight">
              Corporate Trainings
            </h2>

            {/* Mobile Image (shown only on small screens before description) */}
            <div className="lg:hidden w-full relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-gray-100 my-2">
              <Image
                src="/corporate-training.jpg"
                alt="Corporate team attending training presentation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company&apos;s goals and values.
            </p>

            <ul className="space-y-3 pt-2 text-xs sm:text-sm font-medium text-gray-800">
              <li className="flex items-center gap-3">
                <LightningIcon />
                <span>Leadership Training</span>
              </li>
              <li className="flex items-center gap-3">
                <LightningIcon />
                <span>Strategic Planning and Implementation</span>
              </li>
              <li className="flex items-center gap-3">
                <LightningIcon />
                <span>Project Management</span>
              </li>
              <li className="flex items-center gap-3">
                <LightningIcon />
                <span>Sustainability Training</span>
              </li>
              <li className="flex items-center gap-3">
                <LightningIcon />
                <span>Customised Training</span>
              </li>
            </ul>
          </div>

          {/* Desktop Image */}
          <div className="hidden lg:block lg:col-span-6">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <Image
                src="/corporate-training.jpg"
                alt="Corporate team attending training presentation"
                fill
                sizes="50vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Item 2: Personalised Individual Training */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center gap-6">
          {/* Desktop Image (Left side on desktop) */}
          <div className="hidden lg:block lg:col-span-6">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <Image
                src="/individual-training.jpg"
                alt="Professional woman taking notes during individual training session"
                fill
                sizes="50vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Mobile & Desktop Text Column */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#1E1B1E] tracking-tight leading-tight">
              Personalised Individual Training
            </h2>

            {/* Mobile Image */}
            <div className="lg:hidden w-full relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-gray-100 my-2">
              <Image
                src="/individual-training.jpg"
                alt="Professional woman taking notes during individual training session"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              Begin a journey of lifelong learning and professional development with Tobams Group&apos;s diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today&apos;s professionals.
            </p>

            <ul className="space-y-3 pt-2 text-xs sm:text-sm font-medium text-gray-800">
              <li className="flex items-center gap-3">
                <LightningIcon />
                <span>Leadership Development</span>
              </li>
              <li className="flex items-center gap-3">
                <LightningIcon />
                <span>Soft Skills Development</span>
              </li>
              <li className="flex items-center gap-3">
                <LightningIcon />
                <span>Industry Specific Knowledge</span>
              </li>
              <li className="flex items-center gap-3">
                <LightningIcon />
                <span>Technical Skills Enhancement</span>
              </li>
              <li className="flex items-center gap-3">
                <LightningIcon />
                <span>Time Management and Productivity</span>
              </li>
              <li className="flex items-center gap-3">
                <LightningIcon />
                <span>Career Development</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Item 3: Capacity Development */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center gap-6">
          {/* Text Column */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#1E1B1E] tracking-tight leading-tight">
              Capacity Development
            </h2>

            {/* Mobile Image */}
            <div className="lg:hidden w-full relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-gray-100 my-2">
              <Image
                src="/capacity-development.jpg"
                alt="Trainer giving capacity building strategy workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:
            </p>

            <ul className="space-y-3 pt-2 text-xs sm:text-sm font-medium text-gray-800">
              <li className="flex items-center gap-3">
                <LightningIcon />
                <span>Tailored Training Programs</span>
              </li>
              <li className="flex items-center gap-3">
                <LightningIcon />
                <span>Expert-Led Workshops</span>
              </li>
              <li className="flex items-center gap-3">
                <LightningIcon />
                <span>Personalized Mentorship</span>
              </li>
              <li className="flex items-center gap-3">
                <LightningIcon />
                <span>Technical Skills Enhancement</span>
              </li>
              <li className="flex items-center gap-3">
                <LightningIcon />
                <span>Collaborative Learning Environment</span>
              </li>
              <li className="flex items-center gap-3">
                <LightningIcon />
                <span>Ongoing Support and Resources</span>
              </li>
            </ul>
          </div>

          {/* Desktop Image */}
          <div className="hidden lg:block lg:col-span-6">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <Image
                src="/capacity-development.jpg"
                alt="Trainer giving capacity building strategy workshop"
                fill
                sizes="50vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
