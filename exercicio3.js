const notas = require("readline-sync")
let salarioBruto = notas.questionInt("Qual o seu salario bruto:");
let AdNoturno = notas.questionInt("Qual o seu Adicional Noturno:");
let HorasExtras = notas.questionInt("Qual suas Horas Extras:");
let Descontos = notas.questionInt("Qual seus Descontos:");
console.log("O salario liquido é:", salarioBruto + AdNoturno + (HorasExtras * 5) - Descontos)