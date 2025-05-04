const botoes = document.querySelectorAll('.botao') //lista botoes
const listaCores = ['branco', 'roxo', 'azul', 'ciano', 'verde', 'amarelo', 'laranja', 'vermelho', 'preto']
const fundo = document.getElementById('fundo')
var indice = 0 //numero da cor de fundo a ser aplicada, correspondente ao numero do elemento da listaCores

function trocarCor() {
    if (indice > 8) {
        indice = 0
    }

    indice += 1
    
    fundo.classList.remove(listaCores[indice - 1]) //remove cor de fundo antiga
    fundo.classList.add(listaCores[indice]) // adiciona a atual
}

botoes.forEach(botao => {
    botao.addEventListener('click', () => { //quando clicar no botao:
        trocarCor()
    })
})