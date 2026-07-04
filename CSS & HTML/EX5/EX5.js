let btn = document.getElementById('btn')
let sidebar = document.querySelector('.sidebar')
let exit = document.querySelector('.exit')
let overlay = document.querySelector('.overlay')
let list1_h5 = document.querySelector('.list1_h5')
let list1_p = document.querySelector('.list1_p')
let list2_h5 = document.querySelector('.list2_h5')
let list2_p = document.querySelector('.list2_p')
let list3_h5 = document.querySelector('.list3_h5')
let list3_p = document.querySelector('.list3_p')
let list4_h5 = document.querySelector('.list4_h5')
let list4_p = document.querySelector('.list4_p')
btn.onclick = function () {
    sidebar.classList.toggle('active')
    overlay.classList.toggle('active')
}
exit.onclick = function () {
    sidebar.classList.remove('active')
    overlay.classList.remove('active')
}
overlay.onclick = function () {
    sidebar.classList.remove('active')
    overlay.classList.remove('active')
}
list1_h5.onclick = function () {
    list1_p.classList.toggle('active')
    list1_h5.classList.toggle('active')
    list2_p.classList.remove('active')
    list2_h5.classList.remove('active')
    list3_p.classList.remove('active')
    list3_h5.classList.remove('active')
     list4_p.classList.remove('active')
    list4_h5.classList.remove('active')
}
list2_h5.onclick = function () {
    list1_p.classList.remove('active')
    list1_h5.classList.remove('active')
    list2_p.classList.toggle('active')
    list2_h5.classList.toggle('active')
    list3_p.classList.remove('active')
    list3_h5.classList.remove('active')
    list4_p.classList.remove('active')
    list4_h5.classList.remove('active')
}
list3_h5.onclick = function () {
    list1_p.classList.remove('active')
    list1_h5.classList.remove('active')
    list2_p.classList.remove('active')
    list2_h5.classList.remove('active')
    list3_p.classList.toggle('active')
    list3_h5.classList.toggle('active')
    list4_p.classList.remove('active')
    list4_h5.classList.remove('active')
}
list4_h5.onclick = function () {
    list1_p.classList.remove('active')
    list1_h5.classList.remove('active')
    list2_p.classList.remove('active')
    list2_h5.classList.remove('active')
    list3_p.classList.remove('active')
    list3_h5.classList.remove('active')
    list4_p.classList.toggle('active')
    list4_h5.classList.toggle('active')
}