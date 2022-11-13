// Dado o tamanho da base e da altura de um retângulo calcular sua area o seu perímetro

alert("Ola! Calcule a ÁREA e PERÍMETRO do retângulo!")

const base = Number(prompt('Digite o valor da base: '))
const altura = Number(prompt('Digite o valor da altura: '))
let area = base * altura
let perimetro = (altura * 2) + (base * 2)
alert("Valor da Área do rentângulo é: " + area)
alert("Valor do Perímetro do rentângulo é: " + perimetro)