import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="page-width pb-12 pt-12 sm:pt-16">
        <div className="mb-10 flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-5">Locação de carros importados</p>
            <h1 className="font-display text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">Dirigir pode ser<br />uma <span className="italic text-neutral-500">experiência.</span></h1>
          </div>
          <div className="max-w-72 md:pb-2">
            <p className="mb-6 text-sm leading-7 text-neutral-600">Design que impressiona. Performance que você sente. Encontre o carro para o seu próximo destino.</p>
            <Link to="/carros" className="button-dark">Explore nossa frota <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="relative overflow-hidden bg-neutral-200">
          <img src="/images/porsche.jpg" alt="Porsche Panamera preto em movimento em uma avenida" width="1800" height="1200" fetchPriority="high" className="h-72 w-full object-cover object-[center_58%] sm:h-[430px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white sm:p-9">
            <div><p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-white/80">Em destaque</p><p className="font-display text-3xl sm:text-4xl">Porsche Panamera Turbo</p></div>
            <Link to="/carros?marca=Porsche" aria-label="Conheça o Porsche Panamera Turbo" className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/70 text-xl hover:bg-white hover:text-black">↗</Link>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-b border-neutral-200 py-6 text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-600">
          <span>Uma seleção. Muitas possibilidades.</span>
          <div className="flex flex-wrap gap-7 sm:gap-12"><span>Porsche</span><span>BMW</span><span>Mercedes-Benz</span></div>
        </div>
      </section>

      <section className="page-width pb-20 pt-5 sm:pb-24">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><p className="eyebrow mb-4">Sua próxima escolha</p><h2 className="font-display text-4xl tracking-tight sm:text-5xl">Um carro para cada momento.</h2></div>
          <Link to="/carros" className="self-start border-b border-neutral-400 pb-1 text-sm hover:border-black hover:text-neutral-500 sm:shrink-0">Ver todos os carros <span className="ml-5" aria-hidden="true">↗</span></Link>
        </div>
        <div className="grid gap-7 md:grid-cols-2">
          <Link to="/carros?marca=BMW" className="group">
            <div className="overflow-hidden bg-neutral-200"><img src="/images/bmw.jpg" alt="BMW em destaque, representando a seleção de sedãs" width="1000" height="667" loading="lazy" className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" /></div>
            <div className="flex items-center justify-between border-b border-neutral-200 py-5"><div><h3 className="font-display text-2xl">Presença no dia a dia</h3><p className="mt-1 text-sm text-neutral-600">Conheça nossa seleção BMW.</p></div><span aria-hidden="true">↗</span></div>
          </Link>
          <Link to="/carros?marca=Mercedes-Benz" className="group">
            <div className="overflow-hidden bg-neutral-200"><img src="/images/mercedes.jpg" alt="Mercedes-Benz AMG GT cinza em destaque" width="1000" height="667" loading="lazy" className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" /></div>
            <div className="flex items-center justify-between border-b border-neutral-200 py-5"><div><h3 className="font-display text-2xl">Performance em cada detalhe</h3><p className="mt-1 text-sm text-neutral-600">Explore a linha Mercedes-Benz.</p></div><span aria-hidden="true">↗</span></div>
          </Link>
        </div>
      </section>

      <section className="bg-neutral-900 py-16 text-white sm:py-20">
        <div className="page-width grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div><p className="eyebrow mb-4 text-neutral-400">Simples, do começo ao destino</p><h2 className="font-display text-4xl leading-tight">Menos etapas.<br /><span className="italic text-neutral-400">Mais estrada.</span></h2></div>
          <ol className="grid gap-8 sm:grid-cols-3">
            {[
              ['01', 'Escolha seu carro', 'Compare os modelos e encontre o que combina com você.'],
              ['02', 'Defina o período', 'Informe as diárias e simule o valor da locação.'],
              ['03', 'Planeje seu destino', 'Use a estimativa para organizar sua próxima viagem.'],
            ].map(([number, title, text]) => (
              <li key={number} className="border-t border-neutral-600 pt-4"><span className="text-xs tabular-nums text-neutral-400">{number}</span><h3 className="mb-3 mt-7 text-sm font-medium">{title}</h3><p className="text-xs leading-6 text-neutral-400">{text}</p></li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
