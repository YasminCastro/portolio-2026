import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="min-h-screen w-full notebook-background">
      <Header />
      <Hero />
      <Skills />
      <Experience />
    </div>
  );
}
