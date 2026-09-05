import { motion } from 'framer-motion'
import { MonitorSmartphone, Server, Database, GitBranch } from 'lucide-react'
import { skills } from '../data/portfolioData.js'
import SectionHeading from './ui/SectionHeading.jsx'
import TiltCard from './ui/TiltCard.jsx'

const iconMap = { MonitorSmartphone, Server, Database, GitBranch }

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-matte/40">
      <div className="section-shell flex flex-col gap-14">
        <SectionHeading
          kicker="What I work with"
          title="My skills"
          description="Technologies and tools I use to design, build, and ship products."
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, i) => {
            const Icon = iconMap[group.icon] ?? MonitorSmartphone
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
              >
                <TiltCard className="p-6 h-full flex flex-col gap-4" max={6}>
                  <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-electric/10 text-electric">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-display font-semibold text-white text-lg">
                    {group.category}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{group.description}</p>
                  <div className="flex flex-wrap gap-2 pt-1 mt-auto">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
