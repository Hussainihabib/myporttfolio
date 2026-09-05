import { motion } from 'framer-motion'
import { CheckCircle2, Download } from 'lucide-react'
import { about, profile } from '../data/portfolioData.js'
import SectionHeading from './ui/SectionHeading.jsx'
import { useTilt } from '../hooks/useTilt.js'

export default function About() {
  const { ref, onMouseMove, onMouseLeave } = useTilt({ max: 6, scale: 1.015 })

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="section-shell flex flex-col gap-14">
        <SectionHeading
          kicker="About me"
          title="The person behind the code"
          description="A quick look at how I work and what I bring to a team."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative mx-auto md:mx-0 w-full max-w-sm"
          >
            <div
              ref={ref}
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
              className="relative rounded-3xl overflow-hidden will-change-transform"
              style={{ transformStyle: 'preserve-3d', transition: 'transform 0.15s ease-out' }}
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-electric/30 to-emerald/30 blur-2xl -z-10" />
              <img
                src={about.photo}
                alt={`Portrait of ${profile.name}`}
                className="w-full aspect-[6/7] object-cover rounded-3xl border border-white/10"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white font-display">{profile.name}</h3>
              <p className="text-electric text-sm mt-1">{about.role}</p>
            </div>

            <p className="text-slate-300 leading-relaxed">{about.paragraph1}</p>
            <p className="text-slate-400 leading-relaxed">{about.paragraph2}</p>

            <ul className="grid sm:grid-cols-2 gap-3 pt-2">
              {about.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={18} className="text-emerald shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="grid sm:grid-cols-3 gap-3 pt-2 text-sm">
              <div className="glass rounded-xl px-4 py-3">
                <div className="text-xs text-slate-500">Email</div>
                <div className="text-slate-200 truncate">{profile.email}</div>
              </div>
              <div className="glass rounded-xl px-4 py-3">
                <div className="text-xs text-slate-500">Phone</div>
                <div className="text-slate-200">{profile.phone}</div>
              </div>
              <div className="glass rounded-xl px-4 py-3">
                <div className="text-xs text-slate-500">Location</div>
                <div className="text-slate-200">{profile.location}</div>
              </div>
            </div>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-electric text-charcoal font-semibold px-6 py-3 w-fit hover:brightness-110 transition-all hover:-translate-y-0.5 shadow-glow mt-2"
            >
              View CV <Download size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
