'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { gallery, packages, services, testimonials } from '@/lib/data';

export function Header() {
  const links = ['Services', 'Packages', 'Gallery', 'Academy', 'Blog', 'Contact'];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="text-xl font-black tracking-tight">
          DEEJAY <span className="text-primary">TIMZ</span>
        </Link>
        <div className="hidden gap-6 text-sm md:flex">
          {links.map((link) => (
            <Link key={link} href={`/${link.toLowerCase()}`} className="hover:text-primary">
              {link}
            </Link>
          ))}
          <Link href="/booking" className="text-primary">
            Book
          </Link>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-secondary px-5 py-10 text-center text-white/70">
      <p className="font-bold text-white">Deejay Timz Entertainment Ltd</p>
      <p>DJ in Lagos • Event DJ Nigeria • Wedding DJ Lagos • DJ Academy Nigeria</p>
    </footer>
  );
}

export function Button({ href, children, alt = false }: { href: string; children: React.ReactNode; alt?: boolean }) {
  return (
    <Link
      href={href}
      className={`rounded-full px-6 py-3 font-bold transition ${
        alt ? 'border border-white/20 hover:border-primary' : 'bg-primary text-black shadow-glow hover:bg-white'
      }`}
    >
      {children}
    </Link>
  );
}

export function Hero({ title, subtitle, children }: { title: string; subtitle: string; children?: React.ReactNode }) {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden px-5 pt-24">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1600&q=80"
      >
        <source src="https://res.cloudinary.com/demo/video/upload/dog.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30" />
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative mx-auto max-w-7xl">
        <p className="mb-4 text-primary">Premium DJ & Event Entertainment</p>
        <h1 className="max-w-4xl text-5xl font-black md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-xl text-white/75">{subtitle}</p>
        <div className="mt-9 flex flex-wrap gap-4">{children}</div>
      </motion.div>
    </section>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <h2 className="mb-10 text-4xl font-black md:text-5xl">{title}</h2>
      {children}
    </section>
  );
}

export function ServiceCards() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {services.map((service) => (
        <motion.div
          whileHover={{ y: -8 }}
          key={service}
          className="rounded-3xl border border-white/10 bg-white/[.04] p-7"
        >
          <div className="mb-5 h-12 w-12 rounded-2xl bg-primary/20" />
          <h3 className="text-2xl font-bold">{service}</h3>
          <p className="mt-3 text-white/65">
            Premium planning, pro-grade execution, and refined guest experiences for Nigerian and international events.
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export function PackageCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {packages.map((pkg) => (
        <div
          key={pkg.name}
          className={`rounded-3xl border p-8 ${
            pkg.featured ? 'border-primary bg-primary/10 shadow-glow' : 'border-white/10 bg-white/[.04]'
          }`}
        >
          <h3 className="text-3xl font-black">{pkg.name}</h3>
          <p className="text-primary">{pkg.guests}</p>
          <p className="my-5 text-2xl font-bold">{pkg.price}</p>
          <ul className="space-y-3 text-white/75">
            {pkg.features.map((feature) => (
              <li key={feature}>✓ {feature}</li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/booking">Book Now</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export function GalleryGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {gallery.map((item) => (
        <div key={item.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <Image
            src={item.src}
            alt={item.title}
            width={1200}
            height={900}
            className="h-72 w-full object-cover transition group-hover:scale-105"
          />
          <div className="p-5">
            <p className="text-primary">{item.category}</p>
            <h3 className="font-bold">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {testimonials.map((testimonial) => (
        <blockquote key={testimonial.name} className="rounded-3xl border border-white/10 bg-white/[.04] p-7">
          <p className="text-primary">{'★'.repeat(testimonial.rating)}</p>
          <p className="my-4 text-white/80">“{testimonial.review}”</p>
          <footer className="font-bold">
            {testimonial.name}
            <span className="block text-sm font-normal text-white/50">{testimonial.role}</span>
          </footer>
        </blockquote>
      ))}
    </div>
  );
}

export function WhatsApp() {
  return (
    <a href="https://wa.me/2340000000000" className="fixed bottom-5 right-5 z-50 rounded-full bg-primary px-5 py-3 font-black text-black shadow-glow">
      WhatsApp
    </a>
  );
}
