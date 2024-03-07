let valor = parseFloat(prompt("Digite o valor em metros: "));
let alternativa =parseInt(prompt("Escolha a unidade para ser convertida: " +
"\n1 - milímetros (mm)" +
"\n2 - centímetros (cm)" +
"\n3 - decímetros (dm)" +
"\n4 - decâmetros (dam)" +
"\n5 - hectômetro (hm)" +
"\n6 - quilômetro (km)"
));
let novoValor = 0;

switch(alternativa){
    case 1:
        novoValor = valor*1000
        alert("Resultado: " + novoValor )
        break
    case 2:
        novoValor = valor*100
        alert("Resultado: " + novoValor )
        break
    case 3:
        novoValor = valor*10
        alert("Resultado: " + novoValor)
        break
    case 4:
        novoValor = valor/10
        alert("Resultado: " + novoValor)
        break
    case 5:
        novoValor = valor/100
        alert("Resultado: " + novoValor)
        break
    case 6:
        novoValor = valor/1000
        alert("Resultado: " + novoValor)
        break
    default: 
        alert("Alternativa Inválida!")
        break

}