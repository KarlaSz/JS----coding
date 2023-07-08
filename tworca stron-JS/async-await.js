// async / await - lepsze promise, syntetic sugar

const getUserData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('1. get user data')
            resolve()
        }, 600)  
    })
}

const validateData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('2. validate')
            resolve()
        }, 400)
    })
}

const registerUser = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('3. register')
            resolve()
        }, 500)
    })
}

const sendEmail = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('4. send email')
            resolve()
        }, 200)
    })
}

// getUserData()
//     .then(registerUser)
//     .then(sendEmail)
//     .then(() => {
//         console.log('end')
//     })


async function someAsyncFunction() {
    await getUserData()
    await validateData()
    await registerUser()
    await sendEmail()
    console.log('end')
}

someAsyncFunction()

console.log('display page')
console.log('render value')

//await dziala tylko w async funkcji, dlatego await wrzucam do async funkcji bo ogranicza zasieg tego await. ile to cos masz czekac zeby sie wykonac
//jest to uproszczenie zapisu