const add = document.querySelector('.add')
const list = document.querySelector('.list')
const box = document.querySelector('.box')
const input = document.getElementById('taskInput')
const num = document.getElementById('num')
function updateTaskCount() {
    num.textContent = `your tasks (${list.children.length})`
}
function addItem() {
    if (input.value.trim() === '')
    {
 return
    }
    const newItem = document.createElement('div')
    newItem.className = 'box'
    list.appendChild(newItem)
    updateTaskCount()
    const number = document.createElement('span')
    number.textContent = `${list.children.length + ''}-`
    newItem.appendChild(number)
    const text = document.createElement('span')
    text.textContent = input.value
        newItem.appendChild(text)
    const deleteBtn = document.createElement('div')
    deleteBtn.className = 'delete'
    deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                class="bi bi-trash" viewBox="0 0 16 16">
                <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                <path
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
            </svg>`
    newItem.appendChild(deleteBtn)
    input.value = ''
    deleteBtn.onclick = function () {
        newItem.remove()
        deleteBtn.remove()
        updateTaskCount()
         if (list.children.length === 5)
    {
        input.disabled = false
        add.classList.remove('disable')
        input.value = ''
        input.style.backgroundColor = 'white'
        add.style.backgroundColor = 'rgb(4, 177, 4)'
        input.style.color = ''
    }
    }
    deleteBtn.addEventListener('click' , ()=>{
        confirm('are you sure you want to delete?')
    })
    if (list.children.length >= 6)
    {
        input.disabled = true
        add.classList.add('disable')
        input.value = 'Maximum tasks reached!'
        input.style.backgroundColor = 'rgb(255, 0, 0, 0.6)'
        add.style.backgroundColor = 'rgb(4, 177, 4, 0.6)'
        input.style.color = 'white'
    }
}
