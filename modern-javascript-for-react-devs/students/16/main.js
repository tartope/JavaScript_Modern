//
// File: main.js
// Date: 5/24/2022
// 

const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    // const array = [];
    console.log(countNumbers(array));
}

const ex2 = () => {
    // TODO...
    const array = [12, 55, 2, 22, 11];
    // const array = [1];
    // const array = [100, 0];
    console.log(minNumber(array));
}

const ex3 = () => {
    // TODO...
    // const array1 = [1, 2, 3, 4, 5];
    // const array2 = ['a', 'b', 'c', 'd', 'e'];
    // const array1 = [1, 2];
    // const array2 = ['a', 'b', 'c', 'd', 'e'];
    const array1 = ["Buddy ", "the ", "cat "]
    const array2 = ["was ", "best ", "ever!"]
    console.log(interleave(array1, array2));
}

const ex4 = () => {
    // TODO...
    // console.log(palindrome('radar'));
    // console.log(palindrome('month'));
    // console.log(palindrome('mom'));
    console.log(palindrome('robot'));
}

const ex5 = () => {
    // TODO...
    let str = "today this is a this is a this is a test.";
    // console.log(numberOfTimes(str));
}

const ex6 = () => {
    // TODO...
    // const array = ['this', 'is', 'a', 'test', 'happy'];
    const array = ['this', 'is', 'alongstringtoo', 'test', 'happy'];
    console.log(longestString(array));
}

const ex7 = () => {
    // TODO...
    // let n = [1, 3, 6, 3, 6, 10];
    let n = [10, 23, 6, 11, 61, 13];
    console.log(sort(n));
}

const ex8 = () => {
    // TODO...
    // let words = "Count the words in this string";
    let words = "Hi";
    console.log(countWords(words));
}

const ex9 = () => {
    // TODO...
    // let a = "this counts the number of words that end in s";
    // let a = "apples bananas oranges fruit vegetables tomatoes";
    // let a = "s";
    let a = "sss";
    console.log(countS(a));
}

const ex10 = () => {
    // TODO...
    var array = ["this", "is", "a", "test"];
    // var array = ["thisisalsoatest"];
    // var array = [];
    console.log(countLetters(array));
}

const ex10a = () => {
    // TODO...
    var array = ["this", "is", "a", "test"];
    // var array = ["thisisalsoatest"];
    // var array = [];
    console.log(countLetters(array));
}

const ex11 = () => {
    // TODO...
    // let arr = ['dog', 3, 7, 'cat', 13, 'car'];
    let arr = [true, 300, -7, 'cat', 13.345, 'car'];
    console.log(numbersOnly(arr));
}

const ex12 = () => {
    // TODO...
    const c = new Calculator();
    c.add(1,2);
    // console.log(c.sub(4,1));
    // console.log(c.div(10,2));
    // console.log(c.mul(2,2))
    // console.log(c.getHistory())
}

//
// Your functions here...
//

const countNumbers = (array) => {
    let retval = 0;
    // TODO...
    for(let num of array){
        if(typeof(num) === "number") retval++;
    }
    return retval;
}

const minNumber = (array) =>{
    let result = array[0];

    for(let num of array){
        if(num < result) result = num;
    }

    return result
}

const interleave = (arr1, arr2)=>{
    //create new empy string to return
    let result = "";
    
    if(arr1.length === arr2.length){
        for(let i=0; i < arr1.length; i++){
            result += arr1[i]
            result += arr2[i]
        }
    }else{
        return "ERROR: Array length mismatch"
    }
    return result;
}

const palindrome = (str)=>{
    const splitStr = str.split("");
    const reverseStr = splitStr.reverse();
    const joinStr = reverseStr.join("");
    if(str === joinStr){
        return true;
    }else{
        return false;
    }
}

const numberOfTimes = str =>{
    const splitStr = str.split(" ");
    let countArr = [];
    for(let num of splitStr){
        if(num === "this") countArr.push(num);
    }
    return `this appears: ${countArr.length} times.`;
}

const longestString = str =>{
    let result = "";
    for(let s of str){
        if(s.length > result.length) result = s;
    }
    return result;
}

const sort = arr =>{
    //loop through
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

const countWords = str =>{
    //create a counter variable and set to zero
    let counter = 0;
    //turn string into an array separated by words
    const strArray = str.split(" ");
    //loop through string array
    for(let i=0; i<strArray.length; i++){
        //for each iteration add to the counter variable
        counter++;
    }

    //return the counter variable
    return counter;
}

const countS = (str)=>{
    //input: a sentence/string
    //function: counts how many words end in "s"
    //output: a number

    //create a counter variable and set to zero
    let counter = 0;
    //turn string into an array separated by words
    const strArray = str.split(" ");
    //loop through string array
    for(let i=0; i<strArray.length; i++){
        //if last letter of each word is "s", increase the counter variable
        if(strArray[i][strArray[i].length-1] === "s") counter++;
    }
    //return the counter variable
    return counter;
}

const countLetters = arr =>{
    let counter = 0;
    for(let word of arr){
        const wordLen = word.length;
        counter += wordLen;
    }
    return counter;
}

const countLettersMap = (arr)=>{
    let counter = 0;
    arr.map(word => {
        const wordLen = word.length;
        counter += wordLen;
    })
    return counter;
}

const numbersOnly = arr =>{
    const numArr = [];
    for(let i=0; i<arr.length; i++){
        if(typeof(arr[i]) === "number") numArr.push(arr[i]);
    }
    return numArr;
}

class Calculator{
    // constructor(a,b){
    //     this.a = a;
    //     this.b = b;
    // }

    add(a,b){
        const sum = a + b;
        return `Add: ${a} + ${b} = ${sum}`;
    }

    sub(a,b){
        const result = a - b;
        return `Sub: ${a} - ${b} = ${result}`;
    }

    div(a,b){
        const result = a / b;
        return `Div: ${a} / ${b} = ${result}`;
    }

    mul(a,b){
        const result = a * b;
        return `Mul: ${a} * ${b} = ${result}`;
    }

    getHistory(){
        const addHistory = this.add(a,b);
        return addHistory;
    }
}

const main = async () => {
    // ex1();
    // ex2();
    // ex3();
    // ex4();
    // ex5();
    // ex6();
    // ex7();
    // ex8();
    // ex9();
    // ex10();
    // ex10a();
    // ex11();
    ex12();
}

main();