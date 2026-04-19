/* let num = []

num.push(5,2,4,3,7)
num.sort((a, b) => a - b)

console.log(num)
console.log(num.length)

let pos = num.indexOf(8)

if (pos == -1) {
    console.log(`Não encontrado!`)
} else {
    console.log(`Está na posição ${pos}`)
} */

let num = [5, 2, 4, 3, 7]

num.sort((a, b) => a - b)

let menor = num[0]
let maior = num[num.length - 1]

let soma = 0

for (let pos in num) {
    soma += num[pos]
}

console.log(`Vetor: ${num}`)
console.log(`Menor: ${menor}`)
console.log(`Maior: ${maior}`)
console.log(`Soma: ${soma}`)