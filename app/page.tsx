"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Code2,
  Palette,
  Globe,
  Sparkles,
  Circle,
  ChevronDown,
  Github,
  Menu,
  Building,
  ArrowRight,
  Moon,
  Sun,
} from "lucide-react"

export default function ModernPortfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  // Typewriter effect states
  const [typewriterText, setTypewriterText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [typewriterComplete, setTypewriterComplete] = useState(false)
  
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)

    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
    }

    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateWindowSize()

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleResize = () => {
      updateWindowSize()
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Update document class and save preference when dark mode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  // Typewriter effect
  useEffect(() => {
    const fullText = "NICOLAS MORAES"
    let currentIndex = 0
    
    const typeWriter = () => {
      if (currentIndex <= fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex))
        currentIndex++
        setTimeout(typeWriter, 100) // Speed of typing
      } else {
        setTypewriterComplete(true)
        // Cursor blink effect
        const cursorInterval = setInterval(() => {
          setShowCursor(prev => !prev)
        }, 530)
        
        // Stop cursor blinking after 3 seconds
        setTimeout(() => {
          clearInterval(cursorInterval)
          setShowCursor(false)
        }, 3000)
      }
    }

    // Start typewriter effect after component loads
    const startDelay = setTimeout(() => {
      typeWriter()
    }, 800)

    return () => {
      clearTimeout(startDelay)
    }
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const experiences = [
    {
      title: "Head of Front-end",
      company: "DOOOR",
      period: "Feb 2025 - Present",
      duration: "5 months",
      location: "Remote",
      description:
        "Leading the front-end team and ensuring delivery of high-quality solutions. Contributing to blockchain and Web3 development projects, including wallet connections and smart contract interactions.",
      highlights: [
        "Team leadership and mentoring",
        "Web3 and blockchain integration",
        "Full front-end development cycle ownership",
        "UX/UI optimization",
      ],
      year: "2025",
    },
    {
      title: "Fullstack Developer",
      company: "Scalable",
      period: "Oct 2023 - Feb 2025",
      duration: "1 year 5 months",
      location: "São Paulo, Brasil · Remote",
      description:
        "Developed a comprehensive financial platform back-end using NestJS, TypeScript, and Prisma ORM, implementing secure authentication, Open Finance integration, and payment processing.",
      highlights: [
        "NestJS & TypeScript backend",
        "Open Finance integration",
        "Multi-database architecture",
        "UI/UX insights and product ideas",
      ],
      year: "2023-2025",
    },
    {
      title: "Web3 Front-end Developer",
      company: "Blocklize",
      period: "May 2023 - Feb 2024",
      duration: "10 months",
      location: "Remote",
      description:
        "Front-end development using NextJS + SCSS, creating intuitive interfaces for portfolio visualization and transaction execution with ERC-20 and ERC-721 tokens.",
      highlights: [
        "NextJS + SCSS development",
        "ERC-20 and ERC-721 integration",
        "Digital asset management",
        "Blockchain security focus",
      ],
      year: "2023-2024",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white font-sans transition-colors duration-300 overflow-x-hidden">
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-gradient-to-br from-blue-200 to-blue-100 dark:from-blue-800/40 dark:to-blue-900/30 rounded-full blur-3xl opacity-60 dark:opacity-30 transition-all duration-1000 ease-out"
          style={{
            top: `${20 + scrollY * 0.1}px`,
            right: `${10 + scrollY * 0.05}px`,
          }}
        />

        <div
          className="absolute w-80 h-80 bg-gradient-to-br from-purple-200 to-purple-100 dark:from-purple-800/40 dark:to-purple-900/30 rounded-full blur-3xl opacity-50 dark:opacity-25 transition-all duration-1000 ease-out"
          style={{
            top: `${(windowSize.height || 800) / 2 - scrollY * 0.15}px`,
            left: `${10 - scrollY * 0.03}px`,
          }}
        />

        <div
          className="absolute w-72 h-72 bg-gradient-to-br from-emerald-200 to-emerald-100 dark:from-emerald-800/40 dark:to-emerald-900/30 rounded-full blur-3xl opacity-70 dark:opacity-35 transition-all duration-1000 ease-out"
          style={{
            bottom: `${32 + scrollY * 0.08}px`,
            right: `${(windowSize.width || 1200) / 3 + scrollY * 0.02}px`,
          }}
        />

        <div
          className="absolute w-64 h-64 bg-slate-100 dark:bg-slate-800/20 rounded-full blur-3xl opacity-40 dark:opacity-20 transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        />

      </div>

      {/* 3D Cube Animation */}
      <div className="fixed top-1/2 right-2 sm:right-6 md:right-10 transform -translate-y-1/2 z-10 pointer-events-none hidden sm:block lg:block">
        <div className="relative w-20 h-20">
                      <div
              className="absolute inset-0 border border-gray-200 dark:border-gray-700 transform-gpu"
              style={{
                animation: "rotateCube 20s linear infinite",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="absolute inset-0 bg-gray-50 dark:bg-gray-800 opacity-20 dark:opacity-10 transform translate-z-10" />
              <div className="absolute inset-0 bg-gray-100 dark:bg-gray-700 opacity-20 dark:opacity-10 transform rotate-y-90 translate-z-10" />
              <div className="absolute inset-0 bg-gray-50 dark:bg-gray-800 opacity-20 dark:opacity-10 transform rotate-y-180 translate-z-10" />
              <div className="absolute inset-0 bg-gray-100 dark:bg-gray-700 opacity-20 dark:opacity-10 transform rotate-y-270 translate-z-10" />
              <div className="absolute inset-0 bg-gray-50 dark:bg-gray-800 opacity-20 dark:opacity-10 transform rotate-x-90 translate-z-10" />
              <div className="absolute inset-0 bg-gray-100 dark:bg-gray-700 opacity-20 dark:opacity-10 transform rotate-x-270 translate-z-10" />
            </div>
        </div>
      </div>

      {/* Modern Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 flex justify-between items-center">
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-medium text-xs sm:text-sm lg:text-base">
              N
            </div>
            <span className="font-medium text-gray-900 dark:text-white font-pressStart2P text-xs sm:text-sm lg:text-base">Nicolas Moraes</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection(heroRef)}
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(experienceRef)}
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Contact
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-1 sm:gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-lg transition-colors duration-300">
            <div className="flex flex-col p-4">
              <button
                onClick={() => scrollToSection(heroRef)}
                className="py-3 px-4 text-left text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="py-3 px-4 text-left text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection(experienceRef)}
                className="py-3 px-4 text-left text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="py-3 px-4 text-left text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      <div className="relative z-20 pt-16">
        {/* Hero Section */}
        <section ref={heroRef} className="min-h-screen sm:min-h-[90vh] flex items-center justify-center px-3 sm:px-4 lg:px-6 relative overflow-hidden py-12 sm:py-16 md:py-24 lg:py-32">
          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none hidden sm:block">
            <div className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-blue-300 dark:bg-blue-500 rounded-full opacity-60 dark:opacity-40 animate-pulse" style={{ top: '20%', left: '10%', animationDelay: '0s' }} />
            <div className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-purple-400 dark:bg-purple-500 rounded-full opacity-40 dark:opacity-30 animate-pulse" style={{ top: '60%', left: '15%', animationDelay: '1s' }} />
            <div className="absolute w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-emerald-300 dark:bg-emerald-500 rounded-full opacity-50 dark:opacity-35 animate-pulse" style={{ top: '30%', right: '20%', animationDelay: '2s' }} />
            <div className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-gray-400 dark:bg-gray-500 rounded-full opacity-30 dark:opacity-25 animate-pulse" style={{ top: '70%', right: '10%', animationDelay: '3s' }} />
            <div className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-blue-200 dark:bg-blue-600 rounded-full opacity-40 dark:opacity-30 animate-pulse" style={{ bottom: '20%', left: '20%', animationDelay: '4s' }} />
            <div className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-purple-300 dark:bg-purple-600 rounded-full opacity-50 dark:opacity-35 animate-pulse" style={{ bottom: '40%', right: '25%', animationDelay: '2.5s' }} />
          </div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <div
              className={`transition-all duration-1500 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6 sm:mb-8 lg:mb-12 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Badge
                    variant="outline"
                    className="border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 px-3 py-2 sm:px-4 sm:py-2 text-xs font-medium tracking-widest uppercase"
                  >
                    <MapPin className="w-3 h-3 mr-2" />
                    Blumenau, Brazil
                  </Badge>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Badge
                    variant="outline"
                    className="border-emerald-300 dark:border-emerald-600 text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-4 py-2 text-xs font-medium tracking-widest uppercase"
                  >
                    <Circle className="w-2 h-2 mr-2 fill-emerald-500 dark:fill-emerald-400" />
                    Available for Projects
                  </Badge>
                </motion.div>
              </motion.div>

              <div className="text-center">
                <div>
                  <h1 className="mb-4 sm:mb-6 font-pressStart2P relative">
                    <span className="block text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-bold tracking-tight leading-none min-h-[1.2em]">
                      {typewriterText.split(' ').map((word, index) => {
                        const isNicolasWord = index === 0;
                        const isMoraesWord = index === 1;
                        
                        return (
                          <span 
                            key={index} 
                            className={`inline-block mr-2 sm:mr-4 ${
                              isMoraesWord 
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' 
                                : 'text-black dark:text-white'
                            }`}
                          >
                            {word}
                          </span>
                        );
                      })}
                      {!typewriterComplete && (
                        <span 
                          className={`inline-block w-1 h-[0.8em] bg-black dark:bg-white ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}
                          style={{ animation: showCursor ? 'none' : 'pulse 1s infinite' }}
                        />
                      )}
                    </span>
                    {typewriterComplete && (
                      <span 
                        className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold tracking-tight mt-2 sm:mt-4 text-gray-700 dark:text-gray-400 animate-fade-in-up"
                        style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
                      >
                        DEVELOPER
                      </span>
                    )}
                  </h1>

                  {typewriterComplete && (
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light mb-6 sm:mb-8 max-w-xl lg:max-w-2xl mx-auto px-2 sm:px-0">
                        Fullstack Developer specializing in modern web technologies, Web3, and immersive 3D experiences
                      </p>
                    </div>
                  )}

                  {typewriterComplete && (
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-2 sm:px-0"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="lg"
                          className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
                        >
                          <Mail className="w-4 h-4 mr-3" />
                          GET IN TOUCH
                          <ArrowUpRight className="w-4 h-4 ml-3" />
                        </Button>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          VIEW WORK
                        </Button>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </div>

              {typewriterComplete && (
                <div className="flex justify-center mt-8 sm:mt-12 lg:mt-16 animate-fade-in-up" style={{ animationDelay: '1.1s', animationFillMode: 'both' }}>
                  <button
                    onClick={() => scrollToSection(aboutRef)}
                    className="p-2 sm:p-3 rounded-full border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 hover:scale-110 transition-all duration-300 animate-bounce shadow-md hover:shadow-lg"
                    style={{ animationDuration: "2s" }}
                  >
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 dark:text-gray-500" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="py-12 sm:py-16 md:py-24 lg:py-32 px-6 sm:px-4 lg:px-6 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="lg:col-span-5"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tighter mb-4 sm:mb-6 lg:mb-8 leading-tight">
                  <span className="text-gray-400 dark:text-gray-500">About</span>
                  <br />
                  <span className="text-black dark:text-white">Expertise</span>
                </h2>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:col-span-7 space-y-6 sm:space-y-8"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-3 sm:space-y-4 lg:space-y-6 text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light"
                >
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    With <span className="text-black dark:text-white font-medium">5+ years</span> of experience in fullstack
                    development, I specialize in creating scalable, high-performance products.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    My expertise spans modern web technologies, with particular focus on{" "}
                    <span className="text-black dark:text-white font-medium">3D web experiences</span> using Three.js and React Three
                    Fiber.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    I thrive in dynamic environments, taking projects from concept to completion while maintaining
                    strong UX/UI principles.
                  </motion.p>
                </motion.div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8 lg:mt-12">
                  {[
                    {
                      icon: Code2,
                      title: "Development",
                      desc: "Modern fullstack solutions",
                    },
                    {
                      icon: Sparkles,
                      title: "3D Web",
                      desc: "Immersive experiences",
                    },
                    {
                      icon: Palette,
                      title: "Design",
                      desc: "UX/UI focused approach",
                    },
                    {
                      icon: Globe,
                      title: "Global",
                      desc: "International collaboration",
                    },
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                      className="flex items-start gap-3 sm:gap-4 group"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-2 sm:p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 group-hover:border-blue-300 dark:group-hover:border-blue-500"
                      >
                        <item.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </motion.div>
                      <div>
                        <h3 className="font-medium text-black dark:text-white mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 font-light">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Experience Section - Timeline Format */}
        <section ref={experienceRef} className="py-12 sm:py-16 md:py-24 lg:py-32 px-3 sm:px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tighter mb-4 sm:mb-6 leading-tight">
                <span className="text-gray-400 dark:text-gray-500">Professional</span>
                <br />
                <span className="text-black dark:text-white">Experience</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-xl lg:max-w-2xl mx-auto font-light px-2 sm:px-0">
                My journey through leading tech companies and innovative projects
              </p>
            </div>

            <div className="relative mx-4">
              {/* Timeline Line */}
              <div className="absolute left-3 sm:left-4 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 to-purple-200 dark:from-blue-700 dark:to-purple-700" />

              <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 group"
                  >
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-700 flex items-center justify-center group-hover:border-blue-300 dark:group-hover:border-blue-500 transition-colors">
                        <Building className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
                        {exp.year}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8 sm:pb-10 lg:pb-12">
                      <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 hover:border-blue-200 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg">
                        <CardContent className="p-4 sm:p-6 lg:p-8">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div>
                              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black dark:text-white mb-1 sm:mb-2">{exp.title}</h3>
                              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-medium">{exp.company}</p>
                            </div>
                            <div className="text-left md:text-right">
                              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{exp.period}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-500">{exp.duration}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-500">{exp.location}</p>
                            </div>
                          </div>

                          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">{exp.description}</p>

                          <div>
                            <h4 className="font-medium text-black dark:text-white mb-2 sm:mb-3 text-sm sm:text-base">Key Highlights:</h4>
                            <div className="grid sm:grid-cols-2 gap-1 sm:gap-2">
                              {exp.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 py-1">
                                  <ArrowRight className="w-3 h-3 text-blue-400 dark:text-blue-500 mt-0.5 flex-shrink-0" />
                                  <span>{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-6 sm:px-4 lg:px-6 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tighter mb-6 sm:mb-8 leading-tight">
                  <span className="text-gray-400 dark:text-gray-500">Technical</span>
                  <br />
                  <span className="text-black dark:text-white">Stack</span>
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light mb-6 sm:mb-8">
                  Specialized in modern technologies that power today's most innovative applications, with expertise
                  across the full development stack.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    </div>
                    <div>
                      <h3 className="font-medium text-black dark:text-white">Frontend Development</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-light">React, Next.js, TypeScript, SCSS</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    </div>
                    <div>
                      <h3 className="font-medium text-black dark:text-white">Backend & APIs</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-light">NestJS, Node.js, Prisma ORM</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    </div>
                    <div>
                      <h3 className="font-medium text-black dark:text-white">Web3 & Blockchain</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                        Smart Contracts, ERC-20/721, Wallet Integration
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modern AWS Cloud Services */}
              <div>
                <div className="relative">
                  <Card className="border-0 shadow-xl overflow-hidden relative">
                    <CardContent className="p-0">
                      <div className="bg-gradient-to-br from-gray-900 to-black dark:from-gray-800 dark:to-gray-900 p-8 text-white relative overflow-hidden">
                        <h3 className="text-2xl font-medium mb-4">AWS Cloud Services</h3>
                        <p className="text-gray-300 dark:text-gray-400 mb-6">3+ years of hands-on experience with cloud infrastructure</p>
                      </div>
                      <div className="p-8 bg-white dark:bg-gray-800">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                          {["S3", "CloudFront", "Lambda", "API Gateway", "EC2", "RDS"].map((service, index) => (
                            <div
                              key={service}
                              className="group relative p-2 sm:p-4 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 text-center hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300 cursor-pointer"
                              style={{
                                animationDelay: `${index * 100}ms`,
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-50 dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                              <span className="relative font-medium text-gray-700 dark:text-gray-300 text-sm">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter mb-12 leading-tight">
              <span className="text-gray-400 dark:text-gray-500">Let's</span>
              <br />
              <span className="text-black dark:text-white">Collaborate</span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed font-light">
              Ready to create something extraordinary together? Let's discuss your next project.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 hover:border-blue-200 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-3 sm:p-8 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto  sm:mb-6 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                  </div>
                  <h3 className="font-medium text-black dark:text-white mb-3">Email</h3>
                  <a
                    href="mailto:nicolasmdesouza@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-light text-sm"
                  >
                    nicolasmdesouza@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 hover:border-purple-200 dark:hover:border-purple-600 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-3 sm:p-8 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto  sm:mb-6 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
                  </div>
                  <h3 className="font-medium text-black dark:text-white mb-3">Phone</h3>
                  <a
                    href="tel:+5547992879838"
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-light text-sm"
                  >
                    +55 47 99287-9838
                  </a>
                </CardContent>
              </Card>

              <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 hover:border-emerald-200 dark:hover:border-emerald-600 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-3 sm:p-8 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto  sm:mb-6 flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                  </div>
                  <h3 className="font-medium text-black dark:text-white mb-3">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/nicolas-moraes-de-souza-362522233/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-light text-sm"
                  >
                    Connect
                  </a>
                </CardContent>
              </Card>
            </div>

            <Button
              size="lg"
              className="bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-black px-8 sm:px-12 py-3 sm:py-4 text-sm font-medium tracking-wide transition-all duration-300 w-full sm:w-auto"
            >
              START A PROJECT
              <ArrowUpRight className="w-4 h-4 ml-3" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 sm:py-16 px-4 sm:px-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-medium">
                    N
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white font-pressStart2P">Nicolas Moraes</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-light mb-4">
                  Fullstack Developer specializing in modern web technologies and immersive 3D experiences.
                </p>
                <div className="flex items-center gap-2">
                  <Circle className="w-2 h-2 fill-emerald-500 dark:fill-emerald-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Available for new projects</span>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-black dark:text-white mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => scrollToSection(heroRef)}
                    className="block text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection(aboutRef)}
                    className="block text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection(experienceRef)}
                    className="block text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    Experience
                  </button>
                  <button
                    onClick={() => scrollToSection(contactRef)}
                    className="block text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </div>
              </div>

              <div className="text-left md:text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400 font-light font-pressStart2P">© 2024 Nicolas Moraes de Souza</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 font-light mt-1">Crafted in Blumenau, Brazil</p>
                <div className="flex justify-start md:justify-end gap-4 mt-4">
                  <a
                    href="https://www.linkedin.com/in/nicolas-moraes-de-souza-362522233/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </a>
                  <a
                    href="mailto:nicolasmdesouza@gmail.com"
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Github className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes rotateCube {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }
        .translate-z-10 {
          transform: translateZ(10px);
        }
        .rotate-y-90 {
          transform: rotateY(90deg);
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .rotate-y-270 {
          transform: rotateY(270deg);
        }
        .rotate-x-90 {
          transform: rotateX(90deg);
        }
        .rotate-x-270 {
          transform: rotateX(270deg);
        }
      `}</style>
    </div>
  )
}
