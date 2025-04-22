import { Metadata } from 'next'
import { services } from '@/lib/data'
import ServiceDetail from '@/components/servicios/ServiceDetail'

export const metadata: Metadata = {
  title: 'Servicios | Open Praxis',
  description: 'Nuestros servicios de sistemas de información geográfica personalizados para el sector público y empresarial.',
}

export default function ServiciosPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-gradient-to-b from-op-purple-900 to-op-purple-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Soluciones geoespaciales innovadoras diseñadas para responder a los desafíos específicos de tu organización.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-op-purple-950/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Cómo Transformamos Datos en Decisiones
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              En Open Praxis, combinamos tecnología de vanguardia, conocimiento geoespacial y experiencia en el sector público para ofrecer soluciones que generan impacto real.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <ServiceDetail 
                key={service.id} 
                service={service} 
                reversed={index % 2 !== 0} 
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-op-purple-800 to-op-purple-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Buscas una solución personalizada?</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Nuestro equipo está listo para diseñar una solución geoespacial que se adapte perfectamente a las necesidades específicas de tu organización.
          </p>
          <a 
            href="/contacto" 
            className="inline-block px-8 py-3 bg-op-gold-500 text-op-purple-900 font-semibold rounded-lg hover:bg-op-gold-600 transition-colors"
          >
            Contáctanos Hoy
          </a>
        </div>
      </section>
    </div>
  )
}