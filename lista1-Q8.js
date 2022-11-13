/*Faça um algoritmo que calcule e apresente o valor do volume de uma lata de óleo, dado
seu raio e sua altura*/

alert(`
Este programa calcula o volume de uma lata de óleo de formato cilíndrico.
Por favor digite um valor válido!
Fórmula Volume = area da base * altura
area da base = pi * raio² `)

const pi = 3.14
const raio = Number(prompt('Digite o valor do raio da circunferência da base do cilindro(lata de óleo): '))
const altura = Number(prompt('Digite o valor da altura do cilindro c(lata de óleo): '))

let areadabase = pi * (raio**2)
let volume = areadabase * altura

alert(`Este é o volume da sua lata de óleo:  ${volume}`)
