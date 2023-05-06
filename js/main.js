//element.innerHTML = "<hr/>O inverno ff está chegando<hr/>"
// ler as tag como TAG html dentro do elemento criando elementos filhos 

//element.innerText = "<hr/>O inverno ff está chegando<hr/>"  
// ler tudo como texto puto sem valor ou criar  novos elementos

// const elemet3 = document.querySelector('div');
// elemet3.innerHTML = "<hr> foi aqui";
// console.log(elemet3)
// objet (chave-valor)
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const elemet = document.getElementsByTagName('title');
elemet[0].innerText = "italo";

document.querySelector('.robotron').addEventListener("click", function(){

});
// precisa de qual o evento e o que o evento vai fazer passando a função
console.log (document.querySelector('.box'))
document.querySelector('.equipamentos').onclick = (evento)=> {
    console.log(evento.target.textContent,evento.target.parentNode)
    console.log("usando funcao anonima")
    //vc pode utilizar quantas  uma funçao callback
}
function dizOi(){
    console.log("oi")
}
// nos dois casos ele nao aceita uma chamada direta da função em evento 
dizOi() // chamar +vezes

const braco = document.getElementById('braco');
const subtrair = document.getElementById('subtrair');
const somar = document.getElementById('somar');

const controle = document.querySelectorAll('[data-ajustes]'); // o select buscado todos os ajustes que sao data
//Data-attributes ->
//console.log(controle)
const estatistica = document.querySelectorAll('[data-estatistica]')
//console.log(estatistica)
controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento)=>{
        //callback é qualquer função que é invocada em resposta a ocorrência de um evento.
        //addEventListener = vc pode utilizar quantas funções quiser que todas elas serão ativadas quando o evento ocorrer
        const limiteAlcancado = calculoDoLimite(evento.target.dataset.ajustes) 
        const parada = manipularDados(evento.target.dataset.ajustes,evento.target.parentNode,limiteAlcancado); // buscar as tag de contrução os (dataset)
        tratarEstatistica(evento.target.dataset.peca,evento.target.dataset.ajustes,parada,limiteAlcancado)

        // desaclopar uma func que n precisa da outra
        // so o dataset manda o array + o valor valor fdo index pra mandar o valor logo = dataset.valor
        //evento.target.textContent -> texto do codigo html 
        //evento.target.parentNode -> usado pra passar o pai da div clickada (do evento em questao)
        //console.log(elemento.innerText)
    })
})

function calculoDoLimite(operador){
    const total   = document.querySelectorAll('[data-contador]')
    let recebeTotal =  0;
    total.forEach((valor)=>{
        recebeTotal =   parseInt(valor.value) + recebeTotal
    })
    if(operador == "-"){
        recebeTotal = recebeTotal -1;
    }else{
        recebeTotal = recebeTotal +1;
    }
    let contaDeToal = 15 - recebeTotal
    if ((recebeTotal < 0  && operador == "-") || (recebeTotal > 15  && operador == "+") ) {
        alert("passou do limite")
        return true
    }
    document.querySelector('[data-pontos]').innerText = `Vc tem  : ${contaDeToal} pontos`;
    return false
}

function manipularDados(operador,controle,limiteAlcancado){// tenta passa sempre as condição no contrutor
    if(limiteAlcancado) return 
    console.log(estatistica)
    const contador   = controle.querySelector('[data-contador]')// na funcao o valor que eu quero alterar
        if(operador == "-"){
            contador.value = parseInt(contador.value) -1 ;
            if(contador.value <= 0){
                contador.value = 0
                return 0
            }
            return 1
        }else{
            contador.value = parseInt(contador.value) +1 ;
            if(contador.value > 15){
                contador.value = 15 
                return 0
            }
            return 1
        }
        
}

function tratarEstatistica(peca,operador,parada,limiteAlcancado){
    if(parada  === 0 || limiteAlcancado == true) return 
     estatistica.forEach((element)=>{
        console.log(element.textContent) //element.textContent -> ver o valor em texto 
            let tipo = element.getAttribute("data-estatistica")
            console.log(tipo)
            console.log(pecas[peca][tipo])
            // peca tem q ser igual a elemt q ta passando 
            // pecas[peca].forEach( (v)=>{
            //      console.log(v)
            // })
            if(operador == "-"){
               // element.innerText = parseInt(element.textContent) - pecas[peca][tipo]
               element.textContent = parseInt(element.textContent) - pecas[peca][tipo]
            }
            if(operador == "+"){
                element.innerText = parseInt(element.textContent) + pecas[peca][tipo]
            }
        //element.innerText = parseInt(element.textContent) + pecas[peca[element.dataset.estatistica]];
    })
   // console.log(peca)
    //console.log(pecas[peca]) // pega a chave-valor do obj e mostra seu objato referente a chave-valor

}








// somar.addEventListener('click', (evento)=>{
//     manipularDados("subtrair")
// })
// subtrair.addEventListener('click', (evento)=>{
//     manipularDados("somar")
// })
//const controle = document.querySelectorAll()
