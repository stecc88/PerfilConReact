import { motion } from 'framer-motion'

export default function SobreMi() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mx-auto max-w-6xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-zinc-900/50 border border-zinc-800 rounded-2xl shadow-lg p-10 backdrop-blur-sm">
          {/* Avatar ilustrado */}
          <div className="order-1 lg:order-none lg:col-span-5 flex justify-center lg:justify-start">
            <motion.svg
              width="192"
              height="192"
              viewBox="0 0 160 160"
              role="img"
              aria-label="Avatar ilustrado saludando con lentes y cabello despeinado"
              className="h-44 w-44 md:h-56 md:w-56 drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <circle cx="70" cy="58" r="26" fill="#FDE68A" stroke="#EAB308" strokeWidth="1.5" />
              
              {/* Cabello despeinado */}
              <path
                d="M46 50 
                   C56 25, 84 25, 94 50
                   Q92 42 86 40
                   Q80 38 75 45
                   Q70 48 66 43
                   Q62 38 58 43
                   Q54 48 50 52 
                   Q48 55 46 50 Z"
                fill="#8B5A2B"
                stroke="#6B3E1E"
                strokeWidth="1"
              />

              {/* Ojos */}
              <circle cx="62" cy="55" r="2.5" fill="#111827" />
              <circle cx="78" cy="55" r="2.5" fill="#111827" />
              <circle cx="62" cy="55" r="7" fill="none" stroke="#0F172A" strokeWidth="2" />
              <circle cx="78" cy="55" r="7" fill="none" stroke="#0F172A" strokeWidth="2" />
              <line x1="69" y1="55" x2="71" y2="55" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
              <line x1="55" y1="55" x2="50" y2="54" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
              <line x1="85" y1="55" x2="90" y2="54" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />

              {/* Boca */}
              <path d="M62 65 Q70 72 78 65" stroke="#111827" strokeWidth="2" fill="none" strokeLinecap="round" />

              {/* Cuerpo */}
              <rect x="45" y="86" width="60" height="50" rx="12" fill="#3B82F6" />
              <path d="M45 96 Q35 100 38 110" stroke="#3B82F6" strokeWidth="10" strokeLinecap="round" fill="none" />

              {/* Mano saludando */}
              <motion.g
                style={{ transformOrigin: '110px 70px' }}
                animate={{ rotate: [0, 12, -8, 12, 0] }}
                transition={{ duration: 1.8, ease: 'easeInOut', repeat: Infinity }}
              >
                <path d="M95 96 Q110 85 120 70" stroke="#3B82F6" strokeWidth="10" strokeLinecap="round" fill="none" />
                <circle cx="122" cy="68" r="8" fill="#FDE68A" stroke="#EAB308" strokeWidth="1.5" />
              </motion.g>
            </motion.svg>
          </div>

          {/* Texto */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Sobre mí
            </h1>
            <p className="mt-6 text-zinc-300 leading-relaxed text-lg md:text-xl">
              Hola, soy desarrollador <span className="text-blue-400 font-semibold">Fullstack</span> y trabajar con el stack <span className="text-green-400 font-semibold">MERN</span> (MongoDB, Express, React y Node.js). 
              Disfruto creando interfaces <span className="text-yellow-300">modernas, rápidas y fáciles de usar</span>, siempre pensando en la experiencia de quien las utiliza.
            </p>
            <p className="mt-4 text-zinc-400 leading-relaxed text-lg">
              Me gusta combinar el <span className="text-purple-300">frontend</span> con el <span className="text-teal-300">backend</span> para que todo encaje de manera natural. Desde el diseño hasta la lógica y la base de datos, me encanta ver cómo un proyecto cobra vida completo.
            </p>
            <p className="mt-4 text-zinc-400 leading-relaxed text-lg">
              Siempre estoy aprendiendo cosas nuevas porque la tecnología me inspira y motiva. Me considero <span className="font-medium text-orange-300">curioso, autodidacta y colaborativo</span>, y disfruto compartir ideas y crecer en equipo.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
