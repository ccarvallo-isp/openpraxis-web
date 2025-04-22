'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import Map from '@/components/ui/Map'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Map */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Map />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-op-purple-900/70 to-op-purple-950/90 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Soluciones <span className="gradient-text">Geoespaciales</span> para Decisiones Estratégicas
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Transformamos datos geográficos en herramientas de toma de decisiones que impulsan el desarrollo sostenible y la eficiencia en el sector público.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="bg-op-purple-600 hover:bg-op-purple-700 text-white">
                <Link href="/servicios">
                  Nuestros Servicios
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild variant="outline" size="lg" className="border-white text-white bg-transparent hover:bg-white/10">
                <Link href="/contacto">
                  Contáctanos
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        onClick={scrollToContent}
      >
        <ChevronDown className="w-10 h-10 text-white" />
      </motion.div>
    </section>
  )
}