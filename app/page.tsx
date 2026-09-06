import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrainingServicesSection from "@/components/TrainingServicesSection";
import LmsSection from "@/components/LmsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LmsSection />
        <TrainingServicesSection />
      </main>
      <Footer />
    </div>
  );
}
