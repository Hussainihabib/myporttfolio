import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav, profile } from '../data/portfolioData.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setOpen(false)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-charcoal/70 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="section-shell flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="font-display font-bold text-lg text-white tracking-tight">
          {profile.name.split(' ')[0]}
          <span className="text-electric">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-slate-300 hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-electric transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-electric/10 border border-electric/40 text-electric px-4 py-2 text-sm font-medium hover:bg-electric/20 transition-colors"
        >
          Let's talk
        </a>

        <button
          className="md:hidden text-white p-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden fixed top-0 right-0 h-screen w-72 bg-matte/95 backdrop-blur-xl border-l border-white/10 p-8 flex flex-col gap-6"
          >
            <button
              className="self-end text-white p-2 -mr-2"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X size={24} />
            </button>
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="text-lg text-slate-200 hover:text-electric transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-electric text-charcoal px-4 py-2.5 text-sm font-semibold"
            >
              Let's talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
