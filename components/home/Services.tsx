'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Tablet, AlertTriangle, BarChart } from 'lucide-react'
import { services } from '@/lib/data'
import { Button } from '@/components/ui/button'

const icons = {
  map: MapPin,
  tablet: Tablet,
  'alert-triangle': AlertTriangle,
  'bar-chart': BarChart,
}

export default function Services() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 bg-white dark:bg-op-purple-950/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nuestros Servicios
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ofrecemos soluciones geoespaciales integrales para ayudar a nuestros clientes a tomar decisiones más informadas y estratégicas.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons]
            
            return (
              <motion.div 
                key={service.id}
                variants={item}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                className="bg-white dark:bg-op-purple-900/20 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-op-purple-800"
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-op-purple-100 dark:bg-op-purple-800/50 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-op-purple-600 dark:text-op-gold-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-op-purple-800 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                  <Button asChild variant="ghost" className="text-op-purple-600 dark:text-op-gold-400 px-0 hover:bg-transparent hover:text-op-purple-800 dark:hover:text-op-gold-300">
                    <Link href={`/servicios#${service.id}`}>
                      Saber más
                    </Link>
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-op-purple-600 hover:bg-op-purple-700 text-white">
            <Link href="/servicios">
              Ver Todos Los Servicios
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}