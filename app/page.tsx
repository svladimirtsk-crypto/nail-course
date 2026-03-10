import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ForWhom from "@/components/ForWhom";
import Testimonials from "@/components/Testimonials";
import Author from "@/components/Author";
import Program from "@/components/Program";
import Gallery from "@/components/Gallery";
import Results from "@/components/Results";
import Pricing from "@/components/Pricing";
import CTAForm from "@/components/CTAForm";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />
      <Hero />
      <ForWhom />
      <Testimonials />
      <Author />
      <Program />
      <Gallery />
      <Results />
      <Pricing />
      <CTAForm />
      <FloatingCTA />
      <Footer />
    </main>
  );
}
