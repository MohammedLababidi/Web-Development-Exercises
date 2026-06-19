// 1- Convert Callback Code to Promises
function getUser(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('1. got user')
            resolve({ id: userId, name: 'John' })
        }, 1000);
    })
}
function getOrders(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('2. Got orders for', user.name)
            resolve(['Order1', 'Order2'])
        }, 1000);
    })
}
function getOrdersDetails(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('3. Got details for', order)
            resolve({ order: order, total: 100 })
        }, 1000);
    })
}
function processPayment(details) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('4. Payment processed for', details.order)
            resolve({ success: true, amount: details.total })
        }, 1000);
    })
}
getUser(1).then((user) => getOrders(user)).then((orders) => getOrdersDetails(orders[0])).then((details) => processPayment(details))
    .then((result) => console.log('Final result:', result)).then(() => console.log('Done!')) 



// 2- Convert this code to Fetch API, and also provide an Async/Await version.
async function getUserFetch(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const user = await response.json()
        console.log(user)
    }
    catch(error)
    {
        console.log(error)
    }
}
getUserFetch(1)



// 3- Create a Fetch API POST request to the endpoint 'https://jsonplaceholder.typicode.com/posts'. The function should accept an object as an argument containing the data to be posted. Validate the input data before sending. Display the response message 'Created new post' upon success.
async function createPostFetch(newPost) {
    if (!newPost || typeof newPost !== 'object' || !newPost.title || !newPost.body || !newPost.userId) {
        console.log('invalid input data')
        return
    }
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',
            {
                method: 'POST',
                header: { 'content type': 'application/json' },
                body: JSON.stringify(newPost)
            })
        if (response.status === 201) {
            const post = await response.json()
            console.log('created new post')
            console.log(post)
        }
        else {
            console.log('error:', response.status)
        }
    }
    catch (error) {
        console.log(error)
    }
}
createPostFetch({
    title: 'my post',
    body: 'this is the content',
    userId: 1
})



// 5- Give an example of Promise.all that returns data. Don't forget to use .catch() and .finally() .
// output:
// • First promise: success
// • Second promise: success after 5 seconds
// • Third promise: success
const promise1 = Promise.resolve('success')
const promise2 = new Promise(resolve => setTimeout(() => resolve('success after 5 seconds'),5000 ))
const promise3 = Promise.resolve('success')
Promise.all([promise1 , promise2 , promise3]).then(resulte => {console.log(resulte)}).catch(error => {console.log(error)}).finally(() => console.log('all done'))