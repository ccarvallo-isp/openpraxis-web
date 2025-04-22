'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CallToAction() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-op-purple-800 to-op-purple-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              ¿Listo para transformar datos geoespaciales en decisiones estratégicas?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-200 mb-0 lg:mb-0"
            >
              Contáctanos hoy para discutir cómo nuestras soluciones GIS pueden ayudar a tu organización a alcanzar sus objetivos.
            </motion.p>
          </div>
          
          <div className="lg:col-span-2 flex flex-col sm:flex-row lg:flex-col justify-center sm:justify-start lg:justify-end gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button asChild size="lg" className="w-full bg-op-gold-500 hover:bg-op-gold-600 text-op-purple-950 font-semibold">
                <Link href="/contacto">
                  Solicitar Consulta
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button asChild variant="outline" size="lg" className="w-full border-white text-white bg-transparent hover:bg-white/10">
                <Link href="/proyectos">
                  Ver Casos de Éxito
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}