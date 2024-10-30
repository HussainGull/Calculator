let display = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');

let buttonArray = Array.from(buttons);

let string = '';
buttonArray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const buttonValue = e.target.innerHTML;

        if (buttonValue === 'DEL') {
            string = string.substring(0, string.length - 1);
            display.value = string;
        } else if (buttonValue === 'AC') {
            string = '';
            display.value = string;
        } else if (buttonValue === '=') {
            string = eval(string);
            display.value = string;

        } else {
            string += buttonValue;
            display.value = string;
        }

    });
})
;
