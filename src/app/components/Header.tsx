"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 glass-effect backdrop-blur-xl">
      <nav className="mx-auto max-w-4xl px-6 py-4 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 hover:scale-110 transition-transform"
        >
          ❤️ Adriel
        </Link>
        <div className="flex gap-8">
          <Link 
            href="#sobre" 
            className="text-zinc-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 dark:text-zinc-400 dark:hover:from-blue-400 dark:hover:to-purple-400 transition font-medium"
          >
            Sobre
          </Link>
          <Link 
            href="#projetos" 
            className="text-zinc-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 dark:text-zinc-400 dark:hover:from-blue-400 dark:hover:to-purple-400 transition font-medium"
          >
            Projetos
          </Link>
          <Link 
            href="#habilidades" 
            className="text-zinc-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 dark:text-zinc-400 dark:hover:from-blue-400 dark:hover:to-purple-400 transition font-medium"
          >
            Habilidades
          </Link>
          <Link 
            href="#contato" 
            className="text-zinc-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 dark:text-zinc-400 dark:hover:from-blue-400 dark:hover:to-purple-400 transition font-medium"
          >
            Contato
          </Link>
        </div>
      </nav>
    </header>
  );
}
