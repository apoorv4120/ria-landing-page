import Nav from './components/Nav'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import PricingTable from './components/PricingTable'
import WhatsAppFeature from './components/WhatsAppFeature'
import CashPickup from './components/CashPickup'
import WaysToSend from './components/WaysToSend'
import AppShowcase from './components/AppShowcase'

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <PricingTable />
        <WhatsAppFeature />
        <CashPickup />
        <WaysToSend />
        <AppShowcase />
      </main>
    </div>
  )
}

export default App
