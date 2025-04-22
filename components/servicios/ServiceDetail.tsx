'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { ServiceType } from '@/lib/types'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface ServiceDetailProps {
  service: ServiceType
  reversed?: boolean
}

export default function ServiceDetail({ service, reversed = false }: ServiceDetailProps) {
  return (
    <div id={service.id} className="py-12 scroll-mt-24">
      <motion.div 
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          reversed ? 'lg:flex-row-reverse' : ''
        }`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className={reversed ? 'order-1 lg:order-2' : ''}>
          <h3 className="text-2xl font-bold mb-4 text-op-purple-800 dark:text-white">{service.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">{service.description}</p>
          
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-3 text-op-purple-700 dark:text-op-gold-400">Características clave:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-op-gold-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Button asChild className="bg-op-purple-600 hover:bg-op-purple-700 text-white">
            <Link href="/contacto?service=servicios">
              Solicitar Información
            </Link>
          </Button>
        </div>
        
        <div className={reversed ? 'order-2 lg:order-1' : ''}>
          <div className="relative overflow-hidden rounded-xl shadow-lg aspect-video">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}