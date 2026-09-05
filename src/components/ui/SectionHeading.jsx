import { motion } from 'framer-motion'

export default function SectionHeading({ kicker, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col gap-3 max-w-2xl ${alignment}`}
    >
      {kicker && <span className="eyebrow">{kicker}</span>}
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      {description && <p className="text-slate-400 text-base md:text-lg">{description}</p>}
    </motion.div>
  )
}
