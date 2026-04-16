import { useState } from 'react'
import Button from './Button'

const COUNTRIES = [
  { code: 'MX', name: 'Mexico', flag: '🇲🇽', rate: 17.23 },
  { code: 'IN', name: 'India', flag: '🇮🇳', rate: 83.91 },
  { code: 'PH', name: 'Philippines', flag: '🇵🇭', rate: 56.12 },
  { code: 'NG', name: 'Nigeria', flag: '🇳🇬', rate: 1610.5 },
  { code: 'CO', name: 'Colombia', flag: '🇨🇴', rate: 3921.0 },
  { code: 'GT', name: 'Guatemala', flag: '🇬🇹', rate: 7.78 },
]

export default function GlassCalculator() {
  const [amount, setAmount] = useState('250')
  const [country, setCountry] = useState(COUNTRIES[0])
  const fee = 2.99
  const received = ((parseFloat(amount) || 0) * country.rate).toFixed(2)

  return (
    <div className="backdrop-blur-2xl bg-white/12 border border-white/25 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.15)] overflow-hidden w-full">
      {/* Header band */}
      <div className="bg-white/15 border-b border-white/20 px-5 py-3">
        <p className="text-white font-semibold text-sm">How much do you want to send?</p>
      </div>

      <div className="p-5 flex flex-col gap-4">
        {/* Send input */}
        <div>
          <label className="text-white/75 text-xs font-medium mb-1 block">You send</label>
          <div className="bg-white/15 border border-white/25 rounded-xl overflow-hidden flex items-center">
            <input
              type="number"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-transparent flex-1 px-4 py-3 text-white text-xl font-bold placeholder-white/40 outline-none"
            />
            <span className="px-4 py-3 text-white/70 text-sm font-semibold border-l border-white/20">USD</span>
          </div>
          <p className="text-white/55 text-xs mt-1">1 USD = {country.rate} {country.code} · Fee: ${fee}</p>
        </div>

        {/* Country selector */}
        <div>
          <label className="text-white/75 text-xs font-medium mb-1 block">Send to</label>
          <select
            value={country.code}
            onChange={(e) => setCountry(COUNTRIES.find((c) => c.code === e.target.value) ?? COUNTRIES[0])}
            className="w-full bg-white/15 border border-white/25 rounded-xl px-4 py-3 text-white text-sm font-medium outline-none cursor-pointer"
          >
            {COUNTRIES.map((c) => (
              <option key={c.code} value={c.code} className="bg-brand-600 text-white">
                {c.flag} {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Receive output */}
        <div>
          <label className="text-white/75 text-xs font-medium mb-1 block">They receive</label>
          <div className="bg-white/20 border-2 border-white/40 rounded-xl overflow-hidden flex items-center">
            <span className="flex-1 px-4 py-3 text-white text-xl font-bold">
              {parseFloat(received).toLocaleString()}
            </span>
            <span className="px-4 py-3 text-white font-semibold text-sm border-l border-white/25">
              {country.code}
            </span>
          </div>
        </div>

        <Button variant="white" size="lg" className="w-full">
          Send money now →
        </Button>

        <p className="text-white/50 text-xs text-center mt-2">
          No hidden fees · Rate locked for 30 min
        </p>
      </div>
    </div>
  )
}
