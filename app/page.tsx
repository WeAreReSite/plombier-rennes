// app/page.tsx
import { Stats } from "@/components/Stats";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { ServicesSection } from "@/components/Services";
import { ReviewsSection } from "@/components/ReviewsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Stats />
      <ServicesSection />
      <ReviewsSection />
      <CTASection />
      <Footer />
    </>
  );
}