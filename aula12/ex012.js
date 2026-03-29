let agora = new Date()
let hora = agora.getHours()
//let hora = 13
console.log(`Agora são extamente ${hora} horas.`)
if (hora >= 6 && hora < 12) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!')
} else if (hora >= 18){
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada')
}