const keypadDiv = document.getElementsByClassName('interaction')[0];
const inputArea = document.getElementsByTagName('input')[0];

inputArea.value = "0";

keypadDiv.addEventListener('click', (event) => {
    const lastChar = inputArea.value.charAt(inputArea.value.length - 1);
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
                inputArea.value = '+';
            }
            else if (lastChar === '*' || lastChar === '-' || lastChar === '/' || lastChar === '+')    {
                let newStr = inputArea.value.slice(0, -1);
                inputArea.value = newStr + '+';
            }
            else {
                inputArea.value += '+';
            }
            break;
        case 'minus':
            if (inputArea.value === '0'){
                inputArea.value = '-';
            }
            else if (lastChar === '*' || lastChar === '-' || lastChar === '/' || lastChar === '+')    {
                let newStr = inputArea.value.slice(0, -1);
                inputArea.value = newStr + '-';
            }
            else {
                inputArea.value += '-';
            }
            break;
        case 'multiply':
            if (inputArea.value === '0'){
                inputArea.value = '*';
            }
            else if (lastChar === '*' || lastChar === '-' || lastChar === '/' || lastChar === '+')    {
                let newStr = inputArea.value.slice(0, -1);
                inputArea.value = newStr + '*';
            }
            else {
                inputArea.value += '*';
            }
            break;
        case 'divide':
            if (inputArea.value === '0'){
                inputArea.value = '/';
            }
            else if (lastChar === '*' || lastChar === '-' || lastChar === '/' || lastChar === '+')    {
                let newStr = inputArea.value.slice(0, -1);
                inputArea.value = newStr + '/';
            }
            else {
                inputArea.value += '/';
            }
            break;
        case "dot":
             inputArea.value += '.';
            break;
        
        case 'equals':
            const totalString = inputArea.value;
            inputArea.value = eval(totalString);

        default:
            if (+(event.target.value) >= 0 && +(event.target.value) <= 9)   {
                if (inputArea.value === '0')    {
                    inputArea.value = '';
                }
            inputArea.value += event.target.value;
    }
    }
})