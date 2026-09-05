import { motion } from 'framer-motion'
import { Briefcase, Download, GraduationCap, Award } from 'lucide-react'
import { experience, profile } from '../data/portfolioData.js'
import SectionHeading from './ui/SectionHeading.jsx'

const iconFor = {
  work: Briefcase,
  education: GraduationCap,
  certificate: Award,
}

export default function Resume() {
  return (
    <section id="resume" className="relative py-24 md:py-32 bg-matte/40">
      <div className="section-shell flex flex-col gap-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading
            kicker="Where I've been"
            title="Education"
            description="Education, work history, and certifications, in order."
          />
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full bg-emerald/10 border border-emerald/40 text-emerald px-5 py-2.5 text-sm font-medium hover:bg-emerald/20 transition-colors shrink-0 self-start sm:self-auto"
          >
            <Download size={16} className="animate-bounce" style={{ animationDuration: '2s' }} />
            Download CV
          </a>
        </div>

        <ol className="relative flex flex-col gap-10 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-white/10">
          {experience.map((item, i) => {
            const Icon = iconFor[item.type] ?? Briefcase
            return (
              <motion.li
                key={item.title + item.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
                className="relative pl-14"
              >
                <span className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full glass-strong text-electric border border-electric/30">
                  <Icon size={18} />
                </span>
                <div className="glass rounded-xl p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="font-display font-semibold text-white">{item.title}</h3>
                    <span className="text-xs text-slate-500">{item.period}</span>
                  </div>
                  <p className="text-sm text-electric/80 mb-2">{item.org}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
