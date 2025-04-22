import { projects } from '@/lib/data'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
// import { motion } from 'framer-motion'
import { ArrowLeft, Building2, Code2, Trophy } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button
            asChild
            variant="ghost"
            className="mb-4 text-op-purple-600 dark:text-op-gold-400"
          >
            <Link href="/proyectos">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a proyectos
            </Link>
          </Button>

{/*           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          > */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-op-purple-800 dark:text-white">
                {project.title}
              </h1>
              <Badge className="bg-op-purple-700 hover:bg-op-purple-800 text-white">
                {project.category}
              </Badge>
            </div>

            <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-300">
              <div className="flex items-center">
                <Building2 className="w-5 h-5 mr-2 text-op-purple-600 dark:text-op-gold-400" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-op-purple-600 dark:text-op-gold-400" />
                <span>{project.sector}</span>
              </div>
            </div>
          {/* </motion.div> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/*           <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          > */}
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg mb-8">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4 text-op-purple-800 dark:text-white">
                Descripción del Proyecto
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                {project.description}
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-op-purple-800 dark:text-white">
                Tecnologías Utilizadas
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-1"
                  >
                    <Code2 className="w-4 h-4 text-op-purple-600 dark:text-op-gold-400" />
                    <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
{/*           </motion.div> */}

{/*           <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          > */}
            <div className="bg-white dark:bg-op-purple-900/20 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-op-purple-800">
              <h2 className="text-xl font-bold mb-6 text-op-purple-800 dark:text-white">
                Resultados del Proyecto
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {project.results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-op-purple-900/40 p-4 rounded-lg"
                  >
                    <p className="text-2xl font-bold text-op-purple-700 dark:text-op-gold-400">
                      {result.value}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {result.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button asChild className="bg-op-purple-600 hover:bg-op-purple-700 text-white">
                <Link href="#">
                  Consultar sobre este proyecto
                </Link>
              </Button>
            </div>
{/*           </motion.div> */}
        </div>
      </div>
    </div>
  )
}