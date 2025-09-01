import { motion } from 'framer-motion'

const habilidades = [
  { nombre: 'HTML', icono: 'devicon-html5-plain colored' },
  { nombre: 'CSS', icono: 'devicon-css3-plain colored' },
  { nombre: 'Bootstrap', icono: 'devicon-bootstrap-plain colored' },
  { nombre: 'Tailwind', icono: 'devicon-tailwindcss-plain colored' },
  { nombre: 'JavaScript', icono: 'devicon-javascript-plain colored' },
  { nombre: 'React', icono: 'devicon-react-original colored' },
  { nombre: 'Git', icono: 'devicon-git-plain colored' },
  { nombre: 'GitHub', icono: 'devicon-github-original colored' },
  { nombre: 'Node.js', icono: 'devicon-nodejs-plain colored' },
  { nombre: 'MongoDB', icono: 'devicon-mongodb-plain colored' },
]

export default function Habilidades() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
      >
        Habilidades
      </motion.h1>

      {/* Grid de habilidades */}
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4"
      >
        {habilidades.map(({ nombre, icono }, index) => (
          <motion.li
            key={nombre}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border border-zinc-800 rounded-xl px-5 py-6 bg-zinc-900/40 text-zinc-300 text-center font-medium hover:scale-105 hover:text-white hover:shadow-blue-500/30 transition-all duration-300 flex flex-col items-center gap-3"
          >
            <i className={`${icono} text-4xl`} />
            {nombre}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}