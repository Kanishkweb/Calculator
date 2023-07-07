let input = document.querySelector('.input');
let string = '';
let buttons = document.querySelectorAll('.item');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target.innerHTML);
        const pop = e.target.innerHTML;

        if (pop == 'C') {
            string = '';
            console.log(string);
        } else if (pop == '=') {
            string = eval(string);
            console.log(string);
            input.value = string; // Update input value with the result
        } else {
            string = string + pop;
            console.log(string);
            input.value = string; // Update input value with the current string
        }
    });
});
