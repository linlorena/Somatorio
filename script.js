var n = prompt("Quantidade de números: ");
     var numero;
     var soma = 0;
     var i = 0;

     while (i<n){
      numero = parseInt(prompt("Digite um número: "));
      soma = soma + numero;
      i = i+1;
}

document.write("O somatório dos números é: " + soma);