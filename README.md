# Financeiro

Aplicação web responsiva para gestão financeira pessoal, feita com Next.js, TypeScript, Tailwind CSS e Supabase.

## Começar

1. Instale Node.js 20+ e execute `npm install`.
2. Copie `.env.example` para `.env.local` e informe sua anon key do Supabase.
3. Execute `npm run dev` e acesse http://localhost:3000.

O projeto usa o projeto Supabase `ebzjliyhimtaddlzmayb`. A chave pública nunca deve ser commitada; configure-a em `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

## Supabase

O app usa Auth por e-mail/senha e as tabelas `usuarios`, `transacoes`, `categorias`, `metas` e `orcamentos`. Acesse o banco com RLS habilitado e políticas que restrinjam cada linha ao usuário autenticado. O código espera, para os campos mais comuns, `user_id`, `tipo`, `descricao`, `valor`, `categoria`, `data`, `nome`, `valor_atual`, `valor_meta`, `limite_mensal` e `mes`; campos desconhecidos no banco são tratados de modo tolerante na apresentação. Caso seu esquema use outros nomes, ajuste os campos definidos nas páginas em `src/app/(app)`.

`usuarios` deve ter uma linha por usuário autenticado com `id` igual ao UUID de `auth.users`. As páginas de registro tentam criar essa linha sem interromper o cadastro caso a tabela/permissão não esteja preparada.
