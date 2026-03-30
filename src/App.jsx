import { HelmetProvider } from 'react-helmet-async';
import SeoHead from './components/SeoHead';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <HelmetProvider>
      <SeoHead />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </HelmetProvider>
  );
}
