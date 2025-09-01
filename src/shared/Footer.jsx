import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-zinc-800/60 bg-gradient-to-t from-black/80 via-black/50 to-transparent backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-400">
        
        {/* Copyright */}
        <p className="text-center md:text-left">
          © {year} <span className="font-semibold text-white">Stecco Pedro Hernan</span>.  
          Todos los derechos reservados.
        </p>
        
        {/* Redes */}
        <nav className="flex gap-6 text-lg">
          <a
            href="https://github.com/stecc88"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-transform transform hover:scale-110"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-hernan-stecco-galleguillo-8006b1237/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-transform transform hover:scale-110"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:steccoh88@gmail.com"
            className="text-zinc-400 hover:text-white transition-transform transform hover:scale-110"
          >
            <Mail size={20} />
          </a>
        </nav>
      </div>
    </footer>
  )
}
