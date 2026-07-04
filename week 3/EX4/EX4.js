let container = document.querySelector('.container')

async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json()

        users.forEach(user => {
            const card = document.createElement("div")
            card.classList.add("card")

            card.innerHTML = `<h2>${user.name}</h2>
                <p><strong>Email:</strong>${user.email}</p>
                <p><strong>Phone:</strong>${user.phone}</p>
                <p><strong>Street:</strong>${user.address.street}</p>`
                
            

            container.appendChild(card)
        })

    } catch (error) {
        console.log(error)
    }
}

getUsers()