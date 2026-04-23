import { useEffect, useMemo, useRef, useState } from 'react'
import type { ComponentPropsWithoutRef, FormEvent, MouseEvent, ReactNode } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Cpu,
  Database,
  Download,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Send,
  SparklesIcon,
  Users,
  Zap,
} from 'lucide-react'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const stats = [
  { label: 'Years Learning', value: '3+' },
  { label: 'Projects Built', value: '12+' },
  { label: 'Cloud Focus', value: 'AWS | GCP' },
]

const skillGroups = [
  {
    title: 'Frontend',
    icon: Code2,
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Responsive Design'],
  },
  {
    title: 'Backend',
    icon: Cpu,
    items: ['Node.js', 'Express.js'],
  },
  {
    title: 'Databases',
    icon: Database,
    items: ['MongoDB', 'Supabase'],
  },
  {
    title: 'Cloud',
    icon: Cloud,
    items: ['AWS', 'GCP', 'Render', 'Vercel', 'Railway'],
  },
  {
    title: 'Tools',
    icon: Layers3,
    items: ['GitHub', 'Postman', 'VS Code'],
  },
  {
    title: 'Analytics',
    icon: SparklesIcon,
    items: ['Power BI', 'Looker Studio'],
  },
]

const projects = [
  {
    title: 'GigFlow',
    type: 'AI Freelance Marketplace',
    description:
      'A polished full-stack marketplace for clients and freelancers with role-based flows, gig operations, ratings, and dashboard intelligence.',
    features: [
      'Authentication and client/freelancer roles',
      'Gig management workflow',
      'Dashboard and ratings system',
    ],
    stack: ['React', 'Node.js', 'Supabase', 'Tailwind', 'AI Assistant'],
    live: 'https://gig-flow-smoky.vercel.app',
  },
  {
    title: 'PDFCraft',
    type: 'PDF Tool Web App',
    description:
      'A secure document toolkit for editing, merging, splitting, compressing, and signing files with a clean product-grade experience.',
    features: [
      'Merge, split, and compress PDFs',
      'Digital signatures',
      'Secure authentication',
    ],
    stack: ['React', 'Supabase', 'Tailwind'],
    live: 'https://pdfcraft-frontend-wb3k.vercel.app',
  },
  {
    title: 'Cloud Drive',
    type: 'Cloud File Storage System',
    description:
      'A modern cloud storage interface focused on file upload, management, and authenticated access with room to scale into a richer SaaS platform.',
    features: [
      'Upload and manage files',
      'Cloud storage style interface',
      'User authentication',
    ],
    stack: ['React', 'Cloud Storage', 'Authentication', 'File Sharing Environment'],
    live: 'https://cloud-drive-frontend-hazel.vercel.app',
  },
  {
    title: 'SkyBound',
    type: 'Premium Entertainment & Travel Booking App Assistant AI ',
    description:
      'The premium all-in-one platform for travel, entertainment, and lifestyle. Redefining how you explore and enjoy the world with a sleek, modern UI.',
    features: [
      'Travel and lifestyle platform integration',
      'Premium glassmorphic user interface',
      'Interactive booking and exploration flows',
    ],
    stack: ['React', 'Tailwind CSS', 'Supabase', 'AI Assistant'],
    live: 'https://skybound-frontend.vercel.app',
  },
  {
    title: 'Bug Tracker',
    type: 'Issue Tracking Dashboard',
    description:
      'A streamlined bug tracking interface built for logging issues, monitoring progress, and keeping development workflows clear through a focused, modern dashboard experience.',
    features: [
      'Create, organize, and prioritize reported issues',
      'Status-based workflow for active bug resolution',
      'Clean dashboard layout for faster team visibility',
    ],
    stack: ['React', 'Dashboard UI', 'Workflow Management', 'Responsive Design'],
    live: 'https://bug-tracker-frontend-rho-brown.vercel.app',
  },
]

const timeline = [
  {
    title: 'Web Development Intern',
    company: 'Innovexis',
    points: [
      'Built real-world SaaS projects with production-minded workflows',
      'Worked deeply on authentication systems and protected user flows',
      'Developed scalable applications with performance-aware UI patterns',
      'Focused on UI/UX quality, responsiveness, and smoother interactions',
    ],
  },
]

