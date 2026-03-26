'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <nav
        className={`fixed left-1/2 -translate-x-1/2 max-w-7xl z-[100] transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] animate-navEntrance ${isScrolled
          ? 'w-[90%] md:w-auto py-3 top-4 bg-white/95 border-black/10'
          : 'w-[95%] py-5 top-[calc(var(--announcement-height,0px)+1rem)] bg-white/5 border-black/5'
          } border backdrop-blur-2xl rounded-full shadow-2xl group/nav`}
      >
        <div className="mx-auto px-6 md:px-8 relative z-10">
          <div className="flex justify-between items-center gap-8">
            {/* Logo with Clean Scale */}
            <Link href="/" className="flex items-center shrink-0 relative group/logo isolate">
              <div className="relative z-10 transition-all duration-700 ease-out group-hover/logo:scale-110">
                <img
                  src="/logo-removebg-preview (1).png"
                  alt="Pranavi Infotech"
                  className="h-16 md:h-20 w-auto object-contain drop-shadow-sm select-none"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className={`hidden md:flex items-center rounded-full p-1 backdrop-blur-md bg-black/5`}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-6 py-2.5 text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-300 rounded-full group/link ${isActive
                      ? 'text-primary'
                      : 'text-slate-600 hover:text-slate-900'
                      }`}
                  >
                    <span className="relative z-10">
                      {link.label}
                    </span>

                    {/* ACTIVE INDICATOR / HOVER PILL */}
                    <div className={`absolute inset-0 rounded-full transition-all duration-300 ${isActive ? 'bg-primary/10' : 'bg-primary/0 group-hover/link:bg-primary/5'
                      }`} />

                    {/* Active Glow Bar */}
                    <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary transition-all duration-300 rounded-full shadow-[0_0_10px_#3b82f6] ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50 group-hover/link:opacity-50'
                      }`} />
                  </Link>
                )
              })}
            </div>

            <div className="hidden md:block">
              <Link href="/contact">
                <Button className="rounded-full px-10 text-[12px] font-black tracking-[0.2em] uppercase h-12 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.4)] bg-primary hover:bg-primary/90 text-white border-none">
                  Schedule a Call
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2.5 transition-all z-[110] relative rounded-full border border-black/5 text-slate-900 bg-black/5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                {isMobileMenuOpen ? (
                  <X size={24} className="animate-in fade-in zoom-in-95 duration-300" />
                ) : (
                  <Menu size={24} className="animate-in fade-in zoom-in-95 duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - SUPREME USABILITY MODE */}
      <div
        className={`fixed inset-0 bg-slate-950/95 backdrop-blur-3xl z-[90] transition-all duration-500 ease-out md:hidden ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 pt-20">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-4xl font-bold text-white/80 hover:text-white transition-all duration-300 px-6 py-3 rounded-2xl hover:bg-white/5 ${isMobileMenuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div
            className={`mt-12 transition-all duration-500 ${isMobileMenuOpen
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-90'
              }`}
            style={{ transitionDelay: `${navLinks.length * 50 + 200}ms` }}
          >
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button size="lg" className="rounded-full px-16 text-xl font-bold h-16 shadow-2xl bg-primary hover:bg-primary/90">
                Schedule a Call
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
