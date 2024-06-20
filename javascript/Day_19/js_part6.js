// Qs1. Write a JavaScript function that returns array elements larger than a number.

let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;

function getElements(arr, num){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > num){
            console.log(arr[i]);
        }
    }
}

getElements(arr, num);

// Qs2. Write a JavaScript function to extract unique characters from a string.Example: str = “abcdabcdefgggh” ans = “abcdefgh”


let str = "abcdabcdefgggh";

function getUniqueString(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                str = str.slice(0, j) + str.slice(j + 1);
                j--; 
            }
        }
    }
    return str;
}

let uniqueStr = getUniqueString(str);
console.log(uniqueStr); 

