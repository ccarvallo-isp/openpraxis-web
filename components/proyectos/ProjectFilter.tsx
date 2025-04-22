'use client'

import { useState } from 'react'
import { ProjectType } from '@/lib/types'
import { Button } from '@/components/ui/button'

interface ProjectFilterProps {
  projects: ProjectType[]
  onFilter: (filtered: ProjectType[]) => void
}

export default function ProjectFilter({ projects, onFilter }: ProjectFilterProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all')

  // Extract unique categories and sectors
  const categories = Array.from(new Set(projects.map(p => p.category)))
  const sectors = Array.from(new Set(projects.map(p => p.sector)))

  const handleFilterClick = (filter: string, type: 'category' | 'sector' | 'all') => {
    setActiveFilter(filter)
    
    if (type === 'all') {
      onFilter(projects)
    } else if (type === 'category') {
      onFilter(projects.filter(p => p.category === filter))
    } else if (type === 'sector') {
      onFilter(projects.filter(p => p.sector === filter))
    }
  }

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-op-purple-800 dark:text-white">Filtrar proyectos</h2>
      
      <div className="flex flex-wrap gap-2">
        <Button
          variant={activeFilter === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => handleFilterClick('all', 'all')}
          className={activeFilter === 'all' ? 'bg-op-purple-600' : ''}
        >
          Todos
        </Button>
        
        <div className="h-8 border-l border-gray-300 dark:border-gray-600 mx-2"></div>
        
        {categories.map(category => (
          <Button
            key={category}
            variant={activeFilter === category ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleFilterClick(category, 'category')}
            className={activeFilter === category ? 'bg-op-purple-600' : ''}
          >
            {category}
          </Button>
        ))}
        
        <div className="h-8 border-l border-gray-300 dark:border-gray-600 mx-2"></div>
        
        {sectors.map(sector => (
          <Button
            key={sector}
            variant={activeFilter === sector ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleFilterClick(sector, 'sector')}
            className={activeFilter === sector ? 'bg-op-purple-600' : ''}
          >
            {sector}
          </Button>
        ))}
      </div>
    </div>
  )
}