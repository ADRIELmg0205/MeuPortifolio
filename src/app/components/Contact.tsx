export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-black relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="mx-auto max-w-2xl px-6 relative z-10">
        <div className="text-center mb-16 animate-slideInUp">
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Tenho interesse em projetos envolvendo sistemas de gestão, ERP e soluções web modernas. Aberto a novas oportunidades! 🚀
          </p>
        </div>
        
        <div className="glass-effect bg-gradient-to-br from-white/80 to-blue-50/80 dark:from-zinc-900/50 dark:to-purple-950/30 border border-zinc-200/50 dark:border-purple-800/30 rounded-3xl p-12 shadow-glow hover:shadow-2xl transition-all duration-500 animate-slideInUp" style={{ animationDelay: '0.1s' }}>
          <div className="space-y-6">
            {/* Email Button */}
            <a
              href="mailto:adrielgraupp0205@gmail.com"
              className="block w-full group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-1 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl text-center font-bold text-lg flex items-center justify-center gap-3 group-hover:gap-4 transition-all">
                ✉️ Enviar Email
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
            
            {/* Social Links */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <a
                href="https://github.com/ADRIELmg0205"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-black dark:from-gray-900 dark:to-black p-1 hover:shadow-xl transition-all"
              >
                <div className="relative bg-zinc-900 dark:bg-zinc-950 text-white px-6 py-4 rounded-xl text-center font-bold hover:bg-gradient-to-br hover:from-gray-700 hover:to-black transition-all">
                  <span className="text-xl">🐙</span>
                  <p className="text-sm mt-1">GitHub</p>
                </div>
              </a>
              
              <a
                href="https://www.linkedin.com/in/adriel-matheus-graupp-b2a078216/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-700 to-blue-900 p-1 hover:shadow-xl transition-all"
              >
                <div className="relative bg-blue-700 dark:bg-blue-900 text-white px-6 py-4 rounded-xl text-center font-bold hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-800 transition-all">
                  <span className="text-xl">💼</span>
                  <p className="text-sm mt-1">LinkedIn</p>
                </div>
              </a>
              
              <a
                href="https://www.instagram.com/adrielgraupp/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 p-1 hover:shadow-xl transition-all"
              >
                <div className="relative bg-gradient-to-br from-pink-500 to-purple-600 text-white px-6 py-4 rounded-xl text-center font-bold hover:from-pink-400 hover:to-purple-500 transition-all">
                  <span className="text-xl">📸</span>
                  <p className="text-sm mt-1">Instagram</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
