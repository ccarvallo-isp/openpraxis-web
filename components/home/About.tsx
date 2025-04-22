'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function About() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-op-purple-950/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Sobre Open Praxis</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Somos una consultoría especializada en el desarrollo de sistemas de información geográfica (GIS) que ayudan a transformar datos territoriales en conocimiento accionable.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Desde 2015, hemos colaborado con organizaciones gubernamentales, instituciones académicas y ONG's en el desarrollo de soluciones geoespaciales innovadoras para abordar desafíos complejos.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-op-purple-900/20 p-4 rounded-lg shadow text-center">
                <p className="text-3xl font-bold text-op-purple-700 dark:text-op-gold-400">+120</p>
                <p className="text-gray-600 dark:text-gray-300">Proyectos Completados</p>
              </div>
              
              <div className="bg-white dark:bg-op-purple-900/20 p-4 rounded-lg shadow text-center">
                <p className="text-3xl font-bold text-op-purple-700 dark:text-op-gold-400">+40</p>
                <p className="text-gray-600 dark:text-gray-300">Clientes Satisfechos</p>
              </div>
              
              <div className="bg-white dark:bg-op-purple-900/20 p-4 rounded-lg shadow text-center">
                <p className="text-3xl font-bold text-op-purple-700 dark:text-op-gold-400">8</p>
                <p className="text-gray-600 dark:text-gray-300">Países de Operación</p>
              </div>
              
              <div className="bg-white dark:bg-op-purple-900/20 p-4 rounded-lg shadow text-center">
                <p className="text-3xl font-bold text-op-purple-700 dark:text-op-gold-400">+25</p>
                <p className="text-gray-600 dark:text-gray-300">Expertos en GIS</p>
              </div>
            </div>
            
            <Button asChild className="bg-op-purple-600 hover:bg-op-purple-700 text-white">
              <Link href="/nosotros">
                Conoce Nuestro Equipo
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video relative overflow-hidden rounded-xl shadow-xl">
              <Image
                src="https://images.pexels.com/photos/7372975/pexels-photo-7372975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Equipo de Open Praxis"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-op-purple-900/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-xl font-bold">Nuestro equipo de expertos</p>
                <p className="text-gray-200">Profesionales con pasión por la geomática</p>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-op-gold-400 rounded-full -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-op-purple-400 rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}