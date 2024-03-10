let celsius = document.getElementById('resC').value
let fahrecheit = document.getElementById('resF').value
let res = document.getElementById('res')

window.addEventListener('load' , (e) => {
    res.innerHTML = `(${celsius}  ºC x 9/5) + 32 = ${calcFahrenheit().toFixed(1)} ºF`
})

const calcCelsius = () => {
    let resultado = (fahrecheit - 32) / 1.8
    return resultado
}

const calcFahrenheit = () =>{
    let resultado = (celsius * 1.8) + 32
    return resultado
}

document.getElementById('resC').addEventListener('change', (e) => {
    celsius = e.target.value
    document.getElementById('resF').value = calcFahrenheit()
    res.innerHTML = `(${celsius}  ºC x 9/5) + 32 = ${calcFahrenheit().toFixed(1)} ºF`
})

document.getElementById('resF').addEventListener('change', (e) => {
    fahrecheit = e.target.value
    document.getElementById('resC').value = calcCelsius()
    res.innerHTML = `(${calcCelsius().toFixed(2)}  ºC x 9/5) + 32 = ${fahrecheit} ºF`
})


