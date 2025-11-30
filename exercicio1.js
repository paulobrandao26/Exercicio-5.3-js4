/*Leia quatro valores (n1, n2, n3, n4). A seguir, calcule e mostre a
 diferença do produto entre o n1 e n2 pelo produto entre o n3 e o n4. Veja os exemplos abaixo:

const leia = require("readline-sync")

let n1,n2,n3,n4 ;

console.log("digite o primeiro numero:");
n1 = leia.questionInt()

console.log("digite o primeiro numero:");
n2 = leia.questionInt()

console.log("digite o primeiro numero:");
n3 = leia.questionInt()

console.log("digite o primeiro numero:");
n4 = leia.questionInt()

console.log("o resultado da diferença entre (n1*n2)")*/

const notas = require("readline-sync")
let salarioBruto = notas.questionInt("Qual o seu salario bruto:");
let AdNoturno = notas.questionInt("Qual o seu Adicional Noturno:");
let HorasExtras = notas.questionInt("Qual suas Horas Extras:");
let Descontos = notas.questionInt("Qual seus Descontos:");
console.log("O salario liquido é:", salarioBruto + AdNoturno + (HorasExtras * 5) - Descontos)