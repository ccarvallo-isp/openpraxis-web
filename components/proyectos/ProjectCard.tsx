'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Building2, FolderGit2 } from 'lucide-react'
import { ProjectType } from '@/lib/types'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

interface ProjectCardProps {
  project: ProjectType
  delay?: number
}

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className="bg-white dark:bg-op-purple-900/20 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-op-purple-800"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-op-purple-700 hover:bg-op-purple-800 text-white">
            {project.category}
          </Badge>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-op-purple-800 dark:text-white">{project.title}</h3>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4 space-x-4">
          <div className="flex items-center">
            <Building2 className="w-4 h-4 mr-1" />
            <span>{project.client}</span>
          </div>
          <div className="flex items-center">
            <FolderGit2 className="w-4 h-4 mr-1" />
            <span>{project.sector}</span>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          {project.results.slice(0, 2).map((result, index) => (
            <div key={index} className="bg-gray-50 dark:bg-op-purple-900/40 p-2 rounded text-center">
              <p className="font-bold text-op-purple-700 dark:text-op-gold-400">{result.value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{result.label}</p>
            </div>
          ))}
        </div>
        
        <Link href={`/proyectos/${project.id}`} className="text-op-purple-600 dark:text-op-gold-400 font-medium hover:text-op-purple-800 dark:hover:text-op-gold-300 transition-colors text-sm">
          Ver detalles del proyecto →
        </Link>
      </div>
    </motion.div>
  )
}