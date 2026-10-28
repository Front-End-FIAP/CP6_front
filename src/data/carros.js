export const carros = [
  {
    id: 'porsche-911',
    marca: 'Porsche',
    modelo: '911 Carrera',
    categoria: 'Esportivo',
    cambio: 'Automático',
    lugares: 4,
    diaria: 2490,
    imagem: '/images/porsche.jpg',
    descricao: 'Um ícone de design e performance para transformar o trajeto em destino.',
  },
  {
    id: 'bmw-serie-3',
    marca: 'BMW',
    modelo: 'Série 3',
    categoria: 'Sedã',
    cambio: 'Automático',
    lugares: 5,
    diaria: 890,
    imagem: '/images/bmw.jpg',
    descricao: 'Equilíbrio entre conforto e esportividade, da rotina à próxima viagem.',
  },
  {
    id: 'mercedes-classe-c',
    marca: 'Mercedes-Benz',
    modelo: 'Classe C',
    categoria: 'Sedã executivo',
    cambio: 'Automático',
    lugares: 5,
    diaria: 990,
    imagem: '/images/mercedes.jpg',
    descricao: 'Elegância e conforto para aproveitar cada quilômetro com tranquilidade.',
  },
]

export const marcas = [...new Set(carros.map((carro) => carro.marca))]

export function formatarMoeda(valor) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(valor)
}
