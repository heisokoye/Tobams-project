"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";

const avatars = ["/8.png", "/9.png", "/10.png"];

const testimonials = [
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    text: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    text: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    text: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
  },
  {
    name: "Sarah Johnson",
    role: "CEO of Tech Innovations Inc.",
    text: "Tobams Group is a true partner in our journey to digital excellence. Their creativity and technical expertise have propelled our projects to new heights. Their work is top-notch, and the results speak for themselves. I can't recommend them enough!",
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 2);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateButtons();
    el.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, [updateButtons]);

  const scroll = (dir: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".tc-card");
    const gap = 24;
    const amount = (card?.offsetWidth ?? 320) + gap;
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
    setTimeout(updateButtons, 600);
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E1B1E] text-center mb-10 tracking-tight">
          Testimonials
        </h2>

        {/* Scrollable card track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="tc-card shrink-0 snap-start w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-lg border border-gray-100 shadow-sm border-l-4 border-l-[#E53E3E] p-6 flex flex-col gap-4"
            >
              {/* Avatar + name row */}
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={avatars[i % avatars.length]}
                    alt={t.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1E1B1E] leading-tight">{t.name}</p>
                  <p className="text-xs text-gray-500 leading-tight mt-0.5">{t.role}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-700 leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => scroll("prev")}
            disabled={!canPrev}
            aria-label="Previous testimonial"
            className="w-9 h-9 rounded-full border border-[#E53E3E] flex items-center justify-center text-[#E53E3E] hover:bg-[#E53E3E] hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("next")}
            disabled={!canNext}
            aria-label="Next testimonial"
            className="w-9 h-9 rounded-full border border-[#E53E3E] flex items-center justify-center text-[#E53E3E] hover:bg-[#E53E3E] hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
