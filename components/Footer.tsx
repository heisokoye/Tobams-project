import Image from "next/image";
import Link from "next/link";

const whatWeDo = [
  { label: "Sustainability Services", href: "#" },
  { label: "Strategy Planning and Implementation", href: "#" },
  { label: "Tech Talent Solutions", href: "#" },
  { label: "Training and Development", href: "#" },
  { label: "IT Consulting Services", href: "#" },
  { label: "Social Impact", href: "#" },
  { label: "Talent Recruitment", href: "#" },
];

const company = [
  { label: "About", href: "#" },
  { label: "Jobs", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Our Founder", href: "#" },
  { label: "Business Model", href: "#" },
  { label: "The Team", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Blog", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Testimonials", href: "#" },
];

const solution = [
  { label: "Tobams Group Academy", href: "#" },
  { label: "Help a Tech Talent", href: "#" },
  { label: "Campus Ambassadors Program", href: "#" },
  { label: "Join Our Platform", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Book a Consultation", href: "#" },
  { label: "Join Our Slack Community", href: "#" },
];

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A0B16] text-white">

      {/* ── CTA strip ── */}
      <div className="border-b border-white/10 px-4 sm:px-6 lg:px-12 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-xs sm:text-sm text-gray-400 mb-1">Ready to be a part of something extraordinary?</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
              Let&apos;s work together to create a difference
            </h2>
          </div>
          <Link
            href="#get-in-touch"
            className="self-start sm:self-auto shrink-0 bg-brand-purple hover:bg-[#471237] text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* ── Main nav columns ── */}
      <div className="px-4 sm:px-6 lg:px-12 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Image
              src="/logo.png"
              alt="Tobams Group"
              width={160}
              height={50}
              className="h-12 w-auto object-contain"
            />
            <p className="text-xs text-gray-400 leading-relaxed">
              Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specialising in talent acquisition, internships, and skill development with a global perspective.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { href: "#", icon: <LinkedInIcon />, label: "LinkedIn" },
                { href: "#", icon: <InstagramIcon />, label: "Instagram" },
                { href: "#", icon: <XIcon />, label: "X (Twitter)" },
              ].map(({ href, icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-colors"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* What We Do */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">What We Do</h3>
            <ul className="space-y-2.5">
              {whatWeDo.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-xs text-gray-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2.5">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-xs text-gray-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Solution</h3>
            <ul className="space-y-2.5">
              {solution.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-xs text-gray-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ── Offices + Contact ── */}
      <div className="px-4 sm:px-6 lg:px-12 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Registered Offices */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-semibold text-white mb-4">Registered Offices</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-semibold text-[#E05C8A] mb-1">United Kingdom</p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    07451196 (Registered by Company House)<br />
                    Vine Cottages, 215 North Street, Romford, Essex,<br />
                    United Kingdom, RM1 4QA
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#E05C8A] mb-1">Nigeria</p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    RC 1048722 (Registered by the Corporate Affairs Commission)<br />
                    4, Muaz Close, Angwar-Rimi
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Contact Information</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-xs text-gray-400">
                  <EmailIcon />
                  <a href="mailto:theteam@tobamsgroup.com" className="hover:text-white transition-colors">
                    theteam@tobamsgroup.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-xs text-gray-400">
                  <PhoneIcon />
                  <a href="tel:+447886600748" className="hover:text-white transition-colors">
                    +447886600748
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── Copyright bar ── */}
      <div className="border-t border-white/10 px-4 sm:px-6 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            Copyright © Tobams Group, 2024. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            {["Terms and Conditions", "Privacy Policy", "Cookies Policy"].map((item) => (
              <Link key={item} href="#" className="text-xs text-gray-400 hover:text-white underline underline-offset-2 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
