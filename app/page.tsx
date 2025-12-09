import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Academic from "@/components/Academic";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full notebook-background">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Academic />
      <Contact />
      <Footer />
    </div>
  );
}
