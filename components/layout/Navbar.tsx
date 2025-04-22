'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MapPinned, Menu, X, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from '@/components/ThemeToggle'

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Contacto', href: '/contacto' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-op-purple-950/90 backdrop-blur-md shadow-sm'
          : 'bg-white/60 dark:bg-op-purple-950/60 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center space-x-2">
                <Globe className="w-8 h-8 text-op-purple-700 dark:text-op-purple-400" />
                <span className="text-xl font-bold tracking-tight text-op-purple-900 dark:text-white">
                  Open<span className="text-op-gold-500">Praxis</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium px-3 py-2 rounded-md transition-all duration-200 transform hover:scale-105 ${
                  pathname === item.href
                    ? 'text-op-purple-700 dark:text-op-gold-400 bg-op-purple-100 dark:bg-op-purple-800/40'
                    : 'text-op-purple-800 dark:text-gray-200 hover:text-op-purple-700 dark:hover:text-op-gold-400 hover:bg-op-purple-50 dark:hover:bg-op-purple-800/20'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-op-purple-800 dark:text-gray-200 hover:text-op-purple-700 dark:hover:text-op-gold-400 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-op-purple-950 shadow-lg"
          >
            <div className="space-y-1 px-4 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-2 px-3 rounded-md text-base font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? 'text-op-purple-700 dark:text-op-gold-400 bg-op-purple-100 dark:bg-op-purple-800/40'
                      : 'text-op-purple-800 dark:text-gray-200 hover:text-op-purple-700 dark:hover:text-op-gold-400 hover:bg-op-purple-50 dark:hover:bg-op-purple-800/20'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}