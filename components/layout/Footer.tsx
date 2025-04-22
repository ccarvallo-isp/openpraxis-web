import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-op-purple-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-op-gold-400">Open<span className="text-white">Praxis</span></h3>
            <p className="text-gray-300 mb-4">
              Especialistas en desarrollo de sistemas de información geográfica (GIS) personalizados para empresas y entidades públicas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-op-gold-400 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-op-gold-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-op-gold-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-op-gold-400 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-op-gold-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-op-gold-400 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-gray-300 hover:text-op-gold-400 transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-gray-300 hover:text-op-gold-400 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-op-gold-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-op-gold-400 transition-colors">
                  Análisis geoespacial
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-op-gold-400 transition-colors">
                  Sistemas de captura de datos
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-op-gold-400 transition-colors">
                  Análisis de riesgos
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-op-gold-400 transition-colors">
                  Visualización de datos
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-op-gold-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Av. Reforma 123, Col. Juárez,<br />Ciudad de México, CP 06600</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-op-gold-400 flex-shrink-0" />
                <span className="text-gray-300">+52 (55) 1234-5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-op-gold-400 flex-shrink-0" />
                <span className="text-gray-300">info@openpraxis.mx</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Open Praxis. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}