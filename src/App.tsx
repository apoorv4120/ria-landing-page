import Nav from './components/Nav'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import PricingTable from './components/PricingTable'
import WhatsAppFeature from './components/WhatsAppFeature'

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <PricingTable />
        <WhatsAppFeature />
      </main>
    </div>
  )
}

export default App
