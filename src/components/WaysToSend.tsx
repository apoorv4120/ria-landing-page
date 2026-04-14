import { motion } from 'framer-motion'
import SectionReveal from './ui/SectionReveal'

const SEND_METHODS = [
  { icon: '💻', title: 'Online', body: 'Send from any browser in minutes' },
  { icon: '📱', title: 'Mobile App', body: 'iOS & Android, rated 4.9★' },
  { icon: '🏪', title: '600K+ Locations', body: 'Walk in, send in person' },
  { icon: '💬', title: 'WhatsApp', body: 'Send without leaving the chat' },
]

const RECEIVE_METHODS = [
  { icon: '💵', title: 'Cash Pickup', body: 'At 600K+ locations worldwide' },
  { icon: '🏦', title: 'Bank Deposit', body: 'Direct to their account' },
  { icon: '📲', title: 'Digital Wallet', body: 'Mercado Pago, GCash, and more' },
  { icon: '🏧', title: 'ATM Withdrawal', body: 'Card-free cash access' },
  { icon: '🏠', title: 'Home Delivery', body: 'Cash delivered to their door' },
]

export default function WaysToSend() {
  return (
    <section className="bg-page section-padding">
      <div className="container-width">
        <SectionReveal className="text-center mb-14">
          <p className="text-brand-500 text-xs font-semibold uppercase tracking-widest mb-3">Flexibility</p>
          <h2 className="font-display font-extrabold text-gray-900 leading-tight tracking-tight" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            Your way or their way —<br />it works either way.
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <SectionReveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Ways to Send</p>
            </SectionReveal>
            <div className="grid grid-cols-2 gap-4">
              {SEND_METHODS.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="bg-white rounded-xl border border-gray-200 p-5 hover:border-brand-500 hover:shadow-md transition-all duration-200"
                >
                  <span className="text-2xl mb-3 block">{m.icon}</span>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{m.title}</p>
                  <p className="text-gray-500 text-xs">{m.body}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <SectionReveal delay={0.1}>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Ways to Receive</p>
            </SectionReveal>
            <div className="grid grid-cols-2 gap-4">
              {RECEIVE_METHODS.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="bg-white rounded-xl border border-gray-200 p-5 hover:border-brand-500 hover:shadow-md transition-all duration-200"
                >
                  <span className="text-2xl mb-3 block">{m.icon}</span>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{m.title}</p>
                  <p className="text-gray-500 text-xs">{m.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
