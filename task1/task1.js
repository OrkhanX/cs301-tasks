// fullName = 'Orkhan Naghiyev Mammadsadig'
// ////////////1

// function firstTask(fullName){
//     let array = fullName.split('');
// console.log(array);
// }
// firstTask(fullName);

// ////////////2
// function secondTask(fullName){
// let bosluqIndex = fullName.indexOf(' ');
// let firstName = fullName. slice(0, bosluqIndex);
// let lastName = fullName.slice(bosluqIndex + 1, bosluqIndex + 9);
// let newFullName= lastName + ' ' + firstName;
// console.log(newFullName);
// }
// secondTask(fullName);

// ////////////3
// function thirdTask(){
// let namesArray = ['Orkhan', 'Naghiyev'];
// let fullNameString = namesArray.join(' ');
// console.log(fullNameString)
// }
// thirdTask();
// // let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
// ////////////4
// // let numbers = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// function fourthTask(){
// let fivesFound = 0; 

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === 5) {
//     fivesFound++; 
//   }
// }
// console.log(fivesFound);    
// }

// fourthTask();

// ////////////5

// function fifthTask(){
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum)
// }
// fifthTask();

// ////////////6
// function sixthTask(){
// const count = {};
// for (const element of arr) {
//   if (count[element]) {
//     count[element]++;
//   } else {
//     count[element] = 1;
//   }
// }
// const sortedElements = [];
// for (const element in count) {
//   if (count[element] > 1) {
//     sortedElements.push(element);
//   }
// }
// sortedElements.sort((a, b) => a - b);
// console.log(sortedElements);
// }
// sixthTask()
// ////////////7

// function seventhTask(){
// largest_number = Math.max(...arr)
// count = arr.count(largest_number)
// console.log(largest_number)
// console.log(count)
// }

// seventhTask

// ////////////8
// function taskEight(name, arr){
//   let myName = "Orkhan";
// let numberOfLettersInName = myName.replace(/[^a-zA-Z]/g, "").length;
// let isInArray = arr.includes(numberOfLettersInName);
// console.log(`Number of letter in my name : ${numberOfLettersInName}`);
// console.log(`Is the count in the array? ${isInArray}`);
// }
// taskEight(myName, myArray);

// ////////////9
// const calculateAndFindIndex = function(arr){
//   let firstThreeElements = arr.slice(0, 3);
// let result = firstThreeElements[0] / firstThreeElements[1] %firstThreeElements[2];
// let indexOfDigit = arr.indexOf(result);
// console.log(`Result of the division and remaining 2: ${result}`);
// console.log{`Index of the digit in the array: ${indexOfDigit}`};
// };

// calculateAndFindIndex(arr);

// ////////////10
// function findMaxAndIndex(arr){
//   let maxNumber = Math.max(...arr);
// let firstIndexOfMaxNumber = arr.indexOf(maxNumber);
// console.log(`Dizideki en büyük sayı: ${maxNumber}`);
// console.log(`En büyük sayının ilk indeksi: ${firstIndexOfMaxNumber}`);
// }
// findMaxAndIndex(arr)

// //////////12
// function findIndicesOfNumber(arr, number){
//   let smallestIndex = arr.inddexOf(5);
// let largestIndex = arr.lastIndexOf(5);
// console.log("Smallest index of 5:", smallestIndex);
// console.log("Largeest index of 5:", largestIndex);
// }
// findIndicesOfNumber(arr,5);

// //////////13
// function filterArrayAndCompareLengths(arr, threshold){
//   let newArray = arr.filter(num => num > 2);
// let lengthDiffernce = arr.length - newArray.length;
// console.log("Original array:", arr);
// console.log("New array with numbers greater than 2:", newArray);
// console.log("Differnce in lengths:", lengthDiffernce);
// }
// filterArrayAndCompareLengths(arr, 2);

// //////////14
// function findAndSumIndicesOfNumber(arr, number){
//   let sevenIndices = arr.reduce((indices, num, index) => {
//     if (num === 7) {
//         indices.push(index);
//     }
//     return indices;
// }, []);
// let sumOfIndices = sevenIndices.reduce((sum, index) => sum + index, 0);
// console.log("Indices of the number 7:", sevenIndices);
// console.log("sum of indices of the number 7:", sumOfIndices);
// }
// findAndSumIndicesOfNumber(arr, 7);


