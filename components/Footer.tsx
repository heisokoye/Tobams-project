import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A0B16] text-white border-t border-white/10 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Tobams Group Logo"
            width={140}
            height={40}
            className="h-8 w-auto brightness-200"
          />
          <span className="text-xs text-gray-400 border-l border-gray-700 pl-3">
            Frontend Assessment Implementation
          </span>
        </div>

        <p className="text-xs text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()} Tobams Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
