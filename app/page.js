import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="space-y-24 px-6 md:px-20 max-w-5xl mx-auto">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
