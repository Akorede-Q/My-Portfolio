import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <header className="bg-white shadow-sm">
          <div className="container flex items-center justify-between py-4">
            <div className="text-xl font-semibold">Legit — Data Analyst</div>
            <nav className="space-x-6 text-sm">
              <a href="#projects" className="hover:text-primary">Projects</a>
              <a href="#about" className="hover:text-primary">About</a>
              <a href="#contact" className="hover:text-primary">Contact</a>
            </nav>
          </div>
        </header>

        <main className="container py-12">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
