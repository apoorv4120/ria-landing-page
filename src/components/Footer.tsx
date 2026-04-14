const LINKS = {
  Company: ['About', 'Blog', 'Careers', 'Partnerships', 'Promotions'],
  Support: ['Help Center', 'Track a Transfer', 'Find a Location', 'Contact Us'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Security', 'Accessibility'],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="container-width">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <span className="font-display font-extrabold text-2xl text-brand-500 tracking-tight mb-4 block">ria</span>
            <p className="text-gray-500 text-sm leading-relaxed">Moving money for families since 1987.</p>
            <div className="flex gap-3 mt-4">
              {['I', 'F', 'T', 'L'].map((initial, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                  <span className="text-[10px] font-bold">{initial}</span>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(LINKS).map(([title, links]) => (
            <div key={title}>
              <p className="text-white text-sm font-semibold mb-4">{title}</p>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">© 2024 Ria Financial Services, Inc. NMLS ID #920968. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Cookies'].map(link => (
              <a key={link} href="#" className="text-gray-600 text-xs hover:text-gray-400">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
