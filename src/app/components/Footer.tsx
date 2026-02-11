export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/50 dark:border-zinc-800/50 bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
      
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2">
              ❤️ Adriel
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Desenvolvedor Full Stack | ERP & Web Solutions
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-zinc-900 dark:text-zinc-50 mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <a href="#sobre" className="block text-sm text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition">
                → Sobre
              </a>
              <a href="#projetos" className="block text-sm text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition">
                → Projetos
              </a>
              <a href="#habilidades" className="block text-sm text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition">
                → Habilidades
              </a>
              <a href="#contato" className="block text-sm text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition">
                → Contato
              </a>
            </div>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="font-bold text-zinc-900 dark:text-zinc-50 mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/ADRIELmg0205"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-zinc-200 dark:bg-zinc-800 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300"
              >
                🐙
              </a>
              <a
                href="https://www.linkedin.com/in/adriel-matheus-graupp-b2a078216/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-zinc-200 dark:bg-zinc-800 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300"
              >
                💼
              </a>
              <a
                href="https://www.instagram.com/adrielgraupp/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-zinc-200 dark:bg-zinc-800 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-pink-500 hover:text-white hover:scale-110 transition-all duration-300"
              >
                📸
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-zinc-200/50 dark:border-zinc-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center md:text-left">
              © {currentYear} <span className="font-bold">Adriel Matheus Graupp</span>. Desenvolvedor Full Stack.
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-4 md:mt-0">
              Desenvolvido com ❤️ usando Next.js e Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
