'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectType } from '@/lib/types'
import ProjectCard from '@/components/proyectos/ProjectCard'
import ProjectFilter from '@/components/proyectos/ProjectFilter'
import { projects } from '@/lib/data'

export default function ProjectsList() {
  const [filteredProjects, setFilteredProjects] = useState(projects)

  return (
    <section className="py-12 bg-gray-50 dark:bg-op-purple-950/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectFilter projects={projects} onFilter={setFilteredProjects} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} delay={index} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500 dark:text-gray-400">No se encontraron proyectos con los filtros seleccionados.</p>
          </div>
        )}
      </div>
    </section>
  )
}