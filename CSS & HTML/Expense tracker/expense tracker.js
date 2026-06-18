const input = document.querySelector('.input')
const amountInput = document.querySelector('.amountInput')
const expense = document.querySelector('.expense')
const id = document.querySelector('.id')
const amount = document.querySelector('.amount')
const action = document.querySelector('.action')
let total = 0
  
function addItem() {
    if (input.value.trim() === '') return
    if (isNaN(amountInput.value) || amountInput.value.trim() === '') {
        amountInput.style.backgroundColor = 'rgb(255, 0, 0, 0.6)'
        amountInput.style.color = 'white'
        amountInput.value = 'you can only enter numbers!'
        return
    }
    else {
        amountInput.style.backgroundColor = ''
        amountInput.style.color = ''
        amountInput.value = amountInput.value
    }
    let item = document.createElement('p')
    item.className = 'expense'
    item.textContent = input.value
    expense.appendChild(item)
    input.value = ''
    let number = document.createElement('p')
    number.className = 'id'
    number.textContent = expense.children.length - 1
    id.appendChild(number)
    let price = document.createElement('p')
    price.className = 'amount'
    price.textContent = `${amountInput.value}$`
    amount.appendChild(price)
    let deleteBin = document.createElement('span')
    deleteBin.className = 'action'
    deleteBin.textContent = 'delete'
    action.appendChild(deleteBin)
    let sum = Number(amountInput.value)
    total += sum
    document.querySelector('.total').textContent = total
    amountInput.value = ''
    function updateIds() {
    const ids = id.querySelectorAll("p");
    ids.forEach((element, index) => {
        element.textContent = index + 1;
    });
}
    deleteBin.onclick = function(){
        if(!confirm('are you sure you want to delete?'))
        {
            return
        }
        item.remove()
        number.remove()
        price.remove()
        deleteBin.remove()
        total -= sum
        document.querySelector('.total').textContent = total
        updateIds()
        if(expense.children.length < 8)
    {
        input.disabled = false
        amountInput.disabled = false
    }
    }
    if(expense.children.length === 8) {
        input.disabled = true
        amountInput.disabled = true
    }
}