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

export default function Calculator() {
  const [amount, setAmount] = useState('250')
  const [country, setCountry] = useState(COUNTRIES[0])
  const fee = 2.99
  const received = ((parseFloat(amount) || 0) * country.rate).toFixed(2)

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-sm mx-auto">
      {/* Header band */}
      <div className="bg-brand-500 px-5 py-3">
        <p className="text-white font-semibold text-sm">How much do you want to send?</p>
      </div>

      <div className="p-5 flex flex-col gap-4">
        {/* Send input */}
        <div>
          <label className="text-xs font-medium text-gray-500 mb-1 block">You send</label>
          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1 px-4 py-3 text-xl font-semibold text-gray-900 outline-none"
            />
            <span className="px-4 py-3 bg-gray-50 text-sm font-semibold text-gray-600 border-l border-gray-200">USD</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">1 USD = {country.rate} {country.code} · Fee: ${fee}</p>
        </div>

        {/* Country selector */}
        <div>
          <label className="text-xs font-medium text-gray-500 mb-1 block">Send to</label>
          <select
            value={country.code}
            onChange={(e) => setCountry(COUNTRIES.find(c => c.code === e.target.value) ?? COUNTRIES[0])}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-gray-900 outline-none bg-white cursor-pointer"
          >
            {COUNTRIES.map((c) => (
              <option key={c.code} value={c.code}>{c.flag} {c.name}</option>
            ))}
          </select>
        </div>

        {/* Receive input */}
        <div>
          <label className="text-xs font-medium text-gray-500 mb-1 block">They receive</label>
          <div className="flex items-center border-2 border-brand-500 bg-brand-50 rounded-lg overflow-hidden">
            <span className="flex-1 px-4 py-3 text-xl font-semibold text-gray-900">{parseFloat(received).toLocaleString()}</span>
            <span className="px-4 py-3 text-sm font-semibold text-brand-500 border-l border-brand-200">{country.code}</span>
          </div>
        </div>

        <Button variant="primary" size="lg" className="w-full">
          Send money now →
        </Button>
      </div>
    </div>
  )
}
