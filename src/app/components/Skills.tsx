export default function Skills() {
  const skillsCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
      icon: "🎨",
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Backend & Banco de Dados",
      skills: ["APIs REST", "PostgreSQL", "SQL", "Supabase", "Firebird", "Banco de Dados Relacional"],
      icon: "⚙️",
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Sistemas & ERP",
      skills: ["Delphi 7", "ERP", "Regras de Negócio", "Arquitetura de Sistemas", "Performance"],
      icon: "🏗️",
      color: "from-orange-500 to-red-500",
    },
    {
      category: "Autenticação & DevOps",
      skills: ["Clerk", "Vercel", "Git", "Autenticação Segura", "Cloud Services"],
      icon: "🔐",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="habilidades" className="py-24 bg-gradient-to-b from-zinc-50 via-white to-zinc-50 dark:from-zinc-900 dark:via-black dark:to-zinc-900 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="mx-auto max-w-5xl px-6 relative z-10">
        <div className="text-center mb-16 animate-slideInUp">
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Competências desenvolvidas ao longo da minha carreira
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillsCategories.map((category, index) => (
            <div 
              key={index} 
              className="group relative animate-slideInUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
              
              <div className="relative bg-white dark:bg-zinc-900/50 glass-effect border border-zinc-200/50 dark:border-zinc-800/50 p-8 rounded-2xl shadow-glow hover:shadow-2xl transition-all hover:scale-105 duration-300">
                {/* Header with icon */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 bg-gradient-to-br ${category.color} rounded-xl text-white text-2xl group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                    {category.category}
                  </h3>
                </div>
                
                {/* Skills grid */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-4 py-2.5 bg-gradient-to-r ${category.color} bg-opacity-10 dark:bg-opacity-5 border border-${category.color.split(' ')[1].slice(0, -2)}-200/30 dark:border-${category.color.split(' ')[1].slice(0, -2)}-700/30 text-zinc-900 dark:text-zinc-100 rounded-lg text-sm font-semibold hover:scale-110 transition-transform duration-300 cursor-default`}
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
