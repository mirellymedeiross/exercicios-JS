/**
 * Crie um programa que pergunte quantos produtos um cliente pegou e depois peça para que ele informe
o preço de cada produto. Ao recuperar possuir o valor de cada produto, faça a soma total da compra e
informe o maior e o menor preço que foi informado (ATIVIDADE DO RENATO)
 */

alert('Este codigo fuciona!')
let produtos = []
let soma = 0
let quantosProdutos = parseInt(prompt('Quantos produtos você pegou? '))

for (let i = 1; i <= quantosProdutos; i++){
    let valor = parseFloat(prompt(`Digite o valor do produto com no máximo
                            Duas casa decimais:  `))
    produtos.push(valor)
}
let resultado = alert(`Este é o array de preços ${produtos}`)

function maiorPreco(produtos){
    let maior = 0
    for (let i = 0; i < quantosProdutos; i++){
        if(maior > produtos[i]){
             maior = maior

        }else{
            maior = produtos[i]
        }

    }
   let resultado = alert(`Este é o valor do produtos mais caro: ${maior}`)
   return resultado 
}

function menorPreco(produtos){
    let menor
    for (let i = 0; i < quantosProdutos; i++){
        if(menor < produtos[i]){
            menor = menor

        }else{
            menor = produtos[i]
        }

    }
    let resultado = alert(`Este é o valor do produtos mais barato: ${menor}`)
   return resultado 
}

//function soma(produtos){
    
    //for (let i = 0; i < quantosProdutos; i++){
        
       // let soma = soma + produtos[i]
    //}
    //let resultado = alert(`Este é a soma total da sua compra:  ${soma}`)
  // return resultado 

console.log(maiorPreco(produtos))
console.log(menorPreco(produtos))
//
/** 
 * Entender pq noa ta imprimindo a soma
 */

 
 for (let i; i < produtos.length; i++) {
   soma += produtos[i];
 }
alert(`O preço final a pagar é de ${soma}`);

console.log(soma)
 