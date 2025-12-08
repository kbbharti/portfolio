'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'sideprojects', 'education', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }

      if (window.scrollY < 100) {
        setActiveSection('')
      }
    }

    handleScroll() // Initial check
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const navLinkClass = (section: string) => {
    const isActive = mounted && activeSection === section
    return `relative text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
      isActive 
        ? 'text-blue-400 bg-gray-800/50' 
        : 'hover:bg-gray-800/30'
    } group`
  }
  
  const mobileNavLinkClass = (section: string) => {
    const isActive = mounted && activeSection === section
    return `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
      isActive 
        ? 'text-blue-400 bg-gray-800/70' 
        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
    }`
  }

  return (
    <nav className="fixed top-0 w-full bg-gray-900/98 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl z-50" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              onClick={handleLinkClick}
              className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-300 hover:to-pink-300 transition-all duration-300 hover:scale-105 inline-block"
            >
              Khushbu Bharti
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              <Link 
                href="/" 
                onClick={handleLinkClick}
                className={navLinkClass('')}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/#about" 
                onClick={handleLinkClick}
                className={navLinkClass('about')}
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/#experience" 
                onClick={handleLinkClick}
                className={navLinkClass('experience')}
              >
                Experience
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/#skills" 
                onClick={handleLinkClick}
                className={navLinkClass('skills')}
              >
                Skills
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/#sideprojects" 
                onClick={handleLinkClick}
                className={navLinkClass('sideprojects')}
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/#education" 
                onClick={handleLinkClick}
                className={navLinkClass('education')}
              >
                Education
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="https://drive.google.com/file/d/1wlllnCr9beP4eH62b5dFyqKzlblQD9LR/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 border border-transparent hover:border-blue-400/50 group"
              >
                Resume
                <span className="ml-1 inline-block group-hover:translate-x-1 transition-transform duration-300">↗</span>
              </Link>
              <Link 
                href="/#contact" 
                onClick={handleLinkClick}
                className={navLinkClass('contact')}
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-4 pb-6 space-y-1 bg-gray-900/98 backdrop-blur-xl border-t border-gray-800/50 shadow-2xl">
          <Link 
            href="/" 
            onClick={handleLinkClick}
            className={mobileNavLinkClass('')}
          >
            Home
          </Link>
          <Link 
            href="/#about" 
            onClick={handleLinkClick}
            className={mobileNavLinkClass('about')}
          >
            About
          </Link>
          <Link 
            href="/#experience" 
            onClick={handleLinkClick}
            className={mobileNavLinkClass('experience')}
          >
            Experience
          </Link>
          <Link 
            href="/#skills" 
            onClick={handleLinkClick}
            className={mobileNavLinkClass('skills')}
          >
            Skills
          </Link>
          <Link 
            href="/#sideprojects" 
            onClick={handleLinkClick}
            className={mobileNavLinkClass('sideprojects')}
          >
            Projects
          </Link>
          <Link 
            href="/#education" 
            onClick={handleLinkClick}
            className={mobileNavLinkClass('education')}
          >
            Education
          </Link>
          <Link 
            href="https://drive.google.com/file/d/1wlllnCr9beP4eH62b5dFyqKzlblQD9LR/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-white hover:bg-gray-800/50 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 border border-gray-700 hover:border-blue-400/50"
          >
            Resume ↗
          </Link>
          <Link 
            href="/#contact" 
            onClick={handleLinkClick}
            className={mobileNavLinkClass('contact')}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

