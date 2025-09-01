import { motion } from 'framer-motion'

export default function Contacto() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 py-20 overflow-hidden min-h-screen">
      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full"
      >
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-none md:rounded-2xl shadow-lg p-10 backdrop-blur-sm w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl font-extrabold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-8"
          >
            Contacto
          </motion.h1>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Nombre */}
            <div className="space-y-2">
              <label htmlFor="nombre" className="block text-sm font-medium text-zinc-300">Nombre</label>
              <motion.input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Tu nombre"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                className="w-full rounded-md bg-zinc-900/40 border border-zinc-800 px-4 py-3 text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                whileFocus={{ scale: 1.02 }}
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300">Email</label>
              <motion.input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                className="w-full rounded-md bg-zinc-900/40 border border-zinc-800 px-4 py-3 text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                whileFocus={{ scale: 1.02 }}
                required
              />
            </div>

            {/* Mensaje */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="mensaje" className="block text-sm font-medium text-zinc-300">Mensaje</label>
              <motion.textarea
                id="mensaje"
                name="mensaje"
                placeholder="Escribe tu mensaje aquí..."
                rows={6}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                className="w-full rounded-md bg-zinc-900/40 border border-zinc-800 px-4 py-3 text-zinc-200 placeholder-zinc-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
            </div>

            {/* Botón enviar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
              className="md:col-span-2 flex justify-end"
            >
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium shadow-md hover:bg-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
              >
                Enviar
              </motion.button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </section>
  )
}