import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  CalendarCheck,
  Github,
  Linkedin,
  Facebook,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'
import emailjs from 'emailjs-com'
import { contact, profile } from '../data/portfolioData.js'
import SectionHeading from './ui/SectionHeading.jsx'

// Icon mapping
const iconMap = {
  Mail,
  Phone,
  MapPin,
  CalendarCheck,
  Github,
  Linkedin,
  Facebook,
}

// ============================================================
// Floating Input
// ============================================================

function FloatingInput({
  label,
  type = 'text',
  name,
  textarea = false,
}) {
  const Tag = textarea ? 'textarea' : 'input'

  return (
    <div className="relative w-full min-w-0">
      <Tag
        id={name}
        name={name}
        type={!textarea ? type : undefined}
        rows={textarea ? 4 : undefined}
        placeholder=" "
        required
        className="
          peer
          w-full
          min-w-0
          rounded-xl
          bg-white/[0.04]
          border border-white/10
          px-4
          pt-5
          pb-2
          text-sm
          text-white
          placeholder-transparent
          focus:border-electric/60
          focus:outline-none
          focus:ring-2
          focus:ring-electric/20
          transition-colors
          resize-none
        "
      />

      <label
        htmlFor={name}
        className="
          absolute
          left-4
          top-3.5
          text-slate-500
          text-sm
          pointer-events-none
          transition-all
          duration-200

          peer-placeholder-shown:top-3.5
          peer-placeholder-shown:text-sm
          peer-placeholder-shown:text-slate-500

          peer-focus:top-1.5
          peer-focus:text-xs
          peer-focus:text-electric

          peer-[:not(:placeholder-shown)]:top-1.5
          peer-[:not(:placeholder-shown)]:text-xs
        "
      >
        {label}
      </label>
    </div>
  )
}

// ============================================================
// Contact Component
// ============================================================

export default function Contact() {
  const form = useRef(null)
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  // ==========================================================
  // EmailJS Submit
  // ==========================================================

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.current) return

    setSending(true)
    setStatus('')

    emailjs
      .sendForm(
        'service_4wbqrno',
        'template_gte3wvk',
        form.current,
        'ZtQWlayNSbsiroujj'
      )
      .then(
        () => {
          setStatus('success')
          setSending(false)

          // Reset form after successful email
          form.current.reset()

          // Remove message after 5 seconds
          setTimeout(() => {
            setStatus('')
          }, 5000)
        },
        (error) => {
          console.error('EmailJS Error:', error)

          setStatus('error')
          setSending(false)

          // Remove error after 5 seconds
          setTimeout(() => {
            setStatus('')
          }, 5000)
        }
      )
  }

  // ==========================================================
  // Render
  // ==========================================================

  return (
    <section
      id="contact"
      className="
        relative
        py-16
        sm:py-20
        md:py-32
        overflow-hidden
      "
    >
      <div className="section-shell w-full max-w-full flex flex-col gap-10 sm:gap-12 md:gap-14">
        
        {/* ====================================================
            SECTION HEADING
        ==================================================== */}

        <SectionHeading
          kicker="Get in touch"
          title="Let's build something great"
          description="Have a project in mind, or just want to say hi? My inbox is open."
        />

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
          sm:gap-10
          md:gap-12
          items-start
          w-full
        ">

          {/* ==================================================
              LEFT SIDE
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
            }}
            className="
              flex
              flex-col
              gap-6
              sm:gap-8
              w-full
              min-w-0
            "
          >

            {/* Contact Cards */}

            <div className="flex flex-col gap-3 sm:gap-4 w-full">
              {contact.cards.map((card) => {
                const Icon = iconMap[card.icon]

                return (
                  <div
                    key={card.label}
                    className="
                      glass
                      rounded-xl
                      p-4
                      flex
                      items-center
                      gap-3
                      sm:gap-4
                      w-full
                      min-w-0
                      hover:border-electric/30
                      transition-colors
                    "
                  >
                    <span
                      className="
                        flex
                        items-center
                        justify-center
                        w-10
                        h-10
                        sm:w-11
                        sm:h-11
                        rounded-lg
                        bg-electric/10
                        text-electric
                        shrink-0
                      "
                    >
                      {Icon && <Icon size={20} />}
                    </span>

                    <div className="min-w-0">
                      <div className="text-xs text-slate-500">
                        {card.label}
                      </div>

                      <div className="
                        text-sm
                        text-slate-200
                        font-medium
                        break-words
                      ">
                        {card.value}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Social Links */}

            <div>
              <div className="text-xs text-slate-500 mb-3">
                Find me elsewhere
              </div>

              <div className="flex flex-wrap gap-3">
                {profile.socials.map((social) => {
                  const Icon = iconMap[social.icon]

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="
                        flex
                        items-center
                        justify-center
                        w-10
                        h-10
                        sm:w-11
                        sm:h-11
                        rounded-full
                        glass
                        text-slate-300
                        hover:text-electric
                        hover:shadow-glow
                        hover:-translate-y-0.5
                        transition-all
                        shrink-0
                      "
                    >
                      {Icon && <Icon size={18} />}
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* ==================================================
              RIGHT SIDE — EMAILJS FORM
          ================================================== */}

          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              delay: 0.1,
            }}
            className="
              glass
              rounded-2xl
              w-full
              max-w-full
              min-w-0
              p-5
              sm:p-6
              md:p-8
              flex
              flex-col
              gap-4
              sm:gap-5
            "
          >

            {/* Name + Email */}

            <div className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-4
              sm:gap-5
              w-full
            ">
              <FloatingInput
                label="Your name"
                name="user_name"
              />

              <FloatingInput
                label="Your email"
                name="user_email"
                type="email"
              />
            </div>

            {/* Subject */}

            <FloatingInput
              label="Subject"
              name="subject"
            />

            {/* Message */}

            <FloatingInput
              label="Message"
              name="message"
              textarea
            />

            {/* ==================================================
                SUBMIT BUTTON
            ================================================== */}

            <button
              type="submit"
              disabled={sending}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                w-full
                sm:w-fit
                rounded-full
                bg-gradient-to-r
                from-electric
                to-emerald
                text-charcoal
                font-semibold
                px-6
                py-3
                hover:brightness-110
                transition-all
                hover:-translate-y-0.5
                shadow-glow
                disabled:opacity-60
                disabled:cursor-not-allowed
                disabled:hover:translate-y-0
              "
            >
              {sending ? (
                <>
                  <span
                    className="
                      w-4
                      h-4
                      border-2
                      border-charcoal/30
                      border-t-charcoal
                      rounded-full
                      animate-spin
                    "
                  />

                  Sending...
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle2 size={18} />
                  Message sent
                </>
              ) : (
                <>
                  Send message
                  <Send size={16} />
                </>
              )}
            </button>

            {/* ==================================================
                SUCCESS MESSAGE
            ================================================== */}

            {status === 'success' && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-xs
                  text-emerald
                  text-center
                  leading-relaxed
                "
              >
                <CheckCircle2
                  size={16}
                  className="shrink-0"
                />

                Thanks for reaching out — I'll reply within a day or two.
              </motion.div>
            )}

            {/* ==================================================
                ERROR MESSAGE
            ================================================== */}

            {status === 'error' && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-xs
                  text-red-400
                  text-center
                  leading-relaxed
                "
              >
                <AlertCircle
                  size={16}
                  className="shrink-0"
                />

                Failed to send message. Please try again.
              </motion.div>
            )}

          </motion.form>
        </div>
      </div>
    </section>
  )
}