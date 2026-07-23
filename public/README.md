# Assets públicos

Este diretório contém os assets finais servidos pela página de migração. Os arquivos são referenciados a partir de `/images` e `/fonts` no código da aplicação.

## Imagens

| Arquivo | Uso atual |
| --- | --- |
| `images/backdrop-desktop-migration.webp` | Plano de fundo da página em telas a partir de `640px`. É aplicado em `app/globals.css` com `background-size: cover`. |
| `images/backdrop-mobile-migration.webp` | Plano de fundo da página em telas menores que `640px`. É aplicado em `app/globals.css` com `background-size: cover`. |
| `images/wpp-icon.webp` | Ícone decorativo exibido no botão “Falar com o suporte”. |
| `images/typ-favicon.webp` | Favicon definido nos metadados globais em `app/layout.tsx`. |

## Fontes

Todas as fontes pertencem à família `TT Supermolot Neue` e são carregadas em `app/globals.css`.

| Arquivo | Peso e estilo | Uso atual |
| --- | --- | --- |
| `fonts/TT Supermolot Neue Light.woff2` | `300`, normal | Texto de suporte: “Ainda não recebeu seu acesso ou está com dificuldades para entrar?”. |
| `fonts/TT Supermolot Neue Light Italic.woff2` | `300`, itálico | Observação final: “Este endereço antigo não será mais utilizado para acesso às aulas e aos conteúdos.” |
| `fonts/TT Supermolot Neue Bold.woff2` | `700`, normal | Texto explicativo principal, botão de acesso à nova plataforma e botão de suporte. |
| `fonts/TT Supermolot Neue Black.woff2` | `900`, normal | Título: “A plataforma mudou de endereço”. |
| `fonts/TT Supermolot Neue Bold Italic.woff2` | `700`, itálico | Disponível no repositório, mas não utilizado pela página atual. |
| `fonts/TT Supermolot Neue Black Italic.woff2` | `900`, itálico | Disponível no repositório, mas não utilizado pela página atual. |

Não adicione imagens, logos, ícones ou fontes provisórias.
