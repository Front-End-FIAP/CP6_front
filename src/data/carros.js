export const carros = [
  {
    id: 'porsche-panamera',
    marca: 'Porsche',
    modelo: 'Panamera Turbo',
    categoria: 'Sedã esportivo',
    cambio: 'Automático',
    lugares: 4,
    diaria: 2490,
    imagem: '/images/porsche.jpg',
    descricao: 'Um ícone de design e performance para transformar o trajeto em destino.',
  },
  {
    id: 'bmw-m5',
    marca: 'BMW',
    modelo: 'M5',
    categoria: 'Sedã',
    cambio: 'Automático',
    lugares: 5,
    diaria: 1490,
    imagem: '/images/bmw.jpg',
    descricao: 'Equilíbrio entre conforto e esportividade, da rotina à próxima viagem.',
  },
  {
    id: 'mercedes-amg-gt',
    marca: 'Mercedes-Benz',
    modelo: 'AMG GT',
    categoria: 'Esportivo',
    cambio: 'Automático',
    lugares: 2,
    diaria: 2990,
    imagem: '/images/mercedes.jpg',
    descricao: 'Linhas marcantes e espírito esportivo para uma experiência ao volante.',
  },
]

export const marcas = [...new Set(carros.map((carro) => carro.marca))]

export function formatarMoeda(valor) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(valor)
}
