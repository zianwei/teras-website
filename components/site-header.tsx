'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Mail } from 'lucide-react'
import { Logo } from '@/components/logo'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/personal', label: 'Personal Trust' },
  { href: '/corporate', label: 'Corporate Trust' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="hidden border-b border-border bg-primary text-primary-foreground md:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <p className="tracking-wide">
            Registered trust company under the Trust Companies Act 1949
          </p>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-2 hover:text-accent"
          >
            <Mail className="size-3.5" aria-hidden="true" />
            {site.email}
          </a>
        </div>
      </div>

      <div className="container-page flex h-18 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <Logo className="size-9 text-primary" />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-base font-semibold text-primary">
              {site.wordmark.lead}
            </span>
            <span className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
              {site.wordmark.tail}
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 md:flex lg:gap-8">
          {nav.map((item) => {
            const active =
              item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'relative py-2 text-sm transition-colors',
                  active
                    ? 'text-primary after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-accent'
                    : 'text-muted-foreground hover:text-primary',
                )}
              >
                {item.label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="hidden bg-primary px-5 py-2.5 text-sm text-primary-foreground transition-colors hover:bg-primary/90 lg:block"
          >
            Book a consultation
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex size-10 items-center justify-center text-primary md:hidden"
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-card md:hidden"
        >
          <ul className="container-page flex flex-col py-2">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-border last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-sm text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
