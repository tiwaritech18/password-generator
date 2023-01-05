const resultEl = document.getElementById('result-password');
const characteramountrange=document.querySelector("#characteramountrange");
const characteramountnum=document.querySelector("#number");
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

const randomFunc={
    lower:getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSymbol,
};

generateEl.addEventListener('click',() => {
    const length = +characteramountnum.value;
    const hasUpper=uppercaseEl.checked;
    const hasLower=lowercaseEl.checked;
    const hasNumber=numbersEl.checked;
    const hasSymbol=symbolsEl.checked;

    resultEl.innerTextgeneratePassword(hasLower,hasNumber,hasSymbol,hasUpper,length);
})

function generatePassword(lower,upper,number,symbol,length)





characteramountnum.addEventListener('input', syncCharacterAmount)
characteramountrange.addEventListener('input', syncCharacterAmount)

function syncCharacterAmount(e) {
    const value=e.target.value
    characteramountnum.value=value
    characteramountrange.value=value
}








// Generator Functions

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
console.log(getRandomLower());

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65 )
}
function getRandomSymbol(){
    const symbols= '!@#$%^&*'
    return symbols[Math.floor(Math.random() * symbols.length )]
}


function getRandomNumber(){
    return Math.floor(Math.random()* 10 ) + 1
 }
 console.log(getRandomNumber())
 