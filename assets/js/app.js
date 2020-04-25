const keypadDiv = document.getElementsByClassName('interaction')[0];
const inputArea = document.getElementsByTagName('input')[0];

inputArea.value = "0";

keypadDiv.addEventListener('click', (event) => {
    switch (event.target.value) {
        case 'reset':
            inputArea.value = "0";
            break;
        case 'back':
            let newStr = inputArea.value.slice(0, -1);
            inputArea.value = newStr;
            if (inputArea.value === '') {
                inputArea.value = 0;
            }
            break;
        case 'plus':
            if (inputArea.value === '0'){
                inputArea.value = '';
            }
            if (inputArea.value.charAt(inputArea.length -1) != '+') {
                inputArea.value += '+';
            }
            break;
        case 'minus':
            if (inputArea.value === '0'){
                inputArea.value = '';
            }
            if (inputArea.value.charAt(inputArea.length -1) != '-') {
                inputArea.value += '-';
            }
            break;
        case 'multiply':
            if (inputArea.value === '0'){
                inputArea.value = '';
            }
            if (inputArea.value.charAt(inputArea.length -1) != '*') {
                inputArea.value += '*';
            }
            break;
        case 'divide':
            if (inputArea.value === '0'){
                inputArea.value = '';
            }
            if (inputArea.value.charAt(inputArea.length -1) != '/') {
                inputArea.value += '/';
            } 
            break;              
    }
})