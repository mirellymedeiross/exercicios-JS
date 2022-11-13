// Dado o tamanho do raio da circunferencia, calcular a area e o perimetro da mesma

alert('Ola, vamos calcular as medidas de um CIRCUNFERENCIA')

const raio = Number(prompt('Digite o raio da circunferencia: '))

let pi = 3.14
let area = pi * (raio**2)
let comprimento = (2*pi) * (raio**2)

alert('O valor da AREA da circunferencia e: ' + area)
alert('O valor do COMPRIMENTO da circunferencia e: ' + comprimento)