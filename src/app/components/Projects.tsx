export default function Projects() {
  const projects = [
    {
      title: "Bodega Club",
      description: "Aplicação full stack de e-commerce com clube de assinatura de bebidas. Gerencia catálogo de produtos, autenticação segura, pedidos e recorrência de planos, com foco em segurança, escalabilidade e consistência das regras de negócio usando APIs e banco de dados em nuvem.",
      tech: ["Next.js", "React", "TypeScript", "Clerk", "Supabase", "PostgreSQL", "Tailwind CSS"],
      link: "#",
      image: "🍷",
    },
    {
      title: "DataFut",
      description: "Aplicação Next.js para consultar dados de futebol em tempo real usando a API do football-data.org. Apresenta jogos ao vivo, resultados, principais competições, ligas, tabelas de classificação detalhadas e informações de times.",
      tech: ["Next.js", "React", "TypeScript", "APIs REST", "Tailwind CSS"],
      link: "#",
      image: "⚽",
    },
    {
      title: "TCAR - Sistema de Gestão de Oficinas",
      description: "ERP da Tecinco para gestão de oficinas mecânicas. Gerencia abertura e controle de Ordens de Serviço, geração de pré-notas, faturamento, emissão de notas fiscais e rotinas financeiras. Atuação de 3 anos implementando melhorias em regras de negócio, validações, otimizações SQL e garantindo confiabilidade das informações.",
      tech: ["Delphi 7", "SQL", "Firebird", "ERP", "Banco de Dados Relacional"],
      link: "#",
      image: "🔧",
    },
  ];

  return (
    <section id="projetos" className="py-24 bg-gradient-to-b from-white via-zinc-50 to-white dark:from-black dark:via-zinc-900 dark:to-black relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="mx-auto max-w-5xl px-6 relative z-10">
        <div className="text-center mb-16 animate-slideInUp">
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            Conheça os projetos que mais gosto de mencionar
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative animate-slideInUp overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Fundo com efeito */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 dark:from-blue-500/10 dark:to-purple-600/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              
              <div className="relative bg-white dark:bg-zinc-900/80 glass-effect border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl overflow-hidden shadow-glow hover:shadow-2xl transition-all">
                {/* Image/Icon area */}
                <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  <span className="text-5xl group-hover:scale-125 transition-transform transform">
                    {project.image}
                  </span>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500"></div>
                </div>
                
                {/* Content */}
                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mb-5 leading-relaxed min-h-[72px]">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-600/10 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-purple-500/30 rounded-full text-xs font-semibold group-hover:from-blue-500/20 group-hover:to-purple-600/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform group-hover:translate-x-1 transition-all duration-300"
                  >
                    Ver Projeto
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
