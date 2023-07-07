let input = document.querySelector('input')
let bhaiString = ''
let buttons = document.querySelectorAll('.item')
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e.target.innerHTML)
        pop = e.target.innerHTML;
        if(pop == 'C'){
            bhaiString = ''
            console.log(bhaiString)
            input.value = bhaiString
        } else if(pop == '='){
            bhaiString = eval(bhaiString)
            console.log(bhaiString)
            input.value = bhaiString

        } else{
            bhaiString = bhaiString + pop;
            console.log(bhaiString)
            input.value = bhaiString
        }
    })
})