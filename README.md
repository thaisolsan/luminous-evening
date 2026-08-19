# Golden Hour Invite

Crie uma página web de convite digital animado para um jantar especial.

O projeto deve ter aparência sofisticada, elegante e moderna, com foco em uma experiência visual premium no celular. A página deve funcionar perfeitamente em dispositivos móveis e desktop.

OBJETIVO

Criar um convite digital que pareça uma experiência de evento, e não apenas uma página comum.

O visitante deve entrar na página e visualizar uma abertura elegante, seguida das informações do jantar, localização e um botão para confirmar presença.

ESTILO VISUAL

Use uma estética:

sofisticada

elegante

contemporânea

minimalista

acolhedora

com aparência de jantar especial/evento premium

Paleta de cores:

fundo principal: preto quase absoluto (#0b0b0b)

dourado: #D4AF37

dourado claro: #F1D77A

branco: #FFFFFF

branco secundário: #D8D8D8

detalhes discretos em tons de champagne

Utilize gradientes sutis e brilhos dourados no fundo.

Evite aparência de site corporativo.

A experiência deve lembrar um convite de casamento/jantar sofisticado.

TIPOGRAFIA

Utilize uma combinação de:

uma fonte serifada elegante para títulos

uma fonte sans-serif moderna para textos e informações

Sugestões:

Título:
Playfair Display ou Cormorant Garamond

Textos:
Montserrat ou Inter

Os títulos devem ter bastante presença visual.

TELA DE ABERTURA

Ao entrar na página, mostrar uma tela inicial centralizada.

Animação:

O fundo aparece suavemente.

Pequenos brilhos dourados surgem no fundo.

Uma pequena frase aparece primeiro:

"PREPARE-SE PARA UMA NOITE ESPECIAL"

Depois aparece o título principal:

"JANTAR"

Em seguida aparece uma pequena frase:

"Uma noite para celebrar, brindar e aproveitar juntos."

Por fim, mostrar um botão:

"ABRIR CONVITE"

O botão deve ter borda dourada, efeito de brilho ao passar o mouse e uma pequena animação de pulsação.

Ao clicar em "ABRIR CONVITE", executar uma transição suave para o conteúdo principal.

ANIMAÇÕES

As animações devem ser elegantes e discretas.

Utilize:

fade-in

fade-up

scale suave

parallax muito leve

partículas/brilhos dourados

transições suaves entre seções

Evite animações exageradas.

Os elementos devem aparecer progressivamente conforme o usuário rola a página.

CONTEÚDO PRINCIPAL

Depois da abertura, mostrar:

"VOCÊ ESTÁ CONVIDADO(A)"

e abaixo:

"Jantar Especial"

Adicionar uma frase:

"Uma noite preparada com carinho para reunir pessoas especiais ao redor da mesa."

DATA E HORÁRIO

Criar uma seção visual para as informações do evento.

Mostrar:

📅 DATA
12 de setembro de 2026

🕗 HORÁRIO
20h00

Os dois itens devem ficar em cards elegantes, com bordas douradas muito discretas.

LOCALIZAÇÃO

Criar uma seção específica chamada:

"ONDE VAMOS NOS ENCONTRAR"

Mostrar:

📍 Restaurante Exemplo

Rua das Flores, 123
Vila Velha — ES

Adicionar um mapa incorporado do Google Maps.

O mapa deve ter bordas arredondadas e combinar visualmente com o restante da página.

Abaixo do mapa, adicionar um botão:

"ABRIR NO GOOGLE MAPS"

O botão deve abrir a localização em uma nova aba.

IMPORTANTE:
Deixar o nome do local, endereço e URL do Google Maps organizados como variáveis fáceis de editar posteriormente.

CONFIRMAÇÃO DE PRESENÇA

Criar uma seção de destaque no final:

"VAI SER UMA NOITE ESPECIAL"

Texto:

"Esperamos você para compartilhar essa noite conosco."

Adicionar um botão grande:

"CONFIRMAR PRESENÇA"

Esse botão deve abrir o WhatsApp.

Utilizar uma URL de WhatsApp configurável, deixando o número e a mensagem em variáveis no código.

Mensagem sugerida:

"Olá! Confirmo minha presença no jantar do dia 12 de setembro. 🥂"

CONTADOR

Adicionar um contador regressivo para o evento.

Mostrar:

DIAS | HORAS | MINUTOS | SEGUNDOS

O contador deve ser atualizado automaticamente a cada segundo.

Quando o horário do evento chegar, substituir o contador por:

"É HOJE! 🥂"

A data do evento deve ficar em uma variável fácil de editar.

RODAPÉ

No final da página:

"Esperamos você! 🥂"

Adicionar uma pequena animação de brilho dourado.

EXPERIÊNCIA MOBILE

O projeto deve ser pensado primeiro para celular.

No mobile:

títulos grandes, mas sem cortar

botões ocupando uma largura confortável

mapa responsivo

espaçamento generoso

cards empilhados verticalmente

animações leves para não prejudicar desempenho

No desktop, centralizar o convite e limitar a largura máxima para manter aparência de convite.

EFEITOS DE FUNDO

Criar um fundo elegante com:

gradiente preto

pequenos pontos dourados animados

brilho radial dourado extremamente sutil

efeito de iluminação nas bordas

Os efeitos não devem prejudicar a leitura.

MÚSICA

Adicionar suporte opcional para música ambiente.

Não iniciar o áudio automaticamente sem interação do usuário.

Depois que o usuário clicar em "ABRIR CONVITE", mostrar discretamente um botão no canto inferior direito para:

🔊 Música

Permitir ativar/desativar a música.

Deixar o arquivo de áudio configurável, por exemplo:

/music/jantar.mp3

Se o arquivo não existir, a página deve continuar funcionando normalmente sem apresentar erro.

RESPONSIVIDADE

Garantir funcionamento em:

iPhone

Android

tablets

notebooks

monitores grandes

Não utilizar elementos que causem scroll horizontal.

TECNOLOGIA

Utilizar:

React

TypeScript

Tailwind CSS

componentes reutilizáveis

Lucide Icons ou biblioteca equivalente

Manter o código organizado.

Criar componentes separados para:

OpeningScreen

EventDetails

DateTime

Location

Countdown

Confirmation

MusicPlayer

Footer

CONFIGURAÇÃO

Criar um objeto de configuração central para que eu possa alterar facilmente:

eventName
eventDate
eventTime
venueName
venueAddress
mapsUrl
whatsappNumber
whatsappMessage
musicUrl

Exemplo:

const eventConfig = {
eventName: "Jantar Especial",
eventDate: "2026-09-12T20:00:00",
eventTime: "20h00",
venueName: "Restaurante Exemplo",
venueAddress: "Rua das Flores, 123 — Vila Velha, ES",
mapsUrl: "",
whatsappNumber: "",
whatsappMessage: "Olá! Confirmo minha presença no jantar.",
musicUrl: "/music/jantar.mp3"
};

Não deixar informações importantes espalhadas pelo código.

DETALHES IMPORTANTES

Adicionar microinterações nos botões.

Ao passar o mouse:

aumentar levemente o botão

aumentar o brilho dourado

mudar suavemente a cor

No celular, utilizar estados de toque apropriados.

Criar transições suaves entre as seções.

Usar Intersection Observer ou solução equivalente para ativar as animações conforme as seções entram na tela.

Garantir acessibilidade básica:

contraste adequado

textos alternativos quando houver imagens

botões semanticamente corretos

navegação por teclado

respeitar prefers-reduced-motion

RESULTADO ESPERADO

O resultado final deve parecer um convite digital premium.

Não quero uma página genérica de evento.

Quero que a primeira impressão seja de:

"Uau, que convite bonito."

Priorizar experiência visual, elegância, animações suaves e excelente experiência no celular.

Use textos e informações fictícias apenas como placeholders, deixando tudo fácil de substituir no objeto de configuração.

Antes de finalizar, verificar:

Responsividade.

Animações.

Contador funcionando.

Botão do Google Maps funcionando com endereço: https://share.google/hvyspAezy4S8L5MLu.

Botão do WhatsApp funcionando.

Música opcional sem quebrar a página.

Ausência de scroll horizontal.

Boa performance.

Acessibilidade básica.

Código organizado e fácil de personalizar.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/87a6031c-1ec9-4e1c-8fb2-872414765cbe).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
