// 9. Palindrome Number

const array = 121 //valor

function palindrome(phrase){
    phrase = String(phrase)
    const arrCopy = phrase.slice();
    let itsPalin = true;

    for(let i = 0; i < phrase.length; i++){
        if (phrase[i] != arrCopy[arrCopy.length -1 - i]){
            itsPalin = false;
        }  
    }
    return itsPalin
}

const meuFunc = palindrome(array)
console.log(meuFunc)