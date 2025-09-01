import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import vivabuondiImg from '../assets/vivabuondi1.jpg'

const proyectos = [
  {
    id: 1,
    titulo: 'VivaBuondi',
    descripcion:
      'VivaBuondì es una web responsiva hecha con HTML, CSS y Bootstrap, orientada a la enseñanza del italiano. El formulario de contacto funciona con EmailJS, permitiendo envíos sin backend.',
    imagen: vivabuondiImg,
    link: 'https://vivabuondi.com/',
  },
  {
    id: 2,
    titulo: 'Proyecto 2',
    descripcion: 'Plataforma fullstack con MongoDB y Express.',
    imagen: 'https://via.placeholder.com/400x250',
    link: '#',
  },
  {
    id: 3,
    titulo: 'Proyecto 3',
    descripcion: 'Sitio responsive optimizado para SEO.',
    imagen: 'https://via.placeholder.com/400x250',
    link: '#',
  },
]

export default function Proyectos() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
      >
        Proyectos
      </motion.h1>

      {/* Lista de proyectos */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {proyectos.map((proyecto, index) => (
          <motion.article
            key={proyecto.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 shadow-lg hover:shadow-blue-600/30 transition-all duration-300"
          >
            {/* Imagen */}
            <div className="overflow-hidden">
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                loading="lazy"
              />
            </div>

            {/* Contenido */}
            <div className="p-5">
              <h2 className="font-semibold text-lg text-white">{proyecto.titulo}</h2>
              <p className="text-sm text-zinc-400 mt-2">{proyecto.descripcion}</p>

              <a
                href={proyecto.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition"
              >
                Ver proyecto <ExternalLink size={16} />
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}