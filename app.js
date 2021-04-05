const pwdEle = document.getElementById('pwd');
const lenEle = document.getElementById("len");
const upperEle = document.getElementById("upper");
const lowerEle = document.getElementById("lower");
const numberEle = document.getElementById('number');
const symbolEle = document.getElementById('symbol');
const btn = document.getElementById('btn');
const copyEle = document.getElementById('copy');


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+?/";

function getUppercase(){
    return upperCase[Math.floor(Math.random()*upperCase.length)];
}

function getLowercase(){
    return lowerCase[Math.floor(Math.random()*lowerCase.length)];
}

function getNumber(){
    return numbers[Math.floor(Math.random()*numbers.length)];
}

function getSymbol(){
    return symbols[Math.floor(Math.random()*symbols.length)];
}


btn.addEventListener("click",()=>{
    generatePassword();
})

function generatePassword(){
    let passwordLength = lenEle.value;
    let password = "";

    if(upperEle.checked){
        password+=getUppercase();
    }

    if(lowerCase.checked){
        password+=getLowercase();
    }

    if(numberEle.checked){
        password+=getNumber();
    }

    if(symbolEle.checked){
        password+=getSymbol();
    }
  
    for(let i=password.length;i<passwordLength;i++){
        let x = generateChars();
        password+=x;
    }
    pwdEle.value = password;
}

function generateChars(){
    let chars=[];
    if(upperEle.checked){
        chars.push(getUppercase());
    }
    if(lowerEle.checked){
        chars.push(getLowercase());
    }

    if(numberEle.checked){
        chars.push(getNumber);
    }
    if(symbolEle.checked){
        chars.push(getSymbol());
    }
    if(chars.length===0){
        return ''
    }
    return chars[Math.floor(Math.random()*chars.length)];
}




copyEle.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pwdEle.value;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});