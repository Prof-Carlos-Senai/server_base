function soma(){
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let resposta = num1 + num2

    let res = document.getElementById('res')
    res.innerHTML = resposta
    res.style.fontSize = '1.4rem'
    res.style.fontWeight = 'bold'
    res.style.color = 'blue'
}