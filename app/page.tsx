import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Academic from "@/components/Academic";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yasmin Castro",
  jobTitle: "Full-Stack Developer",
  url: "https://www.yascastro.com.br",
  email: "mailto:yasminsdcastro@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/yasmin-sdcastro",
    "https://github.com/YasminCastro",
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Next.js",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Instituto Federal de Goiás",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen w-full notebook-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Academic />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
