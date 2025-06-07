"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
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
} from "lucide-react"

export default function ModernPortfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const experiences = [
    {
      title: "Head of Front-end",
      company: "DOOORDOOOR",
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
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Gradient Blobs/Manchas com animação de scroll - CORES DE DESTAQUE */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Mancha principal - azul suave */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-br from-blue-200 to-blue-100 rounded-full blur-3xl opacity-60 transition-all duration-1000 ease-out"
          style={{
            top: `${20 + scrollY * 0.1}px`,
            right: `${10 + scrollY * 0.05}px`,
          }}
        />

        {/* Mancha secundária - roxo suave */}
        <div
          className="absolute w-80 h-80 bg-gradient-to-br from-purple-200 to-purple-100 rounded-full blur-3xl opacity-50 transition-all duration-1000 ease-out"
          style={{
            top: `${window.innerHeight / 2 - scrollY * 0.15}px`,
            left: `${10 - scrollY * 0.03}px`,
          }}
        />

        {/* Mancha terciária - verde suave */}
        <div
          className="absolute w-72 h-72 bg-gradient-to-br from-emerald-200 to-emerald-100 rounded-full blur-3xl opacity-70 transition-all duration-1000 ease-out"
          style={{
            bottom: `${32 + scrollY * 0.08}px`,
            right: `${window.innerWidth / 3 + scrollY * 0.02}px`,
          }}
        />

        {/* Mouse follower sutil */}
        <div
          className="absolute w-64 h-64 bg-slate-100 rounded-full blur-3xl opacity-40 transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        />

        {/* Elementos geométricos sutis */}
        <div className="absolute top-20 right-20 w-px h-32 bg-gray-200" />
        <div className="absolute bottom-40 left-20 w-32 h-px bg-gray-200" />
      </div>

      {/* 3D Cube Animation */}
      <div className="fixed top-1/2 right-10 transform -translate-y-1/2 z-10 pointer-events-none hidden lg:block">
        <div className="relative w-20 h-20">
          <div
            className="absolute inset-0 border border-gray-200 transform-gpu"
            style={{
              animation: "rotateCube 20s linear infinite",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="absolute inset-0 bg-gray-50 opacity-20 transform translate-z-10" />
            <div className="absolute inset-0 bg-gray-100 opacity-20 transform rotate-y-90 translate-z-10" />
            <div className="absolute inset-0 bg-gray-50 opacity-20 transform rotate-y-180 translate-z-10" />
            <div className="absolute inset-0 bg-gray-100 opacity-20 transform rotate-y-270 translate-z-10" />
            <div className="absolute inset-0 bg-gray-50 opacity-20 transform rotate-x-90 translate-z-10" />
            <div className="absolute inset-0 bg-gray-100 opacity-20 transform rotate-x-270 translate-z-10" />
          </div>
        </div>
      </div>

      {/* Modern Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white font-medium">
              N
            </div>
            <span className="font-medium text-gray-900">Nicolas Moraes</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection(heroRef)}
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(experienceRef)}
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Menu className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <div className="flex flex-col p-4">
              <button
                onClick={() => scrollToSection(heroRef)}
                className="py-3 px-4 text-left text-gray-600 hover:text-black transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="py-3 px-4 text-left text-gray-600 hover:text-black transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection(experienceRef)}
                className="py-3 px-4 text-left text-gray-600 hover:text-black transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="py-3 px-4 text-left text-gray-600 hover:text-black transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      <div className="relative z-20 pt-16">
        {/* Hero Section */}
        <section ref={heroRef} className="min-h-[90vh] flex items-center justify-center px-6">
          <div className="max-w-5xl mx-auto">
            <div
              className={`transition-all duration-1500 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="mb-12 flex justify-center">
                <Badge
                  variant="outline"
                  className="border-gray-300 text-gray-600 bg-gray-50 px-4 py-2 text-xs font-medium tracking-widest uppercase"
                >
                  <MapPin className="w-3 h-3 mr-2" />
                  Blumenau, Brazil
                </Badge>
              </div>

              <div className="text-center">
                <div>
                  <h1 className="mb-6 cool-font">
                    <span className="block text-5xl md:text-8xl font-bold tracking-tight leading-none text-black">
                      NICOLAS
                    </span>
                    <span className="block text-4xl md:text-7xl font-black tracking-tighter mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      MORAES
                    </span>
                  </h1>

                  <p className="text-xl text-gray-600 leading-relaxed font-light mb-8 max-w-2xl mx-auto">
                    Fullstack Developer specializing in modern web technologies and immersive 3D experiences
                  </p>

                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <Button
                      size="lg"
                      className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300"
                    >
                      <Mail className="w-4 h-4 mr-3" />
                      GET IN TOUCH
                      <ArrowUpRight className="w-4 h-4 ml-3" />
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-sm font-medium tracking-wide"
                    >
                      VIEW WORK
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-16">
                <button
                  onClick={() => scrollToSection(aboutRef)}
                  className="p-2 rounded-full border border-gray-200 hover:border-gray-400 transition-all duration-300 animate-bounce"
                  style={{ animationDuration: "2s" }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="py-32 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <h2 className="text-5xl md:text-6xl font-light tracking-tighter mb-8 leading-tight">
                  <span className="text-gray-400">About</span>
                  <br />
                  <span className="text-black">Expertise</span>
                </h2>
              </div>

              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                  <p>
                    With <span className="text-black font-medium">5+ years</span> of experience in fullstack
                    development, I specialize in creating scalable, high-performance products.
                  </p>
                  <p>
                    My expertise spans modern web technologies, with particular focus on{" "}
                    <span className="text-black font-medium">3D web experiences</span> using Three.js and React Three
                    Fiber.
                  </p>
                  <p>
                    I thrive in dynamic environments, taking projects from concept to completion while maintaining
                    strong UX/UI principles.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mt-12">
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
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="p-3 rounded-full bg-white border border-gray-200 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-300">
                        <item.icon className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <h3 className="font-medium text-black mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600 font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section - Timeline Format */}
        <section ref={experienceRef} className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-light tracking-tighter mb-6 leading-tight">
                <span className="text-gray-400">Professional</span>
                <br />
                <span className="text-black">Experience</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                My journey through leading tech companies and innovative projects
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 to-purple-200" />

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative flex gap-8 group">
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-white border-2 border-blue-200 flex items-center justify-center group-hover:border-blue-300 transition-colors">
                        <Building className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-500 whitespace-nowrap">
                        {exp.year}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-12">
                      <Card className="border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
                        <CardContent className="p-8">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                            <div>
                              <h3 className="text-2xl font-semibold text-black mb-2">{exp.title}</h3>
                              <p className="text-lg text-gray-700 font-medium">{exp.company}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-600 font-medium">{exp.period}</p>
                              <p className="text-xs text-gray-500">{exp.duration}</p>
                              <p className="text-xs text-gray-500">{exp.location}</p>
                            </div>
                          </div>

                          <p className="text-gray-700 leading-relaxed mb-6">{exp.description}</p>

                          <div>
                            <h4 className="font-medium text-black mb-3">Key Highlights:</h4>
                            <div className="grid sm:grid-cols-2 gap-2">
                              {exp.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                  <ArrowRight className="w-3 h-3 text-blue-400" />
                                  {highlight}
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="py-32 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-light tracking-tighter mb-8 leading-tight">
                  <span className="text-gray-400">Technical</span>
                  <br />
                  <span className="text-black">Stack</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                  Specialized in modern technologies that power today's most innovative applications, with expertise
                  across the full development stack.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-black">Frontend Development</h3>
                      <p className="text-sm text-gray-600 font-light">React, Next.js, TypeScript, SCSS</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-black">Backend & APIs</h3>
                      <p className="text-sm text-gray-600 font-light">NestJS, Node.js, Prisma ORM</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-black">Web3 & Blockchain</h3>
                      <p className="text-sm text-gray-600 font-light">
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
                      <div className="bg-gradient-to-br from-gray-900 to-black p-8 text-white relative overflow-hidden">
                        <h3 className="text-2xl font-medium mb-4">AWS Cloud Services</h3>
                        <p className="text-gray-300 mb-6">3+ years of hands-on experience with cloud infrastructure</p>
                      </div>
                      <div className="p-8 bg-white">
                        <div className="grid grid-cols-3 gap-4">
                          {["S3", "CloudFront", "Lambda", "API Gateway", "EC2", "RDS"].map((service, index) => (
                            <div
                              key={service}
                              className="group relative p-4 rounded-lg bg-gray-50 border border-gray-100 text-center hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 cursor-pointer"
                              style={{
                                animationDelay: `${index * 100}ms`,
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                              <span className="relative font-medium text-gray-700 text-sm">{service}</span>
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
        <section ref={contactRef} className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter mb-12 leading-tight">
              <span className="text-gray-400">Let's</span>
              <br />
              <span className="text-black">Collaborate</span>
            </h2>

            <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed font-light">
              Ready to create something extraordinary together? Let's discuss your next project.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="border-gray-200 bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="p-4 rounded-full bg-gray-50 border border-gray-100 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all">
                    <Mail className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
                  </div>
                  <h3 className="font-medium text-black mb-3">Email</h3>
                  <a
                    href="mailto:nicolasmdesouza@gmail.com"
                    className="text-gray-600 hover:text-blue-600 transition-colors font-light text-sm"
                  >
                    nicolasmdesouza@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-white hover:border-purple-200 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="p-4 rounded-full bg-gray-50 border border-gray-100 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-50 group-hover:border-purple-200 transition-all">
                    <Phone className="w-6 h-6 text-gray-700 group-hover:text-purple-600" />
                  </div>
                  <h3 className="font-medium text-black mb-3">Phone</h3>
                  <a
                    href="tel:+5547992879838"
                    className="text-gray-600 hover:text-purple-600 transition-colors font-light text-sm"
                  >
                    +55 47 99287-9838
                  </a>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-white hover:border-emerald-200 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="p-4 rounded-full bg-gray-50 border border-gray-100 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-all">
                    <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-emerald-600" />
                  </div>
                  <h3 className="font-medium text-black mb-3">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/nicolas-moraes-de-souza-362522233/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-emerald-600 transition-colors font-light text-sm"
                  >
                    Connect
                  </a>
                </CardContent>
              </Card>
            </div>

            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white px-12 py-4 text-sm font-medium tracking-wide transition-all duration-300"
            >
              START A PROJECT
              <ArrowUpRight className="w-4 h-4 ml-3" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-gray-200 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white font-medium">
                    N
                  </div>
                  <span className="font-medium text-gray-900">Nicolas Moraes</span>
                </div>
                <p className="text-sm text-gray-600 font-light mb-4">
                  Fullstack Developer specializing in modern web technologies and immersive 3D experiences.
                </p>
                <div className="flex items-center gap-2">
                  <Circle className="w-2 h-2 fill-emerald-500" />
                  <span className="text-sm text-gray-700 font-medium">Available for new projects</span>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-black mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => scrollToSection(heroRef)}
                    className="block text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection(aboutRef)}
                    className="block text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection(experienceRef)}
                    className="block text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    Experience
                  </button>
                  <button
                    onClick={() => scrollToSection(contactRef)}
                    className="block text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    Contact
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm text-gray-500 font-light">© 2024 Nicolas Moraes de Souza</p>
                <p className="text-xs text-gray-400 font-light mt-1">Crafted in Blumenau, Brazil</p>
                <div className="flex justify-end gap-4 mt-4">
                  <a
                    href="https://www.linkedin.com/in/nicolas-moraes-de-souza-362522233/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-gray-600" />
                  </a>
                  <a
                    href="mailto:nicolasmdesouza@gmail.com"
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-gray-600" />
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Github className="w-4 h-4 text-gray-600" />
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
