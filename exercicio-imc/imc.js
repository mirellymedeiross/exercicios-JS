
alert(`Este programa calcula seu Indíce de Massa Corporal
        Forneça os dados necessário!`)


let peso = parseInt(prompt('Digite seu peso: '))
let altura = parseFloat(prompt('Digite sua altura: '))

let imc = peso/(altura ** 2)

while(peso > 0 && altura > 0){


    if(imc < 18.5){
        
    alert('Você está abaixo do peso!')

    }else if(imc > 18.5 && imc <= 25 ){
       
        alert('Peso normal!')

    }else if(imc > 25 && imc <= 30 ){

        alert('Você está acima do peso!')

    }else{
        
        
        alert('Você está obeso!')
    }
}
alert("Digite um peso válido!")

