export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-black dark:to-zinc-950 overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="mx-auto max-w-4xl px-6 py-20 text-center relative z-10">
        {/* Avatar com efeito */}
        <div className="mb-12 animate-slideInUp">
          <div className="mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center animate-glow group cursor-pointer relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-spin opacity-75" style={{ animationDuration: '3s' }}></div>
            <span className="text-5xl font-bold text-white relative z-10 group-hover:scale-110 transition transform">A</span>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-purple-800 to-zinc-900 dark:from-zinc-50 dark:via-purple-400 dark:to-zinc-50 mb-6 animate-slideInUp" style={{ animationDelay: '0.1s' }}>
          Olá! Eu sou Adriel
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-6 animate-slideInUp" style={{ animationDelay: '0.2s' }}>
          Desenvolvedor Full Stack
        </h2>
        
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed animate-slideInUp" style={{ animationDelay: '0.3s' }}>
          Especializado em sistemas de gestão, ERP e soluções web modernas. Transformo ideias em produtos digitais escaláveis e confiáveis.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap mb-12 animate-slideInUp" style={{ animationDelay: '0.4s' }}>
          <a
            href="#projetos"
            className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg overflow-hidden group shadow-glow hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              📁 Ver Projetos
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="#contato"
            className="px-8 py-4 border-2 border-transparent bg-clip-padding bg-gradient-to-r from-blue-600 to-purple-600 text-transparent font-semibold rounded-lg group hover:scale-105 transition-all duration-300 relative"
            style={{
              borderImage: 'linear-gradient(135deg, #3b82f6, #8b5cf6) 1',
            }}
          >
            <span className="relative text-zinc-900 dark:text-white font-semibold">✉️ Contato</span>
          </a>
        </div>

        {/* Indicador scroll */}
        <div className="animate-bounce absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="text-2xl">↓</div>
        </div>
      </div>
    </section>
  );
}
