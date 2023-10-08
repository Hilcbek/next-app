import About from '@/Components/About'
import BackToTop from '@/Components/BackToTop'
import Cars from '@/Components/Cars'
import Contact from '@/Components/Contact'
import Footer from '@/Components/Footer'
import Hero from '@/Components/Hero'
import Search_Mobile from '@/Components/Search_Mobile'
import Testimonials from '@/Components/Testimonials'
import Why_us from '@/Components/Why_us'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="pt-16">
        <Hero />
        <Cars />
        <About />
        <Why_us />
        <Testimonials />
        <Contact />
        <Footer />
        <BackToTop />
    </main>
  )
}
