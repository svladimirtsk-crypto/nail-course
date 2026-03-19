import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Method from "@/components/Method";
import Courses from "@/components/Courses";
import Gallery from "@/components/Gallery";
import Author from "@/components/Author";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Method />
      <Courses />
      <Gallery />
      <Author />
      <Pricing />
      <FinalCTA />
      <FloatingCTA />
      <Footer />
    </main>
  );
}
