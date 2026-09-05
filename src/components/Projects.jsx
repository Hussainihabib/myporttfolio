import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/portfolioData.js'
import SectionHeading from './ui/SectionHeading.jsx'
import TiltCard from './ui/TiltCard.jsx'

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="section-shell flex flex-col gap-14">
        <SectionHeading
          kicker="Selected work"
          title="Projects"
          description="A handful of products I've designed, built, and shipped."
        />

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: (i % 2) * 0.1 }}
            >
              <TiltCard className="overflow-hidden group h-full flex flex-col" max={5}>
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[8/5] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="font-display font-semibold text-lg text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-electric hover:text-white transition-colors"
                    >
                      Live demo <ExternalLink size={14} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      Code <Github size={14} />
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
