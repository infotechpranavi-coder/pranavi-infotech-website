'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Our Projects', href: '/our-work' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header
      className={cn(
        'relative z-40 bg-white/95 border-b border-slate-200/80 backdrop-blur-sm',
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center shrink-0 rounded-lg px-1.5 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2"
          >
            <img
              src="/logo-removebg-preview (1).png"
              alt="Pranavi Infotech"
              className="h-9 sm:h-10 w-auto object-contain select-none"
            />
          </Link>

          <div className="hidden md:flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50/70 p-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200',
                    isActive
                      ? 'text-primary bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/70',
                  )}
                >
                  {isActive && (
                    <span className="absolute left-1/2 top-1 -translate-x-1/2 h-1 w-1 rounded-full bg-primary" />
                  )}
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="hidden md:flex items-center">
            <Link href="/contact">
              <Button size="sm" className="h-10 rounded-full px-5 text-sm font-semibold">
                Schedule a call
              </Button>
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
          </button>
        </div>

        <div
          className={cn(
            'md:hidden overflow-hidden transition-[max-height,opacity] duration-200 ease-out',
            isMobileMenuOpen ? 'max-h-[min(70vh,28rem)] opacity-100 py-2' : 'max-h-0 opacity-0',
          )}
        >
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-2 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-3.5 py-2.5 text-[15px] font-medium rounded-xl transition-colors',
                    isActive ? 'text-primary bg-white shadow-sm' : 'text-slate-700 hover:bg-white/70',
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="pt-1">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block">
                <Button className="w-full h-10 text-sm font-semibold rounded-xl">
                  Schedule a call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
