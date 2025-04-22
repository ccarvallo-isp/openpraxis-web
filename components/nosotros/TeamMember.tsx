'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Briefcase, GraduationCap } from 'lucide-react'
import { TeamMemberType } from '@/lib/types'
import { Badge } from '@/components/ui/badge'

interface TeamMemberProps {
  member: TeamMemberType
  index: number
}

export default function TeamMember({ member, index }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white dark:bg-op-purple-900/20 rounded-lg overflow-hidden shadow-lg border border-gray-100 dark:border-op-purple-800"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white">{member.name}</h3>
          <p className="text-op-gold-400">{member.role}</p>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-700 dark:text-gray-300 mb-4">{member.bio}</p>
        
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
          <GraduationCap className="w-5 h-5 text-op-purple-600 dark:text-op-gold-400 mr-2" />
          <span>{member.education}</span>
        </div>
        
        <div className="flex items-start text-sm text-gray-600 dark:text-gray-400 mb-4">
          <Briefcase className="w-5 h-5 text-op-purple-600 dark:text-op-gold-400 mr-2 mt-0.5" />
          <div className="flex flex-wrap gap-2">
            {member.expertise.map((skill, idx) => (
              <Badge key={idx} variant="outline" className="bg-op-purple-50 dark:bg-op-purple-900/30">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}