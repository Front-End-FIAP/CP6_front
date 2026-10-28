# Vértice | Locação de carros importados

Projeto individual de Web Development para a turma 1ESPI de Engenharia de Software da FIAP.

**Bruno Carreiro Dos Santos — RM 569423**

## Tecnologias

- React com Vite
- Tailwind CSS
- React Router DOM

## Executar

Requer Node.js 20.19+ ou 22.12+.

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal. Para verificar o código e gerar a versão de produção:

```bash
npm run lint
npm run build
npm run preview
```

## Organização

```text
src/
  components/    Navbar, Footer e Card
  data/          Dados dos veículos
  pages/         Home e Carros
  App.jsx        Configuração das rotas
  index.css      Tailwind e estilos globais
  main.jsx       Entrada da aplicação
public/
  images/        Fotografias dos veículos
.vscode/         Configurações e extensões recomendadas
integrante.txt   Identificação para entrega
```

## Funcionalidades

- Home com apresentação da locadora e destaques da frota.
- Catálogo com filtro por marca e estado mantido na URL.
- Simulação de locação por quantidade de diárias.
- Layout responsivo, navegação por teclado e página para endereços inexistentes.

Os carros, preços e a marca Vértice fazem parte de uma demonstração acadêmica. A simulação não envia dados, não cobra valores e não confirma uma reserva. As fotografias são ilustrativas.

## Versionamento

As tarefas de configuração, interface e catálogo são desenvolvidas em branches próprias, com pelo menos 3 commits semânticos por tarefa. Os PRs são direcionados à `dev`; a versão final é integrada à `main`.

Repositório público: https://github.com/Front-End-FIAP/CP6_front
