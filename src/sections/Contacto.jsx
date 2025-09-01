import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contacto() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/xwpnbdzp', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })

      // Formspree responde JSON cuando se envía Accept: application/json
      const data = await res.json().catch(() => ({}))

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        const errs = data?.errors?.map((e) => e.message).join(', ') || 'Error al enviar el formulario.'
        setErrorMsg(errs)
        setStatus('error')
      }
    } catch (err) {
      setErrorMsg('No se pudo enviar. Revisa tu conexión e inténtalo nuevamente.')
      setStatus('error')
    }
  }

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

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full" onSubmit={handleSubmit} action="https://formspree.io/f/xwpnbdzp" method="POST">
            {/* Ajustes para Formspree */}
            <input type="hidden" name="_subject" value="Nuevo mensaje desde el portfolio" />
            {/* Honeypot para bots */}
            <input type="text" name="_gotcha" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            {/* Nombre */}
            <div className="space-y-2">
              <label htmlFor="nombre" className="block text-sm font-medium text-zinc-300">Nombre</label>
              <motion.input
                id="nombre"
                name="name"
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
                name="message"
                placeholder="Escribe tu mensaje aquí..."
                rows={6}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                className="w-full rounded-md bg-zinc-900/40 border border-zinc-800 px-4 py-3 text-zinc-200 placeholder-zinc-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
            </div>

            {/* Botón enviar y estado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
              className="md:col-span-2 flex flex-col items-end gap-3"
            >
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={status === 'sending' ? {} : { scale: 1.05 }}
                whileTap={status === 'sending' ? {} : { scale: 0.95 }}
                className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium shadow-md hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
              >
                {status === 'sending' ? 'Enviando…' : 'Enviar'}
              </motion.button>

              {status === 'success' && (
                <p className="text-sm text-green-400">¡Mensaje enviado! Gracias por contactarme, te responderé pronto.</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-400">{errorMsg || 'Ocurrió un problema al enviar. Intenta nuevamente.'}</p>
              )}
            </motion.div>
          </form>
        </div>
      </motion.div>
    </section>
  )
}