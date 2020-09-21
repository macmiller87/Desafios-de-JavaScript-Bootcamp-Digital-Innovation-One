/*
Desafio
Crie um programa que leia 6 valores. Você poderá receber valores negativos e/ou positivos como entrada, devendo desconsiderar os valores nulos. Em seguida, apresente a quantidade de valores positivos digitados.

Entrada
Você receberá seis valores, negativos e/ou positivos.

Saída
Exiba uma mensagem dizendo quantos valores positivos foram lidos assim como é exibido abaixo no exemplo de saída. Não esqueça da mensagem "valores positivos" ao final. */

let n1 = parseFloat(gets());
let n2 = parseFloat(gets());
let n3 = parseFloat(gets());
let n4 = parseFloat(gets());
let n5 = parseFloat(gets());
let n6 = parseFloat(gets());

let valores = [n1, n2, n3, n4, n5, n6];
var total = 0;

for(var i = 0; i < valores.length; i ++) {
  if(valores[i] > 0) {
    total++;
  }
}
console.log(total + " valores positivos");