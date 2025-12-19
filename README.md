**Jokenpô**

   Projeto de um jogo clássico de Jokenpô (Pedra, Papel e Tesoura) desenvolvido para web, utilizando HTML, CSS e JavaScript puro, onde o usuário joga contra a CPU quantas vezes quiser.
o foco do projeto é praticar lógica de programação, manipulação do DOM, eventos e estilização responsiva.

**Visão Geral**

   O sistema é composto por duas páginas principais:
   
     * Página Inicial: tela de boas-vindas com apresentação do jogo e botão para iniciar.
     * Página do Jogo: tela principal onde o jogador enfrenta a CPU, visualiza o placar e faz suas jogadas.

**Funcionalidades**

   * Página inicial com redirecionamento para o jogo
   * Jogo de Pedra, Papel e Tesoura contra a CPU
   * Escolha aleatória da jogada da CPU
   * Placar dinâmico para jogador e CPU
   * Detecção de empate com mensagem temporária
   * Interação via cliques nas imagens
   * Layout responsivo para dispositivos móveis

**Tecnologias Utilizadas**

   * HTML5 – Estrutura das páginas
   * CSS3 – Estilização, responsividade e efeitos visuais
   * JavaScript – Lógica do jogo, eventos e manipulação do DOM

**Lógica do Jogo**

   O jogador escolhe Pedra, Papel ou Tesoura clicando em uma imagem, a CPU faz uma escolha aleatória utilizando Math.random() então o sistema compara as escolhas:
   
      * Se forem iguais → empate
      * Caso contrário → incrementa o placar do vencedor
   O placar é atualizado dinamicamente na tela.

**Autor**

   Projeto desenvolvido por Tiago Materagia.
