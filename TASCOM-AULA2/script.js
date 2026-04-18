const tela = document.querySelector('.tela');
const botoes = document.querySelectorAll('.botao');


let valorA = '';
let valorB = '';
let operacaoAtual = '';
let esperandoSegundoValor = false;


const mapaOperacoes = {
    '+': 'soma',
    '-': 'subtracao',
    '×': 'multiplicacao',
    '÷': 'divisao'
};

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const textoBotao = botao.innerText;


        if (textoBotao === 'AC') {
            valorA = '';
            valorB = '';
            operacaoAtual = '';
            esperandoSegundoValor = false;
            tela.innerText = '0';
            return;
        }

        if (['+', '-', '×', '÷'].includes(textoBotao)) {
            operacaoAtual = mapaOperacoes[textoBotao]; 
            valorA = tela.innerText; 
            esperandoSegundoValor = true;
            return;
        }

        if (textoBotao === '=') {
            valorB = tela.innerText; 
            calcularNaApi(valorA, valorB, operacaoAtual);
            return;
        }
        if (esperandoSegundoValor) {
            tela.innerText = textoBotao;
            esperandoSegundoValor = false;
        } else {
            tela.innerText = tela.innerText === '0' ? textoBotao : tela.innerText + textoBotao;
        }
    });
});

async function calcularNaApi(a, b, operacao) {
    tela.innerText = "...";

    try {
        const resposta = await fetch(`http://localhost:5000/${operacao}?a=${a}&b=${b}`);
        const dados = await resposta.json();

        if (dados.erro) {
            tela.innerText = "Erro";
            console.error(dados.erro);
        } else {
           
            tela.innerText = dados.resultado;
        }

    } catch (erro) {
        tela.innerText = "Erro Servidor";
        console.error("Verifique se o servidor Node.js está rodando!", erro);
    }
}