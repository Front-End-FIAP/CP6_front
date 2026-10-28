import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-stone-50">
      <div className="page-width flex flex-col justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <div>
          <Link to="/" className="wordmark text-3xl" aria-label="Vértice, página inicial">vértice.</Link>
          <p className="mt-2 text-xs text-neutral-600">O próximo destino começa aqui.</p>
        </div>
        <div className="text-xs leading-6 text-neutral-600 sm:text-right">
          <p>Bruno Carreiro Dos Santos · RM 569423</p>
          <p>Projeto acadêmico · FIAP · Engenharia de Software</p>
          <a className="underline underline-offset-4 hover:text-black" href="https://github.com/Front-End-FIAP/CP6_front">Repositório do projeto <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </footer>
  )
}
