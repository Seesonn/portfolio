

import { useState, useEffect } from 'react'
import { ArrowRight, Moon, Sun, Music, Book, Feather, BookOpen, Linkedin, Send } from 'lucide-react'
import riyan from "./assest/riyan.jpg"
import home from "./assest/home.png"
import web from "./assest/web.jpg"
import ui from "./assest/ui.jpg"
import dev from "./assest/dev.jpg"
import po from "./assest/po.jpg"
import st from "./assest/st.png"
import so from "./assest/so.png"
import no from "./assest/no.png"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [touchPosition, setTouchPosition] = useState({ x: 0, y: 0 })
  const [isScrolling, setIsScrolling] = useState(false)

  

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  const handleTouchMove = (e) => {
    const touch = e.touches[0]
    setTouchPosition({ x: touch.clientX, y: touch.clientY })
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      setIsScrolling(true)
      
      const scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
      }, 150)

      return () => clearTimeout(scrollTimeout)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      className={`min-h-screen w-full transition-colors duration-300 ease-in-out ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
      onTouchMove={handleTouchMove}
    >
      <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-opacity-70 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold">SISAN</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4 lg:space-x-6">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-yellow-400 transition-colors text-sm lg:text-base">Home</button></li>
              
              <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-yellow-400 transition-colors text-sm lg:text-base">Portfolio</button></li>
              <li><button onClick={() => scrollToSection('creative-outlets')} className="hover:text-yellow-400 transition-colors text-sm lg:text-base">Creative Outlets</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-yellow-400 transition-colors text-sm lg:text-base">Contact</button></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={toggleMenu} 
              className="md:hidden w-8 h-8 flex flex-col justify-center items-center focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ease-out my-1 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-20 transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}></div>
        <div className="relative container mx-auto px-4 py-20">
          <button 
            onClick={toggleMenu}
            className={`absolute top-4 right-4 hover:text-yellow-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
            aria-label="Close menu"
          >
            <span className="sr-only">Close</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="space-y-8 text-2xl">
            <li><button onClick={() => scrollToSection('home')} className={`block hover:text-yellow-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Home</button></li>
            
            <li><button onClick={() => scrollToSection('portfolio')} className={`block hover:text-yellow-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Portfolio</button></li>
            <li><button onClick={() => scrollToSection('creative-outlets')} className={`block hover:text-yellow-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Creative Outlets</button></li>
            <li><button onClick={() => scrollToSection('contact')} className={`block hover:text-yellow-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Contact</button></li>
          </ul>
        </div>
      </div>

      <main className="container mx-auto px-4 pt-20">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center py-12 sm:py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">I'M SISAN BHATTARAI</h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 mb-4">  welcom to my website</h3>
              <p className="mb-6 text-sm sm:text-base lg:text-lg">"Dear Visitor, as you navigate through the content of this website, remember that life is a journey filled with twists, turns, and chapters that shape our unique stories. Embrace the highs, learn from the lows, and know that you're not alone. Just like the ever-changing nature of a webpage, your life is a work in progress. Keep scrolling, keep exploring, and find inspiration in every pixel of your personal narrative. Your story matters, and this space is a reminder that, no matter what, there's always a new page waiting to be written</p>
              <button className="bg-yellow-400 text-gray-900 px-4 sm:px-6 py-2 rounded-full font-bold flex items-center transition-transform hover:scale-105 text-sm sm:text-base">
                Follow Me <ArrowRight className="ml-2" size={16} />
              </button>
            </div>
            <div className="md:w-1/2">
              <img src={home} alt="sisan" className="rounded-lg shadow-lg w-full max-w-md mx-auto" />
            </div>
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">Personal  Insights</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img src={riyan} alt="Profile" width={300} height={400}className="rounded-lg shadow-lg w-full max-w-md mx-auto" />
            </div>
            <div className="md:w-2/3">
              <p className="mb-6 text-sm sm:text-base lg:text-lg">Sisan Bhattarai, born on December 10, 2001, in Nepal.
              Passionate about coding and poetry, I find joy in the intersection of technology and creativity.Exploring the beauty of Nepal while pursuing my interests is what drives me..  </p>
            
              <p className="mb-6 text-sm sm:text-base lg:text-lg"> I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clean, readable, highly performant code matters to me. </p>
              <p className="mb-6 text-sm sm:text-base lg:text-lg">  began my journey as a web developer in 2023, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way.  </p>
              
              <p className="mb-6 text-sm sm:text-base lg:text-lg"> When I'm not in full-on developer mode, you can find me hovering around on  Instagram or on Linkedin, witnessing the journey of early startups or enjoying some free time. You can follow me on Linkedin where I share tech-related bites and build in public, or you can follow me on GitHub. </p>
              <p className="mb-6 text-sm sm:text-base lg:text-lg">  </p>
              <h3 className="text-xl font-bold mb-2">Finally, some quick bits about me:</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Bachelor in CSIT</li>
                <li>Learning Cyber Security</li>
                
              </ul>
              <p></p>
            </div>
          </div>
        </section>

       

        {/* Portfolio Section */}
        <section id="portfolio" className="py-12 sm:py-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">Portfolio</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className={`p-4 rounded-lg shadow-md overflow-hidden group ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <img src={web}alt="Website Designing" className="w-full h-40 object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">Website Designing</h3>
            </div>
            <div className={`p-4 rounded-lg shadow-md overflow-hidden group ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <img src={ui} alt="UX/UI Graphic Designing" className="w-full h-40 object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">UX/UI Designing</h3>
            </div>
            <div className={`p-4 rounded-lg shadow-md overflow-hidden group ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <img src={dev} alt="Web Development" className="w-full h-40 object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">Cyber Security</h3>
            </div>
          </div>
        </section>

       

        {/* Creative Outlets Section */}
        <section id="creative-outlets" className="py-12 sm:py-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">Creative Outlets</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className={`p-4 rounded-lg shadow-md transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <img src={so} alt="Music Passion" className="w-full h-32 sm:h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Song</h3>
              <p className="mb-4 text-sm sm:text-base">Dive into my song that fuel and inspire your Music Passion.</p>
              <button className="bg-yellow-400 text-gray-900 px-3 py-2 rounded-full font-bold flex items-center transition-transform hover:scale-105 text-sm">
                <Music className="mr-2" size={16} />
                private
               
              </button>
            </div>
            
            <div className={`p-4 rounded-lg shadow-md transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <img src={po} alt="Poetry" className="w-full h-32 sm:h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Poetic Musings</h3>
              <p className="mb-4 text-sm sm:text-base"> collection of verses that capture moments, emotions, and reflections.</p>
              <button className="bg-yellow-400 text-gray-900 px-3 py-2 rounded-full font-bold flex items-center transition-transform hover:scale-105 text-sm">
                <Feather className="mr-2" size={16} />
              private
              
              </button>
            </div>
            
            <div className={`p-4 rounded-lg shadow-md transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <img src={st} alt="Storytelling" className="w-full h-32 sm:h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Story</h3>
              <p className="mb-4 text-sm sm:text-base"> collection of stories that blend reality with imagination.</p>
              <button className="bg-yellow-400 text-gray-900 px-3 py-2 rounded-full font-bold flex items-center transition-transform hover:scale-105 text-sm">
                <Book className="mr-2" size={16} />
             private
              
              </button>
            </div>
            
            <div className={`p-4 rounded-lg shadow-md transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <img src={no} alt="Literary Explorations" className="w-full h-32 sm:h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Novel</h3>
              <p className="mb-4 text-sm sm:text-base">Delve into the realms of thought-provoking novels .</p>
              <button className="bg-yellow-400 text-gray-900 px-3 py-2 rounded-full font-bold flex items-center transition-transform hover:scale-105 text-sm">
                <BookOpen className="mr-2" size={16} />
            private
              
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">Get in Touch</h2>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">Social Media</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl sm:text-3xl lg:text-4xl hover:text-yellow-400 transition-colors"><Linkedin /></a>
              </div>
            </div>
            <div className="lg:w-1/2">
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className={`w-full p-2 rounded transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className={`w-full p-2 rounded transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                />
                <textarea 
                  placeholder="Your Message" 
                  rows={4} 
                  className={`w-full p-2 rounded transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                ></textarea>
                <button type="submit" className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold w-full transition-transform hover:scale-105 text-sm sm:text-base">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className={`py-6 sm:py-8 text-center transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
        <p className="text-sm sm:text-base">&copy; 2024 SISAN. All rights reserved.</p>
      </footer>

      {/* Background Animation */}
      <div 
        className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-600 ease-in-out ${isScrolling ? 'opacity-10' : 'opacity-0'}`}
        style={{
          background: `radial-gradient(circle at ${touchPosition.x}px ${touchPosition.y}px, rgba(255,255,0,0.05) 0%, rgba(255,255,255,0) 50%)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 opacity-5"></div>
        <div className="absolute inset-0 animate-pulse bg-gradient-to-tr from-yellow-300 to-pink-500 opacity-2"></div>
      </div>
    </div>
  )
}