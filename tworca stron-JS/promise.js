//Promise - cos co pomaga z asynchornicznymi rzeczami, funkcjami itd. 


// system rejestracji uzytkownika 

//1. wyslanie danych
//2. walidacja
//3. rejestracja usera 
//4. wysylanie maila 

const getUserData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('1. get user data')
            resolve({name: 'Jony'})
        }, 800)  
    })
}

const validateData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('2. validate')
            // resolve()
            reject('validation error')
        }, 900)
    })
}

const registerUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('3. register')
            resolve()
        }, 400)
    })
}

const sendEmail = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('4. send email')
            resolve()
        }, 200)
    })
}

getUserData()
    .then(res => {
        console.log(res)
        return validateData(res)
        } )
    .then(registerUser)
    .then(sendEmail)
    .then(() => {
        console.log('end')
    })
    .catch(err => {
        console.log('Error:', err)
    })


//taka choinka to callback hell bo zle sie to czyta i sie unika tego
// i uzywa Promise

// getUserData(() => {
//     validateData(() => {
//         registerUser(() => {
//             sendEmail(() => {
//                 console.log('end!')
//             })
//         })
//     })
// })

// registerUser()
// sendEmail()

// Promise() - obietnica ze cos sie wykona po czym, podobnie jak callback
// i obsluguje niewugodne zapytania asynchroniczne 
//jego funkcja ma 2 parametry - resolve (gdy wszystko ok) i reject (gdy cos do odrzucenia)

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('working..')
//         resolve()
//     }, 800)
// })