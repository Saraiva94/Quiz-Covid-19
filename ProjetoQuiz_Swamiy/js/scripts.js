let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "...",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "Alternativa A",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Alcool em gel ajuda a previnir a incidência de contaminação?",
    alternativaA : "Sim",
    alternativaB : "Não",
    alternativaC : "Somente alcool 70",
    correta      : "Sim",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual país se originou a Covid-19",
    alternativaA : "Itália",
    alternativaB : "Estados Unidos",
    alternativaC : "China",
    correta      : "China",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "O virús da Covid-19 é transmitido principalmente de que forma?",
    alternativaA : "Agua",
    alternativaB : "Ar",
    alternativaC : "Contato físico",
    correta      : "Ar",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "O vírus da covid tem resistência de quanto tempo no ar?",
    alternativaA : "Algumas horas",
    alternativaB : "Alguns dias",
    alternativaC : "Alguns minutos",
    correta      : "Algumas horas",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Qual é o vírus que causa a infecção da Covid-19?",
    alternativaA : "SARS-CoV-2.",
    alternativaB : "SARS-CoV-5.",
    alternativaC : "SARS-CoV-3.",
    correta      : "SARS-CoV-2.",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Quem teve mais mortes por Covid-19 por milhão de habitantes?",
    alternativaA : "Coréia do Norte",
    alternativaB : "Peru",
    alternativaC : "Venezuela",
    correta      : "Peru",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Qual país teve menos aceitação a compra de vacina?",
    alternativaA : "Canadá",
    alternativaB : "Nova Zelândia",
    alternativaC : "Brasil",
    correta      : "Brasil",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "Quem teve mais mortes por Covid-19 em números totais?",
    alternativaA : "Brasil",
    alternativaB : "Estados Unidos",
    alternativaC : "Índia",
    correta      : "Estados Unidos",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "Que país conseguiu ter menos mortes por milhão de habitantes?",
    alternativaA : "Alemanha",
    alternativaB : "Canadá",
    alternativaC : "Nova Zelândia",
    correta      : "Nova Zelândia",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "Quem se faz responsável pela vacinação brasileira?",
    alternativaA : "OMS",
    alternativaB : "FMI",
    alternativaC : "SUS",
    correta      : "SUS",
}



// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 2000)
}