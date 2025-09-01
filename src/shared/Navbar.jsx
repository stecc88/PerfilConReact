import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/sobre-mi', label: 'Sobre mí' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/habilidades', label: 'Habilidades' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 backdrop-blur-md bg-black/30">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Marca */}
        <Link to="/" className="font-extrabold text-lg">
          <motion.span
            initial={{ opacity: 0, y: -6, letterSpacing: '0.05em' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '0.01em' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
          </motion.span>
        </Link>

        {/* Navegación (escritorio) */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative transition ${
                  isActive ? 'text-blue-400' : 'text-zinc-300 hover:text-white'
                }`
              }
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </NavLink>
          ))}
        </nav>

        {/* Botón menú (móvil) */}
        <button
          className="md:hidden text-zinc-300 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 border-t border-zinc-800/50 backdrop-blur-sm"
          >
            <ul className="flex flex-col items-center gap-6 py-6 text-lg font-medium">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-blue-400'
                      : 'text-zinc-300 hover:text-white transition'
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}