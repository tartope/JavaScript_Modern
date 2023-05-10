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

const main = async () => {
    // ex1();
    // ex2();
    // ex3();
    // ex4();
    // ex5();
    ex6();
}

main();