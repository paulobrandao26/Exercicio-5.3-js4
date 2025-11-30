const notas = require("readline-sync")
let aluno1 = notas.questionInt("Qual sua nota:");
let aluno2 = notas.questionInt("Qual sua nota:");
let aluno3 = notas.questionInt("Qual sua nota:");
let aluno4 = notas.questionInt("Qual sua nota:");
console.log('A media de todas as notas é:',(aluno1 + aluno2+ aluno3 + aluno4 )/ 4)