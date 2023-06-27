const input1 = document.querySelector('#number1');
const input2 = document.querySelector('#number2');

const addButton = document.querySelector('#add');
const subButton = document.querySelector('#sub');
const mulButton = document.querySelector('#mul');
const divButton = document.querySelector('#div');

const showResult = number => {
    document.querySelector('#result').innerHTML = number
}

let result = '';



addButton.addEventListener('click', () => {
    result = Number(number1.value) + Number(number2.value)
    showResult(result)
})
subButton.addEventListener('click', () => {
    result = Number(number1.value) - Number(number2.value)
    showResult(result)
})
muldButton.addEventListener('click', () => {
    result = Number(number1.value) * Number(number2.value)
    showResult(result)
})
divButton.addEventListener('click', () => {
    result = Number(number1.value) / Number(number2.value)
    showResult(result)
})

// const sayHello = age => {
//     const p = document.querySelector('p')
//     p.innerHTML = `twój wiek jest ok ${age}`
//     }
    
//     const input = document.querySelector('input')
//     const button = document.querySelector('button')
    
//     input.addEventListener('keyup', function(event) {
//         sayHello(event.target.value)
//     })