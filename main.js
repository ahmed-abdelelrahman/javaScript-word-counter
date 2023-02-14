const input = document.querySelector('.input'),
    output=document.querySelector('.counter')
let i = 0
input.addEventListener('keypress',()=>{
    i +=1
    output.innerHTML = i
})
