/* Dado que a fórmula para conversão de Fahrenheit para Celsius é C = 5/9 (F – 32), ler um
vaLor de temperatura em Fahrenheit e exibi-lo em Celsius */

alert(`Este programa converte temperatura em Faherenheit para temperaturas em graus Celsius.
Por favor digitar temperaturas válidas!`)

const temperaturaFahrenheit = Number(prompt('Digite a temperatura em  graus Fahrenheit: '))
let celsius = [5/9 * (temperaturaFahrenheit - 32)]

alert(`Sua temperatura ${temperaturaFahrenheit}F equivale a ${celsius}°C`)