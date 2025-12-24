import { HeroSection } from "@/components/landing/hero-section";
import { ProductsSection } from "@/components/landing/products-section";
import { LogosSection } from "@/components/landing/logos-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { AISection } from "@/components/landing/ai-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { TemplatesSection } from "@/components/landing/templates-section";
import { CTASection } from "@/components/landing/cta-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <ProductsSection />
      <LogosSection />
      <FeaturesSection />
      <AISection />
      <TestimonialsSection />
      <TemplatesSection />
      <CTASection />
    </main>
  );
}
