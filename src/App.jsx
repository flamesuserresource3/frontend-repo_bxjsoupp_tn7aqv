import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(99,102,241,0.25),transparent),radial-gradient(1000px_500px_at_-10%_20%,rgba(34,211,238,0.18),transparent)] bg-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-white/60">
        © {new Date().getFullYear()} Python Developer — Built with care.
      </footer>
    </div>
  );
}

export default App;
