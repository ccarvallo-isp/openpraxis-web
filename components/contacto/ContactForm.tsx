'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { services } from '@/lib/data'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'

export default function ContactForm() {
  const searchParams = useSearchParams()
  const preselectedService = searchParams.get('service')
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    service: preselectedService || '',
    message: '',
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSelectChange = (value: string) => {
    setFormState(prev => ({ ...prev, service: value }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: '',
        email: '',
        organization: '',
        service: '',
        message: '',
      })
    }, 1500)
  }
  
  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-op-purple-900/20 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-op-purple-800 text-center"
      >
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-op-purple-800 dark:text-white">¡Mensaje Enviado!</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          className="bg-op-purple-600 hover:bg-op-purple-700 text-white"
        >
          Enviar otro mensaje
        </Button>
      </motion.div>
    )
  }
  
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="bg-white dark:bg-op-purple-900/20 p-6 md:p-8 rounded-lg shadow-lg border border-gray-100 dark:border-op-purple-800"
    >
      <h2 className="text-2xl font-bold mb-6 text-op-purple-800 dark:text-white">Contáctanos</h2>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Nombre Completo</Label>
          <Input
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="María García"
            className="mt-1"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="email">Correo Electrónico</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="maria@ejemplo.com"
            className="mt-1"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="organization">Organización</Label>
          <Input
            id="organization"
            name="organization"
            value={formState.organization}
            onChange={handleChange}
            placeholder="Nombre de tu organización"
            className="mt-1"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="service">Servicio de Interés</Label>
          <Select
            value={formState.service}
            onValueChange={handleSelectChange}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Selecciona un servicio" />
            </SelectTrigger>
            <SelectContent>
              {services.map(service => (
                <SelectItem key={service.id} value={service.id}>
                  {service.title}
                </SelectItem>
              ))}
              <SelectItem value="otro">Otro (especificar en mensaje)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="message">Mensaje</Label>
          <Textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Describe tu proyecto o consulta..."
            className="mt-1 min-h-32"
            required
          />
        </div>
        
        <Button
          type="submit"
          className="w-full bg-op-purple-600 hover:bg-op-purple-700 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </Button>
      </div>
    </motion.form>
  )
}