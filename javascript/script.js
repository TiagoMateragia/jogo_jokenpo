function direcionar_jogo (){
    location.href = 'pag_jogo.html';
}

let jogada_pedra = document.querySelector('.jogada_pedra');
let jogada_papel = document.querySelector('.jogada_papel');
let jogada_tesoura = document.querySelector('.jogada_tesoura');

function jogo(){
    jogada_pedra.addEventListener('click', () => {
                let jogada_jog = document.querySelector('.jogada_jog');
                jogada_jog.innerHTML = `<img src="imagens/pedra.png" alt="Imagem"></img>`
                jogada_jog.style.paddingTop = '12px';
                const img = jogada_jog.querySelector('img');
                img.style.width = '50px';
            }
    );

    jogada_papel.addEventListener('click', () => {
                let jogada_jog = document.querySelector('.jogada_jog');
                jogada_jog.innerHTML = `<img src="imagens/papel.png" alt="Imagem"></img>`
                jogada_jog.style.paddingTop = '12px';
                const img = jogada_jog.querySelector('img');
                img.style.width = '50px';
            }
    );

    jogada_tesoura.addEventListener('click', () => {
                let jogada_jog = document.querySelector('.jogada_jog');
                jogada_jog.innerHTML = `<img src="imagens/tesoura.png" alt="Imagem"></img>`
                jogada_jog.style.paddingTop = '12px';
                const img = jogada_jog.querySelector('img');
                img.style.width = '50px';
            }
    );
}