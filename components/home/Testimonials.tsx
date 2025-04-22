'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 6000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center text-white mb-12"
        >
          <Quote className="w-12 h-12 mx-auto mb-4 text-op-gold-400 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiencias de Nuestros Clientes</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Descubre cómo nuestras soluciones GIS han transformado organizaciones y comunidades.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Control buttons */}
          <button
            onClick={() => {
              prev()
              setAutoplay(false)
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => {
              next()
              setAutoplay(false)
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
            aria-label="Testimonio siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="min-w-full px-12">
                  <div className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-xl border border-white/10">
                    <p className="text-lg md:text-xl text-white mb-8 italic">"{testimonial.quote}"</p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
                      <Avatar className="w-16 h-16 border-2 border-op-gold-400">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                        <AvatarFallback className="bg-op-purple-700 text-white">{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      
                      <div className="text-center sm:text-left">
                        <h3 className="font-bold text-white">{testimonial.author}</h3>
                        <p className="text-gray-200">{testimonial.role}</p>
                        <p className="text-op-gold-400">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index)
                  setAutoplay(false)
                }}
                className={`w-3 h-3 rounded-full ${
                  index === current ? 'bg-op-gold-400' : 'bg-white/30'
                } transition-colors`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}