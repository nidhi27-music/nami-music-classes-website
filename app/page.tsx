"use client"

import { useState } from "react"
import Image from "next/image"
import { InlineCalendlyButton } from "./components/calendly-button"
import LanguageSwitcher from "./components/language-switcher"
import { translations } from "./translations"
import { Music, User, BookOpen, MessageCircle, ChevronDown, Mail, Phone } from "lucide-react"

export default function Home() {
  const [language, setLanguage] = useState("english")
  const t = translations[language]

  return (
    <div className="min-h-screen bg-amber-50 text-stone-800 font-serif">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-amber-50/90 backdrop-blur-sm border-b border-amber-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Music className="h-6 w-6 text-orange-700" />
            <span className="text-xl font-medium">{t.siteName}</span>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6">
              {["home", "about", "courses", "contact"].map((item) => (
                <a key={item} href={`#${item}`} className="text-stone-700 hover:text-orange-700 transition-colors">
                  {t.nav[item]}
                </a>
              ))}
            </nav>
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
            <InlineCalendlyButton text={t.bookCall} className="hidden md:block" />
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-10">
            <Image
              src="/cover-image.png?height=800&width=1600"
              alt="Background pattern"
              fill
              className="object-cover"
            />
          </div>
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-800 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-stone-700">{t.hero.subtitle}</p>
              <div className="pt-4">
                <InlineCalendlyButton text={t.hero.cta} large />
              </div>
            </div>
            <div className="md:w-1/2 relative h-80 md:h-96 w-full rounded-lg overflow-hidden border-2 border-amber-200 shadow-lg">
              <Image
                src="/nami-logo.png?height=600&width=800"
                alt="Hindustani classical music"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-6 w-6 text-orange-700" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-b from-amber-50 to-amber-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-2/5 relative h-80 md:h-[500px] w-full rounded-lg overflow-hidden border-2 border-amber-200 shadow-lg">
                <Image
                  src="/nidhi-portrait.jpg?height=600&width=500"
                  alt="Nidhi performing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-3/5 space-y-6">
                <div className="flex items-center gap-2">
                  <User className="h-6 w-6 text-orange-700" />
                  <h2 className="text-3xl md:text-4xl font-bold text-orange-800">{t.about.title}</h2>
                </div>
                <p className="text-lg text-stone-700">{t.about.description1}</p>
                <p className="text-lg text-stone-700">{t.about.description2}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {t.about.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-orange-700"></div>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <BookOpen className="h-6 w-6 text-orange-700" />
                <h2 className="text-3xl md:text-4xl font-bold text-orange-800">{t.courses.title}</h2>
              </div>
              <p className="text-lg text-stone-700 max-w-2xl mx-auto">{t.courses.subtitle}</p>
            </div>

            <div className="max-w-3xl mx-auto bg-amber-50 rounded-lg p-8 border border-amber-200 shadow-md">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">{t.courses.fundamentals.title}</h3>
              <p className="text-lg text-stone-700 mb-6">{t.courses.fundamentals.description}</p>
              <ul className="space-y-3">
                {t.courses.fundamentals.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-orange-100 border border-orange-300 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-orange-800 font-medium">{index + 1}</span>
                    </div>
                    <span className="text-stone-700">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <InlineCalendlyButton text={t.courses.cta} />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-b from-amber-100 to-amber-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MessageCircle className="h-6 w-6 text-orange-700" />
                <h2 className="text-3xl md:text-4xl font-bold text-orange-800">{t.contact.title}</h2>
              </div>
              <p className="text-lg text-stone-700 max-w-2xl mx-auto">{t.contact.subtitle}</p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 border border-amber-200 shadow-md">
                <h3 className="text-2xl font-bold text-orange-800 mb-6">{t.contact.getInTouch}</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:contact@example.com"
                    className="flex items-center gap-3 text-stone-700 hover:text-orange-700 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-orange-700" />
                    <span>contact@example.com</span>
                  </a>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-stone-700 hover:text-orange-700 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-orange-700" />
                    <span>+1 (234) 567-890</span>
                  </a>
                </div>
                <div className="mt-8">
                  <h4 className="font-medium text-lg mb-3">{t.contact.followMe}</h4>
                  <div className="flex gap-4">
                    {["instagram", "youtube", "facebook"].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center hover:bg-orange-200 transition-colors"
                      >
                        <span className="sr-only">{social}</span>
                        <div className="h-5 w-5 bg-orange-700 mask mask-squircle"></div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 border border-amber-200 shadow-md">
                <h3 className="text-2xl font-bold text-orange-800 mb-6">{t.contact.schedule}</h3>
                <p className="text-stone-700 mb-6">{t.contact.scheduleDescription}</p>
                <div className="flex justify-center">
                  <InlineCalendlyButton text={t.contact.scheduleCta} large />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-amber-800 text-amber-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Music className="h-5 w-5" />
              <span className="text-lg font-medium">{t.siteName}</span>
            </div>
            <div className="text-sm text-amber-200">
              &copy; {new Date().getFullYear()} {t.siteName}. {t.footer.rights}
            </div>
            <div className="text-sm">
              <span>{t.footer.madeWith} ❤️</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
