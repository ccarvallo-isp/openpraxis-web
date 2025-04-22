import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import Testimonials from '@/components/home/Testimonials'
import About from '@/components/home/About'
import CallToAction from '@/components/home/CallToAction'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <CallToAction />
    </>
  )
}