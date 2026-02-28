import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ForWhom from "@/components/ForWhom";
import Author from "@/components/Author";
import Program from "@/components/Program";
import Results from "@/components/Results";
import Pricing from "@/components/Pricing";
import CTAForm from "@/components/CTAForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />
      <Hero />
      <ForWhom />
      <Author />
      <Program />
      <Results />
      <Pricing />
      <CTAForm />
      <Footer />
    </main>
  );

}

