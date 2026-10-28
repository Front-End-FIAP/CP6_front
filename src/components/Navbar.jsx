import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="border-b border-neutral-200 bg-stone-50">
      <nav className="page-width flex min-h-24 items-center justify-between gap-5" aria-label="Navegação principal">
        <Link to="/" className="wordmark" aria-label="Vértice, página inicial">vértice<span className="text-neutral-500">.</span></Link>
        <div className="flex items-center gap-6 sm:gap-10">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'nav-active' : ''}`}>Início</NavLink>
          <NavLink to="/carros" className={({ isActive }) => `nav-link ${isActive ? 'nav-active' : ''}`}>Nossa frota</NavLink>
          <Link to="/carros" className="hidden items-center gap-5 border border-neutral-900 px-5 py-3 text-xs font-medium hover:bg-neutral-900 hover:text-white sm:inline-flex">Escolha seu carro <span aria-hidden="true">↗</span></Link>
        </div>
      </nav>
    </header>
  )
}
