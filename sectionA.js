//                              Syzy_Coding_Challenge 

// // 1.Longest Word from the given file/text :

function findLongestWords(text) {
    const words = text.split(' ') 
    let longestWords = []
    let maxLength = 0

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) { //words[i].length - word Lenght
            maxLength = words[i].length 
            longestWords = [words[i]] 
        } else if (words[i].length === maxLength) {
            longestWords.push(words[i])
        }
    }
    return longestWords; 
}
const text = "This is a coding challenge for the interview process";

console.log("Longest Word in given text:");
console.log(findLongestWords(text));


// --------------------------------------------------------------------------------------------------------------

// 2. Given an array of integers. Find the largest sum of 3 integers

let arr =  [1,5,8,6,7,9,9,9]
arr.sort()
arr.reverse()
let removeDuplicates = [...new Set(arr)] // removing duplicates
let result = removeDuplicates[0]+removeDuplicates[1]+removeDuplicates[2]

console.log("Largest Sum of Three Integers: ",result);


// --------------------------------------------------------------------------------------------------------------

// 3. Find vowels in a word :

let word="Challenge"
let wordTwo=word.toLowerCase()
var output="";  
let count=0;
for (let i = 0; i < wordTwo.length; i++) {
    if(wordTwo.charAt(i)=="a" || wordTwo.charAt(i)=="e" || wordTwo.charAt(i)=="i" || wordTwo.charAt(i)=="o" || wordTwo.charAt(i)=="u")
    {
        count++
        output+=wordTwo.charAt(i)+" " //output = output+wordTwo.charAt(i)+" " 
    }
}

console.log("Vowels Count and Vowels in a word: ");
console.log(count,"("+ output +")");


// --------------------------------------------------------------------------------------------------------------

// 4. Find intersection of two arrays
// Given two arrays [1,2,3,4,5,6] and [1,3,5,7] and the answer should be [1,3,5]

function findIntersection(arr1,arr2){
    let intersection = []
    for(let i = 0; i < arr1.length; i++){
        if(arr1.includes(arr2[i])){
            intersection.push(arr2[i])
        }
    }
    return intersection;

}
const arr1 = [1,2,3,4,5,6]
const arr2 = [1,3,5]

console.log("Intersection of two arrays:");
console.log(findIntersection(arr1,arr2));
