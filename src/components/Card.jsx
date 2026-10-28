import { formatarMoeda } from '../data/carros'

export default function Card({ carro, onSimular }) {
  return (
    <article className="flex min-w-0 flex-col border border-neutral-200 bg-white">
      <div className="relative overflow-hidden bg-neutral-100">
        <img src={carro.imagem} alt={`Fotografia ilustrativa de um ${carro.marca} ${carro.modelo}`} width="1000" height="667" loading="lazy" className="h-60 w-full object-cover" />
        <span className="absolute left-4 top-4 bg-white px-3 py-2 text-[10px] uppercase tracking-widest">{carro.categoria}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow mb-2">{carro.marca}</p>
        <h2 className="font-display text-3xl">{carro.modelo}</h2>
        <p className="mb-5 mt-3 text-sm leading-6 text-neutral-600">{carro.descricao}</p>
        <div className="mt-auto flex flex-wrap gap-4 border-b border-neutral-200 pb-5 text-xs text-neutral-600"><span>{carro.cambio}</span><span>{carro.lugares} lugares</span></div>
        <div className="flex flex-wrap items-end justify-between gap-4 pt-5">
          <p><span className="block text-[10px] uppercase tracking-widest text-neutral-500">Por diária</span><span className="mt-1 block text-xl font-medium tabular-nums">{formatarMoeda(carro.diaria)}</span></p>
          <button type="button" className="min-h-11 border-b border-neutral-400 text-sm hover:border-black hover:text-neutral-500" onClick={() => onSimular(carro.id)} aria-label={`Simular locação do ${carro.marca} ${carro.modelo}`}>Simular locação <span className="ml-2" aria-hidden="true">↗</span></button>
        </div>
      </div>
    </article>
  )
}
