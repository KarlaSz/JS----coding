//---->this - jest automatyczne przypisane do czegos lub cos do niego, takie odwolanie

//JS - oparty na scheme - jezyk funkcyjny oraz Java  gdzie this jest uzywane 

// metoda jest w obekcie/klasie - this zawiera obiekt - obiekt z kontekstu  z lewej strony
// this zawsze bedzie przypisana do obiektu globalnego 
// w zwyklej funkcji - obiekt globalny (window)
//funkcja strzalkowa nie tworzy kontekstu, tak jakby jej nie bylo
//to co jest po lewej przed kropka to do tego odnosi sie this do kontekstu

const person = {
    name: 'Karo',
    showName: function () {
        console.log(this.name)
    },
    address: {
        city: 'Warsaw',
        street: 'Zlota',
        showAddress: function () {
            console.log(`${this.city}, ${this.street}`)
        }
    }
}

const dog = {
    name: 'spike',
    showName: person.showName
}

person.showName();
person.address.showAddress();
dog.showName();


const cat = function () {
    this.name = 'Dzidka'
}
cat.prototype.showThisCat = function() {
    console.log(this)
}

const Cat = new cat()
Cat.showThisCat()

// bind()
// call()
// apply()

const human = {
    name: "karla",
    sayName: function() {
        console.log(`Moje imie to ${this.name}`)
    },
    sayFullName: function(surname) {
        console.log(`Nazywam sie ${this.name} ${surname}`)
        console.log(`Nazywam sie ${this.name} ${this.surname}`)
    }
}


// funkcja call - polacz od razu z, zmienia kontekts 
//call(this)

// const personA = {
//     name: 'Artur'
// }

// const personB = {
//     name: 'tom'
// }

const people = [
    {
        name: 'Artur',
        surname: 'King'
    },
    {
        name: 'tom',
        age: 40
    }
]

human.sayName()
// human.sayName.call(personA) // uzyj funkcji ze zmiennem human, ale jakos kontekst wez obiekt personA
// human.sayName.call(personB) 

people.forEach(p => {
    human.sayName.call(p)
})

//apply(this, [parametr1,parametr2]) - funkcja zastosuje 

people.forEach(p => {
    human.sayFullName.apply(p, ['szymaszkiewicz'])
})

// human.sayFullName('szymaszkiewicz');

// aplly od call rozni sie tym ze mozna dodac do aplly rozne paramenty 

// const result = bind(this, parametr1, parametr2) - robi to samo co aplly tylko nie podaje w tablicy,a jako kolejne parametry i funkcja nie wykona sie od razu
//result()

people.forEach(p => {
   human.sayFullName.bind(p, 'default')()
})