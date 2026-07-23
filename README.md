# Platform Migration Page

Página estática da USA English que informa a mudança de endereço do Hub Speaking Rooms e encaminha o aluno para a nova plataforma ou para o suporte.

## Stack

- Next.js com App Router
- TypeScript
- Tailwind CSS
- ESLint

Não há banco de dados, autenticação, APIs, formulários, cookies ou analytics nesta primeira versão. A página é renderizada estaticamente e pode ser publicada diretamente na Vercel.

## Scripts

```bash
pnpm dev
pnpm build
pnpm lint
```

## Assets

Os assets utilizados pela página ficam em `public`:

- `public/fonts`: fontes locais da identidade visual. A página carrega a família `TT Supermolot Neue` a partir desta pasta.
- `public/images/wpp-icon.webp`: ícone exibido no botão de suporte.
- `public/images/typ-favicon.webp`: favicon do site, facilmente substituível pelo mesmo caminho.
- `public/images/backdrop-mobile-migration.webp`: plano de fundo para telas menores que `640px`.
- `public/images/backdrop-desktop-migration.webp`: plano de fundo para telas a partir de `640px`.

Ainda não há arquivo de logo no repositório. Por isso, a identificação no topo é textual e utiliza a fonte oficial. Quando o logo for enviado, substitua essa assinatura em `app/page.tsx` por uma imagem local.

## Conteúdo e links

Os textos, rótulos e URLs editáveis estão centralizados em `app/site-config.ts`. O link da nova plataforma abre na mesma aba; o suporte via WhatsApp abre em outra aba com `noopener noreferrer`.

## Estrutura principal

- `app/page.tsx`: página de viewport único.
- `app/site-config.ts`: conteúdo e destinos dos botões.
- `app/globals.css`: carregamento das fontes e estilos globais.