// // let arr2 = [
// //     {
// //         name: 'test',
// //         key: 1
// //     },
// //     {
// //         name: 'task',
// //         key: 2
// //     },
// //     {
// //         name: 'tanqo',
// //         key: 3
// //     },
// //     {
// //         name: 'like',
// //         key: 4
// //     },
// //     {
// //         name: 'task',
// //         key: 5
// //     },
// //     {
// //         name: 'trust',
// //         key: 6
// //     },
// //     {
// //         name: 'test',
// //         key: 7
// //     },
// //     {
// //         name: 'last',
// //         key: 8
// //     },
// //     {
// //         name: 'tanqo',
// //         key: 9
// //     },
// //     {
// //         name: 'elephant',
// //         key: 10
// //     },
// //     {
// //         name: 'love',
// //         key: 11
// //     },
// //     {
// //         name: 'small',
// //         key: 12
// //     },
// //     {
// //         name: 'little',
// //         key: 13
// //     },
// // ];

// //////////16
// function filterObjectsByName(arr2){
//   let filteredArray = arr2.filter(obj => obj.name.toLowerCase().startsWith('t'));
// console.log(filteredArray);
// }
// filterObjectsByName(arr2)

// //////////17
// const countObjectWithName = function(arr2){
//   let count = arr2.filter(obj => obj.name.toLowerCase().startsWith('t') && obj.name.toLowerCase().endsWith('t')).length;
// console.log(`Number of objects whose name starts with "t" and ends with "t": ${count}`);
// }
//   countObjectWithName(arr2);

// //////////18
// const sumKeysOfObjects = function(arr2){
//   let sumOfKeys = arr2
//   .filter(obj => obj.name.toLowerCase().startsWith('t') && obj.name.toLowerCase().endsWith('t'))
//   .reduce((sum, obj) => sum + obj.key, 0);
// console.log(`Sum of "keys" of objects whose "name" starts and ends with "t": ${sumOfKeys}`);
// }
// sumKeysOfObjects(arr2);

// //////////19
// const task19 = function(arr2){
//   let newArr2 = arr2.map(obj => ({
//     ...obj,
//     name: obj.name.toLowerCase().endsWith('e') ? 'SuperDev' : obj.name
// }));
// console.log(newArr2);
// }
// task19(arr2)

// //////////21
// const task21 = function(arr2){
//   let longestNameKey = arr2.reduce((maxKeyObj, currentObj) => {
//     if (currentObj.name.length > maxKeyObj.name.length) {
//         return currentObj;
//     }
//     return maxKeyObj;
// }, arr2[0]).key;
// console.log("Key of the object with the longest name:", longestNameKey);
// }
// task21(arr2)
// //////////22
// const task22 = function(arr2){
//   let newArrWithLength4Name = arr2.filter(obj => obj.name.length === 4);
// console.log("New array with objects whose name has a length of 4:", newArrWithLength4Name);
// }
// task22(arr2);
// //////////23
// const task23 = function(arr2){
//   let objWithLargestKey = arr2.reduce((maxKeyObj, currentObj) => {
//     if (currentObj.key > maxKeyObj.key) {
//         return currentObj;
//     }
//     return maxKeyObj;
// }, arr2[0]);
// console.log("Name of the object with the largest key:", objWithLargestKey.name);
// }
// task23(arr2);

// //////////24
// const task24 = function(arr2){
//   let indexesWithTwoLs = arr2.reduce((indexes, obj, index) => {
//     if ((obj.name.match(/l/gi) || []).length === 2) {
//         indexes.push(index);
//     }
//     return indexes;
// }, []);
// console.log("Indexes of objects containing 2 'L's:", indexesWithTwoLs);
// }
// task24(arr2);

// //////////25
// const task25 = function(arr2){
//   let keysWithTwoTs = arr2.reduce((keys, obj) => {
//     ifcd ((obj.name.match(/t/gi) || []).length === 2) {
//         keys.push(obj.key);
//     }
//     return keys;
// }, []);
// console.log("Keys of objects containing 2 't's:", keysWithTwoTs);
// }
// task25(arr2);

