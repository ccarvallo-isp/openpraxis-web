import { Metadata } from 'next'
import ContactForm from '@/components/contacto/ContactForm'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import Map from '@/components/ui/Map'

export const metadata: Metadata = {
  title: 'Contacto | Open Praxis',
  description: 'Contáctanos para discutir cómo podemos ayudarte con soluciones GIS personalizadas para tu organización.',
}

export default function ContactPage() {
  const officeLocation: [number, number] = [19.432608, -99.133209] // Ciudad de México coordinates
  
  return (
    <div className="pt-24 pb-16">
      <section className="bg-gradient-to-b from-op-purple-900 to-op-purple-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contáctanos</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Estamos listos para discutir tus necesidades y explorar cómo podemos colaborar en tu próximo proyecto.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-op-purple-950/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-op-purple-800 dark:text-white">Ponte en contacto</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-op-purple-100 dark:bg-op-purple-800/40 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-op-purple-600 dark:text-op-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-op-purple-800 dark:text-white">Ubicación</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Av. Reforma 123, Col. Juárez<br />
                      Ciudad de México, CP 06600<br />
                      México
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-op-purple-100 dark:bg-op-purple-800/40 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-op-purple-600 dark:text-op-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-op-purple-800 dark:text-white">Teléfono</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      +52 (55) 1234-5678<br />
                      +52 (55) 8765-4321
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-op-purple-100 dark:bg-op-purple-800/40 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-op-purple-600 dark:text-op-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-op-purple-800 dark:text-white">Correo Electrónico</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      info@openpraxis.mx<br />
                      proyectos@openpraxis.mx
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-op-purple-100 dark:bg-op-purple-800/40 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-op-purple-600 dark:text-op-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-op-purple-800 dark:text-white">Horario de Atención</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                      Sábado: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="h-80 rounded-lg overflow-hidden shadow-lg">
                <Map
                  markers={[
                    {
                      position: officeLocation,
                      title: 'Open Praxis',
                      description: 'Oficinas Centrales'
                    }
                  ]}
                  center={officeLocation}
                  zoom={14}
                />
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-op-purple-950/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-op-purple-800 dark:text-white">Preguntas Frecuentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div className="bg-gray-50 dark:bg-op-purple-900/20 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-op-purple-700 dark:text-op-gold-400">
                ¿Cuáles son los tiempos de desarrollo para un proyecto GIS típico?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Los tiempos varían según la complejidad, pero generalmente oscilan entre 3-6 meses para proyectos medianos. Desarrollamos cronogramas detallados durante la fase de consultoría inicial.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-op-purple-900/20 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-op-purple-700 dark:text-op-gold-400">
                ¿Ofrecen capacitación para usar los sistemas desarrollados?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sí, todos nuestros proyectos incluyen capacitación para el personal que utilizará el sistema. También ofrecemos soporte técnico continuo después de la implementación.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-op-purple-900/20 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-op-purple-700 dark:text-op-gold-400">
                ¿Trabajan con clientes fuera de México?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sí, tenemos experiencia trabajando con clientes en toda América Latina. Nuestro equipo puede trabajar de forma remota y realizar visitas presenciales cuando sea necesario.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-op-purple-900/20 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-op-purple-700 dark:text-op-gold-400">
                ¿Pueden integrar sus sistemas con plataformas existentes?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Absolutamente. Diseñamos nuestras soluciones para integrarse con sistemas existentes mediante APIs y conectores estándar, minimizando la duplicación de datos y esfuerzos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}