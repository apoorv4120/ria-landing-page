import Nav from './components/Nav'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <StatsBar />
      </main>
    </div>
  )
}

export default App
