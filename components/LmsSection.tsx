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
    <section className="w-full bg-[#F3ECF2] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1280px] mx-auto">
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Circular Team Photo (Left on Desktop, Top on Mobile) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] lg:w-[430px] lg:h-[430px] rounded-full overflow-hidden shadow-md border-4 border-white/60 shrink-0">
              <Image
                src="/lms-team.jpg"
                alt="TG Academy instructors - professional team members"
                fill
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 400px, 430px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Heading, Info Card, and Button */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Section Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-[#5B1947] tracking-tight leading-tight">
              Learning Management System
            </h2>

            {/* Info Card Container */}
            <div className="w-full bg-[#E5D7E3] rounded-2xl md:rounded-3xl p-6 sm:p-8 text-[#2C272B] shadow-xs">
              <p className="text-sm sm:text-base leading-relaxed text-gray-800 font-normal">
                TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today&apos;s competitive tech landscape.
              </p>

              {/* Subheading */}
              <h3 className="text-sm sm:text-base font-bold text-[#5B1947] mt-6 mb-4">
                Some of our courses include:
              </h3>

              {/* Courses Bullet List */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2.5 gap-x-4 text-xs sm:text-sm font-medium text-gray-800">
                {courses.map((course, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B1947] shrink-0" aria-hidden="true" />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
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
    </section>
  );
}
