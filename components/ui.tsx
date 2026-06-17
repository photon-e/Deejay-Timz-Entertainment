'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { packages, services, testimonials, gallery } from '@/lib/data';

const navItems = ['Services', 'Packages', 'Gallery', 'Academy', 'Blog', 'Contact'];
const stats = ['500+ events delivered', '10k+ guests entertained', '6 premium services'];

export function Header() {
  return <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050505]/75 backdrop-blur-xl">
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
      <Link href="/" className="group flex items-center gap-3" aria-label="Deejay Timz Entertainment home">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-lg font-black text-black shadow-glow transition group-hover:scale-105">DT</span>
        <span className="leading-tight"><span className="block text-sm font-black tracking-[.26em] text-white">DEEJAY</span><span className="block text-lg font-black text-primary">TIMZ</span></span>
      </Link>
      <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[.04] p-1 text-sm text-white/70 md:flex">
        {navItems.map((x) => <Link key={x} href={`/${x.toLowerCase()}`} className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">{x}</Link>)}
      </div>
      <Link href="/booking" className="rounded-full bg-primary px-5 py-2.5 text-sm font-black text-black shadow-glow transition hover:bg-white">Book Now</Link>
    </nav>
  </header>;
}

export function Footer() {
  const footerLinks = [
    { title: 'Company', links: [{ label: 'About', href: '/about' }, { label: 'Services', href: '/services' }, { label: 'Packages', href: '/packages' }, { label: 'Gallery', href: '/gallery' }] },
    { title: 'Experiences', links: [{ label: 'Weddings', href: '/services' }, { label: 'Corporate Events', href: '/services' }, { label: 'Concerts', href: '/gallery' }, { label: 'DJ Academy', href: '/academy' }] },
    { title: 'Support', links: [{ label: 'Contact', href: '/contact' }, { label: 'FAQ', href: '/faq' }, { label: 'Booking', href: '/booking' }, { label: 'Blog', href: '/blog' }] },
  ];
  return <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-5 pt-20 text-white/70">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
    <div className="mx-auto grid max-w-7xl gap-12 pb-14 lg:grid-cols-[1.35fr_1fr]">
      <div className="glass rounded-[2rem] p-8 md:p-10">
        <p className="mb-4 text-sm font-bold uppercase tracking-[.3em] text-primary">Premium Entertainment Partner</p>
        <h2 className="max-w-2xl text-3xl font-black text-white md:text-5xl">Make every entrance, toast, and after-party feel unforgettable.</h2>
        <p className="mt-5 max-w-xl text-lg text-white/65">Professional DJs, concert-grade sound, event performers, media coverage, and practical DJ training for polished celebrations across Nigeria.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Button href="/booking">Plan An Event</Button><Button href="/contact" alt>Talk To Us</Button></div>
      </div>
      <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-3">
        {footerLinks.map((group) => <div key={group.title}><h3 className="mb-4 font-black text-white">{group.title}</h3><ul className="space-y-3 text-sm">{group.links.map((link) => <li key={link.href}><Link href={link.href} className="transition hover:text-primary">{link.label}</Link></li>)}</ul></div>)}
      </div>
    </div>
    <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 py-7 text-sm md:flex-row md:items-center md:justify-between">
      <p><span className="font-bold text-white">Deejay Timz Entertainment Ltd</span> • Lagos, Nigeria</p>
      <p>DJ in Lagos • Wedding DJ Lagos • Event DJ Nigeria • DJ Academy Nigeria</p>
    </div>
  </footer>;
}

export function Button({ href, children, alt = false }: { href: string; children: React.ReactNode; alt?: boolean }) {
  return <Link href={href} className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-bold transition ${alt ? 'border border-white/15 bg-white/[.03] text-white hover:border-primary hover:text-primary' : 'bg-primary text-black shadow-glow hover:bg-white'}`}>{children}</Link>;
}

export function Hero({ title, subtitle, children }: { title: string; subtitle: string; children?: React.ReactNode }) {
  return <section className="relative flex min-h-[88vh] items-center overflow-hidden px-5 pt-28">
    <video className="absolute inset-0 h-full w-full object-cover opacity-25" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1600&q=80"><source src="https://res.cloudinary.com/demo/video/upload/dog.mp4" type="video/mp4" /></video>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(245,197,24,.24),transparent_28%),linear-gradient(110deg,#020202_0%,rgba(0,0,0,.94)_45%,rgba(0,0,0,.52)_100%)]" />
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
      <div><p className="mb-5 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-bold uppercase tracking-[.22em] text-primary">Premium DJ & Event Entertainment</p><h1 className="max-w-5xl text-5xl font-black leading-[.95] md:text-7xl lg:text-8xl">{title}</h1><p className="mt-7 max-w-2xl text-xl leading-8 text-white/75">{subtitle}</p><div className="mt-9 flex flex-wrap gap-4">{children}</div></div>
      <div className="glass hidden rounded-[2rem] p-6 lg:block"><p className="text-sm uppercase tracking-[.22em] text-white/50">Trusted for</p><div className="mt-5 grid gap-4">{stats.map((stat) => <div key={stat} className="rounded-2xl border border-white/10 bg-black/25 p-5 text-2xl font-black text-primary">{stat}</div>)}</div></div>
    </motion.div>
  </section>;
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="mx-auto max-w-7xl px-5 py-20"><div className="mb-10 flex items-end justify-between gap-6"><h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl">{title}</h2><div className="hidden h-px flex-1 bg-gradient-to-r from-primary/70 to-transparent md:block" /></div>{children}</section>;
}

export function ServiceCards() { return <div className="grid gap-5 md:grid-cols-3">{services.map((s, i) => <motion.div whileHover={{ y: -8 }} key={s} className="group rounded-[2rem] border border-white/10 bg-white/[.04] p-7 transition hover:border-primary/50 hover:bg-primary/[.06]"><div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-primary/15 text-xl font-black text-primary">0{i + 1}</div><h3 className="text-2xl font-bold">{s}</h3><p className="mt-3 text-white/65">Premium planning, pro-grade execution, and refined guest experiences for Nigerian and international events.</p></motion.div>)}</div>; }
export function PackageCards() { return <div className="grid gap-6 lg:grid-cols-3">{packages.map((p) => <div key={p.name} className={`relative rounded-[2rem] border p-8 ${p.featured ? 'border-primary bg-primary/10 shadow-glow' : 'border-white/10 bg-white/[.04]'}`}>{p.featured && <span className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-xs font-black uppercase text-black">Popular</span>}<h3 className="text-3xl font-black">{p.name}</h3><p className="mt-2 text-primary">{p.guests}</p><p className="my-5 text-2xl font-bold">{p.price}</p><ul className="space-y-3 text-white/75">{p.features.map((f) => <li key={f} className="flex gap-3"><span className="text-primary">✓</span>{f}</li>)}</ul><div className="mt-8"><Button href="/booking">Book Now</Button></div></div>)}</div>; }
export function GalleryGrid() { return <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{gallery.map((g) => <div key={g.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"><div className="overflow-hidden"><img src={g.src} alt={g.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" /></div><div className="p-5"><p className="text-sm font-bold uppercase tracking-[.18em] text-primary">{g.category}</p><h3 className="mt-2 font-bold">{g.title}</h3></div></div>)}</div>; }
export function Testimonials() { return <div className="grid gap-5 md:grid-cols-3">{testimonials.map((t) => <blockquote key={t.name} className="rounded-[2rem] border border-white/10 bg-white/[.04] p-7"><p className="text-primary">{'★'.repeat(t.rating)}</p><p className="my-4 text-lg leading-8 text-white/80">“{t.review}”</p><footer className="font-bold">{t.name}<span className="block text-sm font-normal text-white/50">{t.role}</span></footer></blockquote>)}</div>; }
export function WhatsApp() { return <a href="https://wa.me/2340000000000" className="fixed bottom-5 right-5 z-50 rounded-full bg-primary px-5 py-3 font-black text-black shadow-glow transition hover:scale-105">WhatsApp</a>; }
