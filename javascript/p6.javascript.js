/*
Desafio
Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos valores informados são pares, quantos valores informados são ímpares, quantos valores informados são positivos e quantos valores informados são negativos.

Entrada
Você receberá 5 valores inteiros.

Saída
Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e não esquecendo o final de linha após cada uma. */

let n1 = parseInt(gets());
let n2 = parseInt(gets());
let n3 = parseInt(gets());
let n4 = parseInt(gets());
let n5 = parseInt(gets());

let numeros = [n1,n2,n3,n4,n5];
var numPar = 0;
var numImpar = 0;
var numPositivo = 0;
var numNegativo = 0;

for(var i=0;i<numeros.length;i++){
  if(numeros[i]>0) {
    numPositivo++;
  }if(numeros[i]<0){
     numNegativo++;
    }if(numeros[i]%2==0) {
       numPar++;
      } else {
         numImpar++;
       }
  }
console.log(numPar + " valor(es) par(es)")
console.log(numImpar + " valor(es) impar(es)")
console.log(numPositivo + " valor(es) positivo(s)")
console.log(numNegativo + " valor(es) negativo(s)")