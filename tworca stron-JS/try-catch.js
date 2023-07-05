// jak wylapywac bledy przy async await i w innych asynchronicznych sytuacjach gdzie zwracamy bledy 

// try {

// }catch {

// } finally {

// }

const getUser= () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve({name: 'Jony'})
            reject('some error')
        }, 800)  
    })
}

const someAsynFunc = async () => {
   try {
    const user = await getUser()
    console.log(user)
   } catch(error) {
    console.log(error)
   } finally {
    console.log('end')
   }
}

someAsynFunc()

// getUser()
// .then(user =>console.log(user) )

// try catch wylapuje bledy jak i mozemy je tworzyc i sprawdzac 