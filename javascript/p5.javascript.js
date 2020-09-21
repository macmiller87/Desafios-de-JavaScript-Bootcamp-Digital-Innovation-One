/*
Desafios
Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.

Entrada
Você receberá 1 valor inteiro N, onde N > 0.

Saída
Exiba todos os números pares até o valor de entrada, sendo um em cada linha. */

let n1 = parseInt(gets());

for(var i = 2; i <= n1; i += 2) {
  console.log(i);
}