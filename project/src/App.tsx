import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 overflow-x-hidden">
      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-40"
          style={{
            background:
              'radial-gradient(circle at 20% 20%, rgba(34,197,94,0.08) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(20,184,166,0.06) 0%, transparent 40%)',
          }}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
