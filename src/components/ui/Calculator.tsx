import { useState } from 'react'
import Button from './Button'

const COUNTRIES = [
  { code: 'MX', name: 'Mexico',      flag: '🇲🇽', rate: 17.23   },
  { code: 'IN', name: 'India',       flag: '🇮🇳', rate: 83.91   },
  { code: 'PH', name: 'Philippines', flag: '🇵🇭', rate: 56.12   },
  { code: 'NG', name: 'Nigeria',     flag: '🇳🇬', rate: 1610.50 },
  { code: 'CO', name: 'Colombia',    flag: '🇨🇴', rate: 3921.00 },
  { code: 'GT', name: 'Guatemala',   flag: '🇬🇹', rate: 7.78    },
]

export default function Calculator() {
  const [amount, setAmount]   = useState('250')
  const [country, setCountry] = useState(COUNTRIES[0])

  const fee      = 2.99
  const received = ((parseFloat(amount) || 0) * country.rate).toFixed(2)

  return (
    // Dark-tinted glass: bg-black/30 = 70% orange shows through the blur
    // This is glassmorphism — not a dark card, dark-tinted transparent glass
    <div className="bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl w-full max-w-sm mx-auto">
      <div className="p-5 flex flex-col gap-3">

        {/* Card header */}
        <div className="flex items-center justify-between mb-1">
          <p className="text-sm font-semibold text-white">Send money</p>
          <span className="text-xs bg-green-500/20 text-green-300 font-semibold px-2.5 py-1 rounded-full border border-green-400/30">
            No fees on first send
          </span>
        </div>

        {/* You send — glass sub-panel, slightly lighter than card */}
        <div>
          <label htmlFor="calc-send-amount" className="text-xs font-medium text-white/90 mb-1.5 block">You send</label>
          <div className="flex items-center bg-white/10 border border-white/15 rounded-xl focus-within:bg-white/15 focus-within:border-white/30 transition-all">
            <input
              id="calc-send-amount"
              type="number"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1 px-4 py-3 text-xl font-bold text-white outline-none bg-transparent rounded-l-xl min-w-0"
            />
            <span className="shrink-0 whitespace-nowrap px-4 py-3 bg-white/10 text-sm font-semibold text-white/90 border-l border-white/10 rounded-r-xl">
              🇺🇸 USD
            </span>
          </div>
        </div>

        {/* Rate info */}
        <div className="flex items-center gap-1.5 text-xs text-white/90 px-1">
          <svg className="w-3.5 h-3.5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          1 USD = {country.rate} {country.code} · Fee: ${fee}
        </div>

        {/* Send to — glass sub-panel */}
        <div>
          <label htmlFor="calc-destination" className="text-xs font-medium text-white/90 mb-1.5 block">Send to</label>
          <select
            id="calc-destination"
            value={country.code}
            onChange={(e) => setCountry(COUNTRIES.find(c => c.code === e.target.value) ?? COUNTRIES[0])}
            className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm font-medium text-white outline-none cursor-pointer focus:bg-white/15 focus:border-white/30 transition-all"
          >
            {COUNTRIES.map((c) => (
              <option key={c.code} value={c.code} className="bg-gray-900 text-white">{c.flag} {c.name}</option>
            ))}
          </select>
        </div>

        {/* They receive — brand-accented glass panel */}
        <div>
          <label className="text-xs font-medium text-white/90 mb-1.5 block">They receive</label>
          <div className="flex items-center bg-brand-500/20 border-2 border-brand-500/50 rounded-xl overflow-hidden">
            <span className="flex-1 px-4 py-3 text-xl font-bold text-white">
              {parseFloat(received).toLocaleString()}
            </span>
            <span className="px-4 py-3 text-sm font-semibold text-white/90 border-l border-brand-500/30 bg-brand-500/10">
              {country.flag} {country.code}
            </span>
          </div>
        </div>

        {/* Solid CTA — brightest element on the dark glass, maximum visual anchor */}
        <Button variant="white" size="lg" className="w-full mt-1 shadow-lg">
          Send money now →
        </Button>

      </div>
    </div>
  )
}
