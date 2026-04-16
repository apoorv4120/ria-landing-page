import GlobeLayer from './components/GlobeLayer'
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
      {/* Fixed orange backdrop + fixed traveling globe — z-index 0 and 1 */}
      <GlobeLayer />

      {/*
        Content wrapper at z-index 2.
        Sections with solid backgrounds (dark/light) act as opaque curtains,
        hiding the globe as they scroll over it.
        Orange sections (Hero, CashPickup, FinalCTA) have no background —
        the fixed orange backdrop and globe show through them.
      */}
      <div className="relative" style={{ zIndex: 2 }}>
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
    </div>
  )
}

export default App
