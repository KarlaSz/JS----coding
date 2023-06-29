// const input1 = document.querySelector('#number1');
// const input2 = document.querySelector('#number2');

// const addButton = document.querySelector('#add');
// const subButton = document.querySelector('#sub');
// const mulButton = document.querySelector('#mul');
// const divButton = document.querySelector('#div');

// const showResult = number => {
//     document.querySelector('#result').innerHTML = number
// }

// let result;



// addButton.addEventListener('click', () => {
//     result = Number(number1.value) + Number(number2.value)
//     showResult(result)
// })
// subButton.addEventListener('click', () => {
//     result = Number(number1.value) - Number(number2.value)
//     showResult(result)
// })
// muldButton.addEventListener('click', () => {
//     result = Number(number1.value) * Number(number2.value)
//     showResult(result)
// })
// divButton.addEventListener('click', () => {
//     if (number2.value == 0) {
//         document.querySelector('#error').innerHTML = 'Nie można dzielić przez 0'
//     }else {
//         result = Number(number1.value) / Number(number2.value)
//     showResult(result)
//     }
// })

// const sayHello = age => {
//     const p = document.querySelector('p')
//     p.innerHTML = `twój wiek jest ok ${age}`
//     }
    
//     const input = document.querySelector('input')
//     const button = document.querySelector('button')
    
//     input.addEventListener('keyup', function(event) {
//         sayHello(event.target.value)
//     })


// const button = querySelector('button')
// const input = document.querySelector('input')

// button.addEventListener('click', () => {
//     const age = input.value
// })

//---->PETLE - for, i od iteracji powtorzen, nie moze byc const
//bo zmienna zmienia sie i zwieksza

// for (let i = 0; i <= 10; i++ ) {
//     console.log(i)
// }

// let i = 1;
// while (i < 10) {
//     console.log(i);
//      i++
// }

//----> zadanie z for

// const el = document.querySelector('#list');

// let text = '<ul>';
// for (let i = 1; i <= 3; i++) {
//     text = text + `<li> Element nr ${i}</li>`
// }

// text = text + '</ul>';
// el.innerHTML = text;


//----> zadanie while

// const el = document.querySelector('#list');

// let text = '<ul>';
// let i = 10;
// while (i >= 6) {
//     text = text + `<li> Element nr ${i}</li>`
//     i = i - 2
// }

// text = text + '</ul>';
// el.innerHTML = text;

//----> zadanie funkcja generate

// function generateList(count, selectorID) {
//     const el = document.querySelector('#' + selectorID);

//     let text = '<ul>';
//     for (let i = 1; i <= count; i++) {
//         text = text + `<li> Element nr ${i}</li>`
//     }

//     text = text + '</ul>';
//     el.innerHTML = text
// };

// generateList(4, "list");

//----> obiekt - grupuje wartosci w calosc, funkcje tez mozna 
//przypisac do pola obiektu

// const person = {
//     firstName: "karoszla",
//     age: "24",
// }

// const person1 = {
//     name: "karo",
//     age: "19",
//     colorEye: "blue",
//     showHello: () => console.log('Hello')
// }

// const person2 = {
//     name: "karosz",
//     age: "22",
//     colorEye: "bluex",
//     person: person,
//     showHello: () => console.log('Hello')
// }

// console.log(person2.person.firstName);

// console.log(person1);
// person1.showHello();

// const shoWPersonDetails = person => {
//     console.log(`Imie: ${person.firstName}`)
//     console.log(`Wiek: ${person.age}`)
// }

// shoWPersonDetails(person2);

//----> stylizowanie forma i validacja

// const button = document.querySelector('#send-button');
// const emailInput = document.querySelector('#email');
// const validation = document.querySelector('#validation');
// const form = document.querySelector('#form');
// const success = document.querySelector('#success');
// let email = '';

// emailInput.addEventListener('keyup', event => {
//    email = event.target.value;
//    console.log(email);

//     if (email.includes('@')) {
//         button.disabled = false;
//         validation.innerHTML = 'Email jest poprawny'
//         validation.classList.add('green')
//         validation.classList.remove('red')
//     } else {
//         button.disabled = true;
//         validation.innerHTML = 'Email jest niepoprawny'
//         validation.classList.add('red')
//         validation.classList.remove('green')
//     }
// });

// button.addEventListener('click', () => {
//     form.classList.add('hidden');
//     success.classList.remove('hidden');
// });


//zadanie zrobic liste TODO


const input = document.querySelector('#list-product');
const button =  document.querySelector('#add-button');
const list =  document.querySelector('#list');

let text = ''

input.addEventListener('keyup', event => {
    text = event.target.value

    if (text == '') {
        button.disabled = true
    }else {
        button.disabled = false
    }
})

button.addEventListener('click', () => {
    const newTask = `<li>${text}</li>`
    list.innerHTML = list.innerHTML + newTask
    input.value = ''
})

list.addEventListener('click', event => {
    const element = event.target
    
    
    if (element.classList.contains('done')) {
        element.classList.remove('done')
    }else {
        element.classList.add('done')
    }
})