const keys = document.querySelectorAll('.key');
const displayIn = document.querySelector('.input');
const displayOut = document.querySelector('.output');
let input = "";

for(const key of keys) { 
    const value = key.dataset.key;
    
    key.addEventListener('click', () => {
        switch(value) {
            case 'clear':
                input = "";
                displayIn.innerHTML = "";
                displayOut.innerHTML = "";
                break;

            case 'del':
                input = input.slice(0, -1);
                displayIn.innerHTML = input;
                break;

            case '00':
                input += '00';
                displayIn.innerHTML = input;
                break;

            case '=':
                let result = eval(convertInPercent(input));
                displayOut.innerHTML = result;
                break;

            default:
                input += value;
                displayIn.innerHTML = input;   
        }
    });
}
// modulus convert in porcentage fuction
const convertInPercent = () => {
    let arr = input.split("");

    for( let i = 0; i < arr.length; i++)
        if (arr[i] == "%") {
            arr [i] = "/100";
        }

        return arr.join("");
}