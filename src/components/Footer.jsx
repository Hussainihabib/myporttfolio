import { ArrowUp } from 'lucide-react'
import { nav, profile } from '../data/portfolioData.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="section-shell flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-slate-500 order-2 sm:order-1">
          © {year} {profile.name}. All rights reserved.
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-6 order-1 sm:order-2">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-slate-400 hover:text-electric transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#home"
          aria-label="Back to top"
          className="order-3 flex items-center justify-center w-10 h-10 rounded-full glass text-slate-300 hover:text-electric hover:-translate-y-0.5 transition-all"
        >
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  )
}
