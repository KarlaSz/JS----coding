 const personA = {
    name: 'Jon',
    address: {
        city: 'Winterfell',
    },
    hobbies: [
        {title: 'horse riding'},
        {title: 'sword fight'}
    ],
    fight: () => 'I will fight you!'
 }

 const personB = {
    name: 'Sansa',
    hobbies: []
 }

 /////// tradycyjnie ////

//  personA.address.city 
// const city = personA.address && personA.address.city
// city
const hobby = personA.hobbies[0].title
hobby
// personB.address.city

const fight = personA.fight()
fight 


 ///// optional chaining //////

//  const city2 = personA.address?.city?.hobbies.title.[0]
//  city2

// const hobby2 = personA.hobbies[0]?.title

const hobby2 = personB.hobbies[0]?.title
hobby2


const fight2 = personB.fight?.()  //po znaku sprawdzamy czy istnieje funkcja
fight2 