import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[90vh] px-4 overflow-hidden">
      {/* Título y descripción */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg"
      >
        Hola, soy <span className="text-blue-400">Hernán</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="mt-6 max-w-2xl text-lg md:text-xl text-zinc-300 leading-relaxed"
      >
        Desarrollador <span className="font-semibold text-blue-300">Fullstack</span> — creo sitios y aplicaciones modernas con{' '}
        <span className="text-yellow-300">HTML</span>, <span className="text-blue-300">CSS</span>,{' '}
        <span className="text-yellow-400">JavaScript</span>, <span className="text-cyan-300">React</span>,{' '}
        <span className="text-green-400">Node.js</span> y más 🚀
      </motion.p>

      {/* Botones de acción */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        className="mt-10 flex flex-wrap gap-5 justify-center"
      >
        <Link
          to="/proyectos"
          className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-1 transform transition-all duration-300"
        >
          Ver proyectos
        </Link>
        <Link
          to="/contacto"
          className="px-6 py-3 rounded-xl border border-zinc-700 text-zinc-300 font-medium hover:bg-zinc-800/50 hover:-translate-y-1 transform transition-all duration-300"
        >
          Contacto
        </Link>
      </motion.div>

      {/* Íconos del stack (decorativo) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-14 flex flex-wrap justify-center gap-6 text-4xl text-zinc-500"
      >
        <i className="devicon-html5-plain colored"></i>
        <i className="devicon-css3-plain colored"></i>
        <i className="devicon-javascript-plain colored"></i>
        <i className="devicon-react-original colored"></i>
        <i className="devicon-nodejs-plain colored"></i>
        <i className="devicon-mongodb-plain colored"></i>
      </motion.div>
    </section>
  )
}