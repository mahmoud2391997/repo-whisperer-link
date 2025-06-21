'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import '../../../lib/i18n' // Initialize i18n

interface NavbarProps {
  hclass?: string
  Logo?: string
}

const Navbar: React.FC<NavbarProps> = ({ 
  hclass = 'wpo-site-header', 
  Logo = 'https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=400,height=400,onerror=redirect,format=auto/dEYvd/lBmMUm3zZyt94KtrsYYdL6UrUEOoncu4UJnK9VhR.png' 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lng
    
    if (lng === 'ar') {
      document.body.classList.add('rtl')
    } else {
      document.body.classList.remove('rtl')
    }
  }

  return (
    <header className={`${hclass} bg-white shadow-md fixed w-full top-0 z-50`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={Logo}
                alt="Masters Clinics Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('home')}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('about')}
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('services')}
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('team')}
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('blog')}
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('contact')}
            </Link>
          </nav>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Toggle */}
            <div className="flex space-x-2 rtl:space-x-reverse">
              <button
                onClick={() => changeLanguage('ar')}
                className={`px-2 py-1 text-sm rounded ${
                  i18n.language === 'ar' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                عربي
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2 py-1 text-sm rounded ${
                  i18n.language === 'en' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('about')}
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('services')}
              </Link>
              <Link
                href="/team"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('team')}
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('blog')}
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('contact')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
