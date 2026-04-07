function tabuada() {
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')

    tab.innerHTML = ''

    if (num.value.length === 0) {
        let item = document.createElement('option')
        item.text = 'Digite um número acima'
        tab.appendChild(item)
    } else {
        let n = Number(num.value)
        let c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}