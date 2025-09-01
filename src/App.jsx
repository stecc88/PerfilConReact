/*
  App.jsx — Layout con encabezado, contenido principal y pie de página.
  El menú es responsive (botón hamburguesa en móvil).
*/

import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from './shared/Footer.jsx'

function Header() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { to: '/', label: 'Inicio' },
    { to: '/sobre-mi', label: 'Sobre mí' },
    { to: '/proyectos', label: 'Proyectos' },
    { to: '/habilidades', label: 'Habilidades' },
    { to: '/contacto', label: 'Contacto' },
  ]

  const linkBase = 'block px-3 py-2 rounded-md text-sm font-medium transition-colors'
  const getLinkClass = ({ isActive }) =>
    `${linkBase} ${isActive ? 'text-blue-400' : 'text-neutral-300 hover:text-white'}`

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
      <div className="relative mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        {/* Marca */}
        <div className="flex items-center gap-2">
          <NavLink
            to="/"
            className="text-xl font-semibold text-neutral-100 hover:text-blue-400 transition-colors"
          >
            Stecco.Dev
          </NavLink>
        </div>

        {/* Navegación (escritorio) */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={getLinkClass} end>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Botón menú (móvil) */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-300 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-controls="primary-navigation"
          aria-expanded={open}
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Menú móvil */}
        <div
          id="primary-navigation"
          className={`md:hidden absolute left-0 right-0 top-full border-b border-neutral-800 bg-neutral-900/95 backdrop-blur-sm shadow-sm transition-all ${
            open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
          }`}
        >
          <nav className="px-2 py-2" aria-label="Navegación móvil">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={getLinkClass}
                end
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

function Main({ children }) {
  return (
    <main className="flex-1 mx-auto max-w-5xl px-4 py-6">
      {children ? children : <Outlet />}
    </main>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative text-neutral-100 overflow-hidden">
      {/* Fondo global */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-3xl rounded-full" />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export { Header, Main, Footer }
