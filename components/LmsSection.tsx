import Image from "next/image";
import Link from "next/link";

export default function LmsSection() {
  const courses = [
    "Business Analysis",
    "Design Thinking",
    "Effective Communication",
    "Entrepreneurship",
    "Career Development",
    "Business Model",
  ];

  return (
    <section className="w-full bg-brand-lavender-bg py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/*
          Grid order (source order = mobile stacking order):
            1. Heading
            2. Photo
            3. Card + Button
          On desktop, "order" is flipped so the photo auto-places first
          (reserving col 1-5 across both rows via row-span-2), letting the
          heading and the card+button wrapper auto-flow into col 6-12,
          row 1 and row 2 respectively — no manual col/row-start needed.
        */}
        {/* On desktop the image column spans two grid rows so it fills the full height
            next to both the heading above and the info card below — matching the Figma layout. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-x-12 lg:gap-y-6 items-center lg:items-start">

          {/* Section Heading */}
          <h2 className="order-1 lg:order-2 lg:col-span-7 text-2xl sm:text-3xl md:text-[30px] text-brand-purple font-semibold tracking-widest leading-tight text-center lg:text-left">
            Learning Management System
          </h2>

          {/* Circular Team Photo */}
          <div className="order-2 lg:order-1 lg:col-span-5 lg:row-span-2 flex justify-center items-center">
            <div className="relative w-70 h-[280px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] lg:w-[430px] lg:h-[430px] rounded-full overflow-hidden shadow-md border-4 border-white/60 shrink-0">
              <Image
                src="/2.jpg"
                alt="TG Academy instructors - professional team members"
                fill
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 400px, 430px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Info Card + CTA Button */}
          <div className="order-3 lg:col-span-7 flex flex-col items-start space-y-6 w-full">

            {/* Info Card Container */}
            <div className="w-full bg-brand-card-bg rounded-2xl md:rounded-2xl p-6 sm:p-7 text-[#2C272B] shadow-xs">
              <p className="text-[18px] font-nunito-sans font-normal leading-[1.5] tracking-normal text-gray-800">
                TG Academy is a hub of knowledge and skill-building resources designed to
                empower tech talents on their learning journey. From technical courses
                covering the latest programming languages and development frameworks to soft
                skills training in leadership, effective communication and project
                management, TG Academy offers a wide range of courses to cater to diverse
                learning needs. With accessible and interactive learning materials,
                individuals can enhance their skills and stay ahead in today&apos;s
                competitive tech landscape.
              </p>
              {/* Subheading */}
              <h3 className="text-sm sm:text-base font-bold text-brand-purple mt-6 mb-4">
                Some of our courses include:
              </h3>

              {/* Courses Bullet List */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2.5 gap-x-4 text-xs sm:text-sm font-medium text-gray-800">
                {courses.map((course, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" aria-hidden="true" />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <Link
              href="#learn-more"
              className="bg-brand-purple hover:bg-[#471237] text-white font-medium px-6 py-3 rounded-md text-sm sm:text-base inline-flex items-center gap-2.5 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#5B1947]"
            >
              <span>Learn More</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}