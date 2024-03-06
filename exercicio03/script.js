//precisa pegar os 2 nomes e 2 valores das velocidades e usar a estrutura de condição para analisar qual o maior.

const nome01 = prompt("Digite o nome do primeiro carro: ");
const valor01 = pardeFloat(prompt("Digite a velocidade do primeiro carro:"));
const nome02 = prompt("Digite o nome do segundo carro: ");
const valor02 = parseFloat(prompt("Digite a velocidade do segundo carro:"));

    if (valor01>valor02){
        alert("O carro " +nome01+ " é mais veloz")
    } else if (valor02>valor01){
        alert("O carro "+nome02+ " é mais veloz")
    }else{
        alert("Os carros tem a mesma velocidade")
    }