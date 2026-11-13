# CIMATEC Finance

Site institucional em Next.js, React e TypeScript, preparado para exportação estática. Não utiliza backend nem armazena dados de visitantes.

## Conteúdo

- Apresentação da iniciativa estudantil do SENAI CIMATEC.
- Tech & Quant, Processos e Projetos, Comunicação e Marketing.
- Espaços brancos reservados para fotografias.
- Empresas com as quais houve contato, sem alegação de parceria.
- Contato por WhatsApp e telefone: +55 71 99669-2006.

## Desenvolvimento

Instale as dependências com `pnpm install` ou `npm install`. Inicie com `pnpm dev` ou `npm run dev`.

Validação: `pnpm typecheck` e `pnpm build`. A exportação estática é gerada em `out/`.

## Estado da entrega

Dependências instaladas. Compilação de produção e verificação TypeScript aprovadas. A revisão visual no navegador e a publicação continuam pendentes.

A logo original não pôde ser baixada. O cabeçalho usa uma identificação tipográfica provisória, a substituir pela marca fornecida. As fotografias permanecem em branco por orientação do projeto. As fontes Google possuem fallbacks locais.

## Direção

Preto, dourado e superfícies claras; títulos serifados e conteúdo com tipografia sem serifa. A abertura apresenta órbitas abstratas, com controle de pausa. A preferência de movimento reduzido desativa animações e rolagem suave. As abas permitem navegação por setas, Home e End. Contatos abrem o WhatsApp com mensagens específicas; não pressupõem processo seletivo aberto.

Não há métricas, resultados, pessoas, agenda ou parceiros fictícios. A participação de estudantes de outras universidades é apresentada como possibilidade de diálogo, não como elegibilidade confirmada.

## Relatórios e newsletter

`src/app/publications.tsx` contém a biblioteca de relatórios, com busca por título, assunto ou autor e filtros por tema. O catálogo está vazio até receber publicações reais. Adicione os PDFs a `public/relatorios/` e registre título, resumo, categoria, data ISO, autoria e caminho do PDF no array `reports`.

A newsletter apresenta o estado de preparação. Para ativar o botão de inscrição, configure `NEXT_PUBLIC_NEWSLETTER_URL` com a URL HTTPS do formulário hospedado no serviço escolhido e gere uma nova compilação. Essa variável é pública e não deve conter chaves ou segredos. Confirmação de inscrição, preferências, cancelamento e campanhas periódicas devem ser configurados no serviço de e-mail. Não há cadastro ou disparo automático ativo neste projeto.

Antes do lançamento, definir serviço de envio, conta institucional remetente, periodicidade e responsável pela revisão editorial. A alternativa atual de contato pelo WhatsApp não cadastra assinantes.
