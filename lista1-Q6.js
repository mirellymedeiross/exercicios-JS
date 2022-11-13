//Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.

alert(`O programa a seguir realiza a divisão de dois números inteiros.
E devolve o QUOCIENTE e o RESTO. 
Por favor digite apenas valores inteiros!`)
const dividendo = Number(prompt('Digite o dividendo da sua divisão: '))
const divisor = Number(prompt('Digite o dividendo da sua divisão: '))

let quociente = dividendo/divisor
let resto = dividendo%divisor

alert(`Esse é o QUOCIENTE da divisão: ${quociente}   
Esse é o RESTO da divisão: ${resto}`)





