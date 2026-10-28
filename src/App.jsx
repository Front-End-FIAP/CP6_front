import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Carros from './pages/Carros'

function Layout() {
  const { pathname } = useLocation()
  const mainRef = useRef(null)
  const previousPath = useRef(pathname)

  useEffect(() => {
    document.title = pathname === '/' ? 'Vértice | Carros importados' : pathname === '/carros' ? 'Nossa frota | Vértice' : 'Página não encontrada | Vértice'
    if (previousPath.current !== pathname) {
      window.scrollTo(0, 0)
      mainRef.current?.focus()
      previousPath.current = pathname
    }
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#conteudo" onClick={(event) => { event.preventDefault(); mainRef.current?.focus(); mainRef.current?.scrollIntoView() }} className="sr-only z-50 bg-white p-4 focus:not-sr-only focus:absolute">Pular para o conteúdo</a>
      <Navbar />
      <main id="conteudo" ref={mainRef} tabIndex={-1} className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carros" element={<Carros />} />
          <Route path="*" element={<section className="page-width py-24"><p className="eyebrow mb-4">Erro 404</p><h1 className="font-display text-5xl">Esse caminho não existe.</h1><p className="mb-8 mt-5 text-neutral-600">Volte ao início para encontrar seu próximo destino.</p><Link className="button-dark" to="/">Voltar ao início <span aria-hidden="true">↗</span></Link></section>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return <HashRouter><Layout /></HashRouter>
}
