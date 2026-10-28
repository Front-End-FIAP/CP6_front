import { useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import Card from '../components/Card'
import { carros, marcas, formatarMoeda } from '../data/carros'

export default function Carros() {
  const [params, setParams] = useSearchParams()
  const marca = params.get('marca') || ''
  const carroId = params.get('carro')
  const selecionado = carros.find((carro) => carro.id === carroId)
  const filtrados = marca ? carros.filter((carro) => carro.marca === marca) : carros
  const dias = Number(params.get('dias'))
  const temEstimativa = Number.isInteger(dias) && dias >= 1 && dias <= 30
  const simulacaoRef = useRef(null)

  useEffect(() => {
    if (carroId && simulacaoRef.current) {
      simulacaoRef.current.focus()
      simulacaoRef.current.scrollIntoView({ block: 'center' })
    }
  }, [carroId])

  function filtrar(novaMarca) {
    setParams(novaMarca ? { marca: novaMarca } : {})
  }

  function selecionar(id) {
    const novosParams = new URLSearchParams(params)
    novosParams.set('carro', id)
    novosParams.delete('dias')
    setParams(novosParams)
  }

  function calcular(event) {
    event.preventDefault()
    const quantidade = Number(new FormData(event.currentTarget).get('dias'))
    if (!Number.isInteger(quantidade) || quantidade < 1 || quantidade > 30) return
    const novosParams = new URLSearchParams(params)
    novosParams.set('dias', String(quantidade))
    setParams(novosParams)
  }

  function fecharSimulacao() {
    const novosParams = new URLSearchParams(params)
    novosParams.delete('carro')
    novosParams.delete('dias')
    setParams(novosParams)
    document.getElementById('frota-titulo')?.focus()
  }

  return (
    <section className="page-width pb-20 pt-12 sm:pt-16">
      <p className="eyebrow mb-5">Encontre seu próximo destino</p>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h1 id="frota-titulo" tabIndex={-1} className="font-display text-5xl tracking-tight sm:text-7xl">Nossa <span className="italic text-neutral-500">frota.</span></h1>
        <p className="max-w-80 text-sm leading-7 text-neutral-600">Uma seleção de importados para quem aprecia o caminho tanto quanto o destino.</p>
      </div>
      <div className="mb-8 mt-10 flex flex-wrap items-center justify-between gap-5 border-y border-neutral-200 py-5">
        <div className="flex flex-wrap items-center gap-4">
          <label htmlFor="marca" className="text-xs font-medium">Filtrar por marca</label>
          <select id="marca" name="marca" value={marca} onChange={(event) => filtrar(event.target.value)} className="min-h-11 min-w-44 border border-neutral-300 bg-white px-3 text-sm text-neutral-900">
            <option value="">Todas as marcas</option>
            {marca && !marcas.includes(marca) && <option value={marca}>{marca}</option>}
            {marcas.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
          {marca && <button type="button" onClick={() => filtrar('')} className="min-h-11 text-xs underline underline-offset-4 hover:text-neutral-500">Limpar filtro</button>}
        </div>
        <p className="text-xs text-neutral-600" role="status">{filtrados.length} {filtrados.length === 1 ? 'carro encontrado' : 'carros encontrados'}</p>
      </div>

      {selecionado && (
        <section aria-labelledby="simulacao-titulo" className="mb-8 border border-neutral-300 bg-white p-6 sm:p-8">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div><p className="eyebrow mb-3">Planeje sua locação</p><h2 ref={simulacaoRef} tabIndex={-1} id="simulacao-titulo" className="font-display text-3xl">{selecionado.marca} {selecionado.modelo}</h2></div>
            <button type="button" onClick={fecharSimulacao} className="min-h-11 text-xs underline underline-offset-4 hover:text-neutral-500">Fechar simulação</button>
          </div>
          <form key={`${carroId}-${dias}`} onSubmit={calcular} className="flex flex-wrap items-end gap-5">
            <div><label htmlFor="dias" className="mb-2 block text-xs">Quantidade de diárias</label><input id="dias" name="dias" type="number" inputMode="numeric" autoComplete="off" min="1" max="30" step="1" required defaultValue={temEstimativa ? dias : 1} aria-describedby="dias-ajuda" className="min-h-12 w-36 border border-neutral-300 bg-white px-3 text-sm" /><p id="dias-ajuda" className="mt-2 text-xs text-neutral-600">De 1 a 30 dias.</p></div>
            <button type="submit" className="button-dark sm:mb-6">Calcular estimativa <span aria-hidden="true">↗</span></button>
          </form>
          <div role="status" className="mt-5">
            {temEstimativa && <p className="text-sm">{dias} {dias === 1 ? 'diária' : 'diárias'} × {formatarMoeda(selecionado.diaria)} = <strong className="ml-1 text-2xl font-medium tabular-nums">{formatarMoeda(dias * selecionado.diaria)}</strong></p>}
          </div>
          <p className="mt-4 max-w-2xl text-xs leading-6 text-neutral-600">Simulação acadêmica. O valor considera apenas as diárias, sem taxas ou serviços adicionais. Nenhuma reserva ou cobrança será realizada.</p>
        </section>
      )}

      {filtrados.length ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{filtrados.map((carro) => <Card key={carro.id} carro={carro} onSimular={selecionar} />)}</div>
      ) : (
        <div className="border border-neutral-200 py-16 text-center"><h2 className="font-display text-3xl">Nenhum carro por aqui.</h2><p className="mb-6 mt-3 text-sm text-neutral-600">Escolha outra marca ou veja a seleção completa.</p><button type="button" onClick={() => filtrar('')} className="button-dark">Ver todos os carros</button></div>
      )}
      <p className="mt-7 text-xs leading-6 text-neutral-600">Valores demonstrativos por diária. Fotografias ilustrativas.</p>
    </section>
  )
}
