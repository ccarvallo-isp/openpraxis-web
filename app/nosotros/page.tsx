import { Metadata } from 'next'
import { team } from '@/lib/data'
import TeamMember from '@/components/nosotros/TeamMember'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Nosotros | Open Praxis',
  description: 'Conoce nuestro equipo de expertos en sistemas de información geográfica y nuestra misión como empresa.',
}

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-gradient-to-b from-op-purple-900 to-op-purple-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Conoce al equipo detrás de Open Praxis y nuestra misión de transformar datos geoespaciales en soluciones impactantes.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-op-purple-950/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-op-purple-600 dark:text-op-gold-400 font-semibold mb-2">NUESTRA HISTORIA</span>
              <h2 className="text-3xl font-bold mb-6 text-op-purple-800 dark:text-white">
                Potenciando decisiones con tecnología geoespacial desde 2015
              </h2>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Open Praxis nació de la visión de un grupo de especialistas en geomática que identificaron la necesidad de soluciones GIS más accesibles y eficaces para el sector público en América Latina.
                </p>
                <p>
                  Desde nuestros inicios, nos hemos comprometido con el desarrollo de sistemas que no solo visualizan datos, sino que los transforman en herramientas efectivas para la toma de decisiones estratégicas.
                </p>
                <p>
                  En estos años, hemos crecido hasta convertirnos en referentes regionales en sistemas de información geográfica aplicados a políticas públicas, gestión de riesgos y planificación territorial.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video relative overflow-hidden rounded-xl shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Equipo de Open Praxis"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-op-gold-400 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-op-purple-400 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-op-purple-600 dark:text-op-gold-400 font-semibold mb-2">NUESTRA MISIÓN</span>
            <h2 className="text-3xl font-bold mb-6 text-op-purple-800 dark:text-white">
              Transformar datos geoespaciales en soluciones que generen impacto positivo
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Nos dedicamos a desarrollar tecnologías geoespaciales accesibles y efectivas que ayuden a las organizaciones a tomar mejores decisiones para sus comunidades y el medio ambiente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-op-purple-900/20 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-op-purple-800 text-center">
              <div className="w-16 h-16 bg-op-purple-100 dark:bg-op-purple-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-op-purple-600 dark:text-op-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-op-purple-800 dark:text-white">Integridad</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nos comprometemos con la transparencia y la ética en todos nuestros proyectos, garantizando datos precisos y análisis confiables.
              </p>
            </div>
            
            <div className="bg-white dark:bg-op-purple-900/20 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-op-purple-800 text-center">
              <div className="w-16 h-16 bg-op-purple-100 dark:bg-op-purple-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-op-purple-600 dark:text-op-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-op-purple-800 dark:text-white">Innovación</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Buscamos constantemente nuevas formas de aplicar tecnologías geoespaciales para resolver desafíos complejos de manera más eficiente.
              </p>
            </div>
            
            <div className="bg-white dark:bg-op-purple-900/20 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-op-purple-800 text-center">
              <div className="w-16 h-16 bg-op-purple-100 dark:bg-op-purple-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-op-purple-600 dark:text-op-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-op-purple-800 dark:text-white">Impacto</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nos enfocamos en crear soluciones que generen resultados tangibles y positivos para las comunidades y el medio ambiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-op-purple-950/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-op-purple-600 dark:text-op-gold-400 font-semibold mb-2">NUESTRO EQUIPO</span>
            <h2 className="text-3xl font-bold mb-6 text-op-purple-800 dark:text-white">
              Expertos en Sistemas de Información Geográfica
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Contamos con un equipo multidisciplinario de profesionales especializados en geomática, desarrollo de software, análisis espacial y gestión de proyectos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <TeamMember key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-op-purple-800 to-op-purple-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Quieres formar parte de nuestro equipo?</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Siempre estamos en busca de talento apasionado por la geomática y el desarrollo de soluciones GIS innovadoras.
          </p>
          <a 
            href="/contacto" 
            className="inline-block px-8 py-3 bg-op-gold-500 text-op-purple-900 font-semibold rounded-lg hover:bg-op-gold-600 transition-colors"
          >
            Envía tu CV
          </a>
        </div>
      </section>
    </div>
  )
}