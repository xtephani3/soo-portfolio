import './App.css'
import AboutSection from './home/AboutSection'
import ContactSection from './home/ContactSection'
import HeroSection from './home/HeroSection'
import ServicesSection from './home/ServicesSection'
import WorkSection from './home/WorkSection'

function App() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#151827] text-white">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <ContactSection />
    </main>
  )
}

export default App
