function direcionar_jogo (){
    location.href = 'pag_jogo.html';
}

function mensagem_de_empate(){
    let msg_empate = document.querySelector('.msg_empate');
    msg_empate.style.display = 'block';
    setTimeout(() => {
        msg_empate.style.display = 'none';
    }, 2000);
}

let jogada_pedra = document.querySelector('.jogada_pedra');
let jogada_papel = document.querySelector('.jogada_papel');
let jogada_tesoura = document.querySelector('.jogada_tesoura');

let jogada_jog = document.querySelector('.jogada_jog');
let jogada_cpu = document.querySelector('.jogada_cpu');
let def_jog = 0;
let def_cpu = 0;

let opcoes_cpu = ['Pedra', 'Papel', 'Tesoura'];

let placar_jog = document.querySelector('.placar_jog');
let placar_cpu = document.querySelector('.placar_cpu');
let cont_jogador = 0;
let cont_cpu = 0;

jogada_pedra.addEventListener('click', () => {
        def_jog = 'Pedra';
        jogada_jog.innerHTML = `<img src="imagens/pedra.png" alt="Imagem"></img>`;
        jogada_jog.style.paddingTop = '12px';
        const img = jogada_jog.querySelector('img');
        img.style.width = '50px';
        jogo();
    }
);

jogada_papel.addEventListener('click', () => {
        def_jog = 'Papel';
        jogada_jog.innerHTML = `<img src="imagens/papel.png" alt="Imagem"></img>`;
        jogada_jog.style.paddingTop = '12px';
        const img = jogada_jog.querySelector('img');
        img.style.width = '50px';
        jogo();
    }
);

jogada_tesoura.addEventListener('click', () => {
        def_jog = 'Tesoura';
        jogada_jog.innerHTML = `<img src="imagens/tesoura.png" alt="Imagem"></img>`;
        jogada_jog.style.paddingTop = '12px';
        const img = jogada_jog.querySelector('img');
        img.style.width = '50px';
        jogo();
    }
);

function jogo(){
    let escolha = opcoes_cpu[Math.floor(Math.random() * opcoes_cpu.length)];
    def_cpu = escolha;
    if (escolha == 'Pedra'){
        jogada_cpu.innerHTML = `<img src="imagens/pedra.png" alt="Imagem"></img>`;
        jogada_cpu.style.paddingTop = '12px';
        const img = jogada_cpu.querySelector('img');
        img.style.width = '50px';
    }
    else if (escolha == 'Papel'){
        jogada_cpu.innerHTML = `<img src="imagens/papel.png" alt="Imagem"></img>`;
        jogada_cpu.style.paddingTop = '12px';
        const img = jogada_cpu.querySelector('img');
        img.style.width = '50px';
    }
    else if (escolha == 'Tesoura'){
        jogada_cpu.innerHTML = `<img src="imagens/tesoura.png" alt="Imagem"></img>`;
        jogada_cpu.style.paddingTop = '12px';
        const img = jogada_cpu.querySelector('img');
        img.style.width = '50px';
    }

    if (def_jog == def_cpu){
        mensagem_de_empate();
    }
    else if (
        (def_jog == 'Pedra' && def_cpu == 'Tesoura') ||
        (def_jog == 'Papel' && def_cpu == 'Pedra') ||
        (def_jog == 'Tesoura' && def_cpu == 'Papel')){
            cont_jogador++;
            placar_jog.textContent = `${cont_jogador}`;
    }
    else {
        cont_cpu++;
        placar_cpu.textContent = `${cont_cpu}`;
    }
}