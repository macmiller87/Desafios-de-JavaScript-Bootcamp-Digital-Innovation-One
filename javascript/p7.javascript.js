/*
Desafio
Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido e a relação de notas necessárias.

Entrada
Você receberá um valor inteiro N (0 < N < 1000000).

Saída
Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o exemplo de saída abaixo. Após cada linha deve ser imprimido o fim de linha, caso contrário será apresentada a seguinte mensagem: “Presentation Error”. */

let valor = parseInt(gets());

let notasCem = parseInt(valor /100);
let notasCinq = parseInt((valor %100)/50);
let notasVinte = parseInt(((valor %100)%50)/20);
let notasDez = parseInt((((valor %100)%50)%20)/10);
let notasCinco = parseInt(((((valor %100)%50)%20)%10)/5);
let notasDois = parseInt((((((valor %100)%50)%20)%10)%5)/2);
let notasUm = parseInt(((((((valor %100)%50)%20)%10)%5)%2)/1);

console.log(valor)
console.log(`${notasCem} nota(s) de R$ 100,00`)
console.log(`${notasCinq} nota(s) de R$ 50,00`)
console.log(`${notasVinte} nota(s) de R$ 20,00`)
console.log(`${notasDez} nota(s) de R$ 10,00`)
console.log(`${notasCinco} nota(s) de R$ 5,00`)
console.log(`${notasDois} nota(s) de R$ 2,00`)
console.log(`${notasUm} nota(s) de R$ 1,00`)