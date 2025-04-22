import { Metadata } from 'next'
import { motion } from 'framer-motion'
import ProjectsList from '@/components/proyectos/ProjectsList'

export const metadata: Metadata = {
  title: 'Proyectos | Open Praxis',
  description: 'Explora nuestros casos de éxito y proyectos de sistemas de información geográfica implementados para el sector público.',
}

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-gradient-to-b from-op-purple-900 to-op-purple-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros Proyectos
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Casos de éxito que demuestran el poder transformador de los sistemas de información geográfica.
          </p>
        </div>
      </section>

      <ProjectsList />
    </div>
  )
}