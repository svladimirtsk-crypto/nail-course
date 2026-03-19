import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Audience from "@/components/Audience";
import Technique from "@/components/Technique";
import Program from "@/components/Program";
import Gallery from "@/components/Gallery";
import Benefits from "@/components/Benefits";
import Author from "@/components/Author";
import PricingFAQ from "@/components/PricingFAQ";
import Enroll from "@/components/Enroll";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Audience />
      <Technique />
      <Program />
      <Gallery />
      <Benefits />
      <Author />
      <PricingFAQ />
      <Enroll />
      <FloatingCTA />
      <Footer />
    </main>
  );
}
