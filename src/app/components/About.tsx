export default function About() {
  return (
    <section id="sobre" className="py-24 bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-900 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="mx-auto max-w-5xl px-6 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-16 text-center animate-slideInUp">
          Sobre Mim
        </h2>
        
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-3 space-y-6 animate-slideInLeft">
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed border-l-4 border-blue-500 pl-6 hover:pl-8 transition-all duration-300">
              Sou um desenvolvedor <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Full Stack</span> com forte experiência em manutenção e evolução de aplicações ERP e sistemas de gestão complexos. Ao longo de minha carreira, trabalho com Delphi, SQL e tecnologias relacionais, além de desenvolver soluções web modernas utilizando Next.js.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed border-l-4 border-purple-500 pl-6 hover:pl-8 transition-all duration-300">
              Especializado em <span className="font-bold">APIs REST</span>, autenticação, integrações com serviços em nuvem e regras de negócio complexas. Tenho forte foco em <span className="font-bold">consistência de dados</span>, performance e experiência do usuário.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed border-l-4 border-pink-500 pl-6 hover:pl-8 transition-all duration-300">
              Minha missão é transformar necessidades operacionais em <span className="font-bold">produtos digitais eficientes e escaláveis</span>, sempre buscando as melhores práticas e arquitetura limpa.
            </p>
          </div>
          
          <div className="md:col-span-2 animate-slideInRight">
            <div className="sticky top-24 glass-effect bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-950/30 dark:to-purple-950/30 border border-blue-200/50 dark:border-purple-800/50 p-8 rounded-2xl shadow-glow">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">📅</span>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Experiência</h3>
              </div>
              
              <div className="space-y-7">
                <div className="pb-6 border-b border-zinc-300/50 dark:border-zinc-700/50 hover:scale-105 transition-transform">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-xl">💻</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-zinc-900 dark:text-zinc-50 text-lg">Desenvolvedor</h4>
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">TECINCO Tecnologia Ltda.</p>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 pl-8">jan de 2023 - Presente</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 pl-8 font-medium">Remoto • 3 anos 2 meses</p>
                </div>
                
                <div className="hover:scale-105 transition-transform">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-xl">⚙️</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-zinc-900 dark:text-zinc-50 text-lg">Programador</h4>
                      <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">Salus EPI</p>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 pl-8">jul de 2022 - jan de 2023</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 pl-8 font-medium">Guarujá do Sul, SC • Meio período</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
