function carregar() {
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#imagem')
    let hora = new Date().getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora < 12) {
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#E8F0EC'
    } else if (hora < 18) {
        img.src = 'fototarde.jpg'
        document.body.style.background = '#2C1A0B'
    } else {
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#0D1B2A'
    }
}
