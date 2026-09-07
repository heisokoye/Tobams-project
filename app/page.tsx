import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LmsSection from "@/components/LmsSection";
import TrainingServicesSection from "@/components/TrainingServicesSection";
import TransformationHubSection from "@/components/TransformationHubSection";
import ManagementDevelopmentSection from "@/components/ManagementDevelopmentSection";
import TrainingTheConsultantSection from "@/components/TrainingTheConsultantSection";
import CtaBannerSection from "@/components/CtaBannerSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LmsSection />
        <TrainingServicesSection />
        <ManagementDevelopmentSection />
        <TransformationHubSection />
        <TrainingTheConsultantSection />
        <CtaBannerSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
