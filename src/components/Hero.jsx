import { Component, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { profile } from '../data/portfolioData.js'
import HeroCanvas from './HeroCanvas.jsx'

function useTypingEffect(words, { typeSpeed = 70, deleteSpeed = 40, pause = 1400 } = {}) {
  const [text, setText] = useState('')
  const indexRef = useRef(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[indexRef.current % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      indexRef.current += 1
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
          )
        },
        deleting ? deleteSpeed : typeSpeed
      )
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, words, typeSpeed, deleteSpeed, pause])

  return text
}

export default function Hero() {
  const typed = useTypingEffect(profile.roles)
  const [canvasFailed, setCanvasFailed] = useState(false)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-0"
    >
      {/* Ambient mesh gradient background */}
      <div className="absolute inset-0 bg-mesh-gradient" aria-hidden="true" />
      <div
        className="absolute top-1/3 left-1/4 w-72 h-72 bg-electric/20 rounded-full blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald/20 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: '4s' }}
        aria-hidden="true"
      />

      <div className="section-shell relative grid md:grid-cols-2 gap-12 items-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col gap-6"
        >
          <span className="eyebrow">Hey, I'm {profile.name}</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-white">
            I design and build
            <br />
            <span className="grad-text">digital experiences</span>
          </h1>
          <p className="text-lg text-slate-300 h-8 font-medium">
            {typed}
            <span className="inline-block w-[2px] h-6 bg-electric ml-1 align-middle animate-pulse" />
          </p>
          <p className="text-slate-400 max-w-md leading-relaxed">{profile.tagline}</p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-electric text-charcoal font-semibold px-6 py-3 hover:brightness-110 transition-all hover:-translate-y-0.5 shadow-glow"
            >
              Hire Me <ArrowRight size={18} />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-white font-medium hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              View CV <Download size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative h-80 sm:h-96 md:h-[28rem]"
        >
          {!canvasFailed ? (
            <ErrorBoundary onError={() => setCanvasFailed(true)}>
              <HeroCanvas />
            </ErrorBoundary>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-electric to-emerald opacity-40 blur-2xl" />
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="relative w-full h-full object-cover rounded-full border-2 border-electric/50 shadow-glow"
                />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

// Minimal error boundary so a WebGL failure never breaks the whole page.
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch() {
    this.props.onError?.()
  }
  render() {
    if (this.state.hasError) return null
    return this.props.children
  }
}