const strengths = [
  {
    title: 'Problem Solving',
    description: 'Breaks complex features into practical, shippable systems.',
    icon: Rocket,
  },
  {
    title: 'Fast Learner',
    description: 'Adapts quickly to new tools, frameworks, and cloud platforms.',
    icon: Zap,
  },
  {
    title: 'Team Collaboration',
    description: 'Communicates clearly and builds with product and user goals in mind.',
    icon: Users,
  },
  {
    title: 'Passion For Tech',
    description: 'Enjoys creating useful experiences that feel polished and modern.',
    icon: BriefcaseBusiness,
  },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pratham-panchmukh-21635b298',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/prathampanchmukh1234-maker',
    icon: Github,
  },
]

function MagneticButton({
  href,
  children,
  variant = 'primary',
  icon,
  download,
}: {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  icon?: ReactNode
  download?: boolean
}) {
  const ref = useRef<HTMLAnchorElement | null>(null)

  const handleMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    gsap.to(node, {
      x: x * 0.16,
      y: y * 0.16,
      duration: 0.35,
      ease: 'power3.out',
    })
  }

  const reset = () => {
    if (!ref.current) return
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.45,
      ease: 'elastic.out(1, 0.45)',
    })
  }

  return (
    <a
      ref={ref}
      href={href}
      download={download}
      className={`magnetic-button magnetic-button--${variant}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
    >
      <span>{children}</span>
      {icon}
    </a>
  )
}

function TiltPanel({
  className,
  children,
  ...props
}: {
  className?: string
  children: ReactNode
} & ComponentPropsWithoutRef<'div'>) {
  const ref = useRef<HTMLDivElement | null>(null)

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height

    node.style.setProperty('--px', `${px}`)
    node.style.setProperty('--py', `${py}`)
    node.style.setProperty('--rx', `${(0.5 - py) * 14}deg`)
    node.style.setProperty('--ry', `${(px - 0.5) * 18}deg`)
  }

  const reset = () => {
    const node = ref.current
    if (!node) return
    node.style.setProperty('--rx', '0deg')
    node.style.setProperty('--ry', '0deg')
    node.style.setProperty('--px', '0.5')
    node.style.setProperty('--py', '0.5')
  }

  return (
    <div
      ref={ref}
      className={`tilt-panel ${className ?? ''}`}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      {...props}
    >
      {children}
    </div>
  )
}

function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string
  title: string
  copy: string
}) {
  return (
    <div className="section-heading" data-reveal>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  )
}

function App() {
  const appRef = useRef<HTMLDivElement | null>(null)
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const prefersMotionRef = useRef(false)
  const [loading, setLoading] = useState(true)
  const [imageAvailable, setImageAvailable] = useState(true)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const skillTags = useMemo(
    () =>
      [
        'Full-Stack Development',
        'Cloud-Based Solutions',
        'Authentication Systems',
        'Scalable UI',
        'API Design',
        'Product Thinking',
      ].map((tag) => ({ tag })),
    [],
  )

  useEffect(() => {
    prefersMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timer = window.setTimeout(() => setLoading(false), 1700)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (prefersMotionRef.current) return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const cursor = cursorRef.current
    if (!cursor) return

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.22, ease: 'power2.out' })
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.22, ease: 'power2.out' })

    const move = (event: globalThis.MouseEvent) => {
      xTo(event.clientX)
      yTo(event.clientY)
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-copy > *',
        { autoAlpha: 0, y: 36 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.9,
          ease: 'power3.out',
          delay: 0.25,
        },
      )

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 44 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 82%',
            },
          },
        )
      })
    }, appRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${formState.name}`)
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`,
    )
    window.location.href = `mailto:prathampanchmukh1234@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="app-shell" ref={appRef}>
      <div className="cursor-glow" ref={cursorRef} />

      <motion.div
        className="loader"
        animate={loading ? { opacity: 1 } : { opacity: 0, pointerEvents: 'none' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <div className="loader__core">
          <div className="loader__ring" />
          <div className="loader__ring loader__ring--alt" />
          <span>Booting Pratham&apos;s Portfolio</span>
        </div>
      </motion.div>

      <div className="noise" />
      <div className="gradient gradient--one" />
      <div className="gradient gradient--two" />

      <header className="topbar">
        <a href="#hero" className="brand">
          <span className="brand__pulse" />
          Pratham Panchmukh
        </a>

        <nav className="nav">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="hero-copy">
            <span className="hero-badge">
              <SparklesIcon size={16} />
              Full-stack developer portfolio
            </span>
            <p className="hero-kicker">Full Stack Developer | Cloud Enthusiast</p>
            <h1>Pratham Panchmukh</h1>
            <p className="hero-subtitle">
              Building scalable digital products with clean engineering,
              thoughtful interfaces, and a strong cloud-first mindset.
            </p>

            <div className="hero-actions">
              <MagneticButton href="#projects" icon={<ArrowRight size={18} />}>
                View Projects
              </MagneticButton>
              <MagneticButton
                href="/Pratham-Panchmukh-Resume.html"
                download
                variant="ghost"
                icon={<Download size={18} />}
              >
                Download Resume
              </MagneticButton>
              <MagneticButton href="#contact" variant="ghost" icon={<Mail size={18} />}>
                Contact Me
              </MagneticButton>
            </div>

            <div className="hero-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="hero-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual-shell" data-reveal>
            <div className="hero-visual">
              <div className="hero-stage" />
              <div className="hero-photo-card hero-photo-card--main">
                <div className="hero-photo-card__frame hero-photo-card__frame--main">
                  {imageAvailable ? (
                    <img
                      className="hero-photo"
                      src="/profile/photo.jpeg"
                      alt="Pratham Panchmukh portrait"
                      loading="eager"
                      onError={() => setImageAvailable(false)}
                    />
                  ) : (
                    <div className="hero-photo hero-photo--fallback">
                      <span>Profile Photo</span>
                      <strong>Add `public/profile/photo.jpeg` for your portrait</strong>
                    </div>
                  )}
                </div>
                <div className="hero-photo-card__meta">
                  <span>Profile</span>
                  <strong>Pratham Panchmukh</strong>
                  <small>Full Stack Developer | Cloud Enthusiast</small>
                </div>
              </div>

              <div className="hero-note hero-note--top">
                <span>Currently focused on</span>
                <strong>Scalable web apps, auth flows, and cloud delivery.</strong>
              </div>

              <div className="hero-note hero-note--side">
                <span>Approach</span>
                <strong>Product-minded development with performance and clarity.</strong>
              </div>

              <div className="hero-overlay">
                <span>Selected Focus</span>
                <strong>Modern frontend systems, reliable backend architecture, and production-ready deployments.</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <SectionHeader
            eyebrow="About Me"
            title="A builder focused on useful products with cinematic presentation."
            copy="Pratham is a BCA student at Ajeenkya DY Patil University with a CGPA of 8.0 and graduation in 2026. He is passionate about web development, cloud computing, scalable systems, and shipping real-world applications with polish."
          />

          <div className="about-grid">
            <TiltPanel className="about-card" data-reveal>
              <div className="panel-glow" />
              <span className="chip">3D Profile Panel</span>
              <h3>Developer Snapshot</h3>
              <ul className="detail-list">
                <li>Ajeenkya DY Patil University</li>
                <li>BCA | CGPA: 8.0</li>
                <li>Graduation: 2026</li>
                <li>Focused on full-stack apps and cloud-native workflows</li>
              </ul>
            </TiltPanel>

            <div className="about-copy" data-reveal>
              <p>
                He enjoys building interfaces that feel premium on the surface
                and dependable underneath, blending frontend craft with backend
                structure and cloud deployment awareness.
              </p>
              <div className="skill-tags">
                {skillTags.map(({ tag }) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="stack">
          <SectionHeader
            eyebrow="Tech Stack"
            title="Interactive capability grid with depth, glow, and hover energy."
            copy="Each block is styled like a floating module in a futuristic control deck, highlighting the tools Pratham uses to design, build, deploy, and analyze applications."
          />

          <div className="stack-grid">
            {skillGroups.map((group, index) => {
              const Icon = group.icon
              return (
                <TiltPanel className="stack-card" key={group.title}>
                  <div className="stack-card__top">
                    <div
                      className="stack-orb"
                      style={{ animationDelay: `${index * 0.18}s` }}
                    >
                      <Icon size={20} />
                    </div>
                    <h3>{group.title}</h3>
                  </div>
                  <div className="stack-items">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </TiltPanel>
              )
            })}
          </div>
        </section>

        <section className="section" id="projects">
          <SectionHeader
            eyebrow="Projects"
            title="Showcase pieces designed like floating product capsules."
            copy="These projects emphasize product thinking, authentication, cloud-connected flows, and practical user experience. Each card has layered depth and interactive tilt to keep the portfolio feeling alive."
          />

          <div className="projects-grid">
            {projects.map((project, index) => (
              <TiltPanel className="project-card" key={project.title}>
                <div className="project-card__header">
                  <span className="project-index">0{index + 1}</span>
                  <span className="chip">{project.type}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-section">
                  {project.features.map((feature) => (
                    <div key={feature} className="project-row">
                      <span className="dot" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <a
                  className="project-link"
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Live Project
                  <ArrowRight size={18} />
                </a>
              </TiltPanel>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <SectionHeader
            eyebrow="Experience"
            title="Timeline storytelling with a product and systems mindset."
            copy="The experience section highlights how Pratham contributes across SaaS workflows, authentication, performance, and interface quality."
          />

          <div className="timeline">
            {timeline.map((item) => (
              <div className="timeline-card" key={item.company} data-reveal>
                <div className="timeline-marker">
                  <div className="timeline-marker__dot" />
                </div>
                <div className="timeline-content">
                  <span className="chip">Experience</span>
                  <h3>{item.title}</h3>
                  <p>{item.company}</p>
                  <div className="timeline-points">
                    {item.points.map((point) => (
                      <div key={point} className="project-row">
                        <span className="dot" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="strengths">
          <SectionHeader
            eyebrow="Strengths"
            title="The qualities that support how he works with teams and products."
            copy="Beyond tools and frameworks, these strengths shape how Pratham approaches delivery, communication, and technical growth."
          />

          <div className="strength-grid">
            {strengths.map((strength) => {
              const Icon = strength.icon
              return (
                <motion.article
                  key={strength.title}
                  className="strength-card"
                  whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                >
                  <div className="strength-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{strength.title}</h3>
                  <p>{strength.description}</p>
                </motion.article>
              )
            })}
          </div>
        </section>

        <section className="section section--contact" id="contact">
          <SectionHeader
            eyebrow="Contact"
            title="Let’s build something modern, scalable, and memorable."
            copy="The contact zone uses a glowing control-room aesthetic with direct actions for recruiters, collaborators, and clients."
          />

          <div className="contact-grid">
            <TiltPanel className="contact-panel">
              <div className="contact-panel__copy">
                <span className="chip">Direct Reach</span>
                <h3>Open to opportunities and meaningful collaborations.</h3>
                <p>
                  Available for internships, freelance work, and developer
                  opportunities focused on web experiences, backend systems, and
                  cloud-enabled products.
                </p>
              </div>

              <div className="contact-list">
                <a href="tel:8956204938">
                  <Phone size={18} />
                  8956204938
                </a>
                <a href="mailto:prathampanchmukh1234@gmail.com">
                  <Mail size={18} />
                  prathampanchmukh1234@gmail.com
                </a>
                <span>
                  <MapPin size={18} />
                  India
                </span>
              </div>

              <div className="social-row">
                {socialLinks.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon size={18} />
                      {item.label}
                    </a>
                  )
                })}
              </div>
            </TiltPanel>

            <form className="contact-form" onSubmit={handleSubmit} data-reveal>
              <label>
                <span>Name</span>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(event) =>
                    setFormState((current) => ({ ...current, name: event.target.value }))
                  }
                  placeholder="Your name"
                  required
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(event) =>
                    setFormState((current) => ({ ...current, email: event.target.value }))
                  }
                  placeholder="you@example.com"
                  required
                />
              </label>
              <label>
                <span>Message</span>
                <textarea
                  value={formState.message}
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                  placeholder="Tell Pratham about the opportunity or project."
                  rows={5}
                  required
                />
              </label>
              <button type="submit">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Designed as a cinematic 3D portfolio experience for recruiters and clients.</p>
        <a href="#hero">Back to top</a>
      </footer>
    </div>
  )
}

export default App
