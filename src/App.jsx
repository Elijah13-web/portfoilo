import Navbar from './pages/Navbar';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/aboutMe';
import Testimonials from './pages/Testimonials';
import Skill from './pages/Skill';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main className='mx-auto container px-3'>
        <Home />
        <Skill />
        <AboutMe />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;