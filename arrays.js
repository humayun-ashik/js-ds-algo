// // creating array using []
var numbers = [1,2,3,4,5];
console.log(numbers.length);

// //creating array using Array constructor 
var nmbr = new Array(2,4,6,8);
console.log(nmbr.length);

// // Creating arrays from Strings
var sentence = "the quick brown fox jumped over the lazy dog";
var words = sentence.split(" ");
for(var i = 0; i < words.length; i++){
    console.log("word " + i + ": " + words[i]);
}


// // Shallow copy 
var nums = [];
for(var i = 0; i < 10; i++){
    nums[i] = i + 1;
}
var nums2 = nums;
nums[0] = 1122;
console.log(nums2[0]);

// // Deep copy
function copy(arr1, arr2){
    for(var i = 0; i < arr1.length; i++){
        arr2[i] = arr1[i];
    }
}

var nums3 = [];
copy(nums,nums3);
nums[0] = 100;
console.log("Original array: " + nums[0]);
console.log("Copied array: " + nums3[0]);

// Searching for a value in array 
const prompt = require("prompt-sync")();

let names = ["Ashik", "Rahat", "Hirok", "Anik", "Rony", "Masum", "Sabab"];
// console.log("Enter a name to search for: ");
let nm = prompt("Enter a name to search for: ");
let pos = names.indexOf(nm);
if(pos >= 0){
    console.log("Found " + nm + " at position - "+ pos);
}
else{
    console.log(nm + " not fund ");
}