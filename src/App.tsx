import Nav from './components/Nav'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import PartnersCarousel from './components/PartnersCarousel'
import PricingTable from './components/PricingTable'
import WhatsAppFeature from './components/WhatsAppFeature'
import CashPickup from './components/CashPickup'
import WaysToSend from './components/WaysToSend'
import AppShowcase from './components/AppShowcase'
import Testimonials from './components/Testimonials'
import Timeline from './components/Timeline'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <PartnersCarousel />
        <PricingTable />
        <WhatsAppFeature />
        <CashPickup />
        <WaysToSend />
        <AppShowcase />
        <Testimonials />
        <Timeline />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
