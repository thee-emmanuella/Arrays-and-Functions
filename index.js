// QUESTION 1

//  What are the differences between mutating array methods and non-mutation array methods in JavaScript. 
//  List 5 array methods that fall under each of them
 
/**
 * In the context of JavaScript arrays, when an array method is performed, 
 * mutating methods change the entire array instead of returning a new array with the changes.
 * Whereas, non-mutating methods return a whole new array which has all the changes.
 * 
 * Examples of mutating array methods include:
 *  array.pop(), array.push(), array.shift(), array.sort(), array.splice()
 * 
 * Examples of non-mutating array methods include:
 *  array.concat(), array.includes(), array.join(), array.slice(), array.toString()
 */

// QUESTION 2

/**
 * Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform these operations on them: 
    1. Add ‘Kotlin’ to the end of the array
    2. Add ‘Java’ after ‘Ruby’
    3. Remove the first item in the array
    4. Add ’Scala’ and ‘Swift’ to the beginning of the array
    5. Replace ‘PHP’ with ‘Go’ and ‘Rust’
 */

   let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

   // Add ‘Kotlin’ to the end of the array
   languages.push('Kotlin'); // [ 'C#', 'JavaScript', 'Ruby', 'PHP', 'Python', 'Kotlin' ]
   
   // Add ‘Java’ after ‘Ruby’
   languages.splice(3, 0, 'Java'); // [ 'C#', 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ]
   
   // Remove the first item in the array
   languages.shift(); // [ 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ]
   
   // Add ’Scala’ and ‘Swift’ to the beginning of the array
   languages.unshift('Scala', 'Swift'); // ['Scala', 'Swift', 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin']
   
   // Replace ‘PHP’ with ‘Go’ and ‘Rust’
   languages.splice(5, 1, 'Go', 'Rust'); // ['Scala', 'Swift', 'JavaScript', 'Ruby', 'Java', 'Go', 'Rust', 'Python', 'Kotlin']

   console.log(languages);


// QUESTION 3

/**
 * What will be the value of fruit after calling the function changeFruit?
    let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
 */

    let fruit = ['apple', 'mango', 'banana'];
	function changeFruit( fruit ) {
    		fruit[2] = "orange";
    		return fruit;
	}

    // ANSWER

    console.log(changeFruit(fruit)); // fruit = [ 'apple', 'mango', 'orange' ]


// QUESTION 4

/**
 * Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
 * e.g., max([4, 5, 10, -2]) // maximum value is 10
 */

    function maxValueFunction (arrayOfNums) {
        let maxValue = Math.max(...arrayOfNums);
        return maxValue;
    }

    console.log(`Maximum value is ${maxValueFunction([2,7,3,9,1])}`); // Maximum value is 9


// QUESTION 5

/**
 * Write a function called valTimesIndex which accepts an array of numbers and returns a new array 
 * with each value multiplied by the index it is at in the array: e.g.,
        valTimesIndex([1,2,3]) // [0,2,6]
		valTimesIndex([5,10,15]) // [0,10,30]
*/

    function valTimesIndex (arrayOfVal) {
        let newArray = [];
        let multiplierValue;

        for (let i = 0; i < arrayOfVal.length; i++) {
            multiplierValue = arrayOfVal[i] * arrayOfVal.indexOf(arrayOfVal[i]);

            newArray.push(multiplierValue);
        }

        return newArray;
    }

    console.log(valTimesIndex([1,2,3])); // [ 0, 2, 6 ]
    console.log(valTimesIndex([5,10,15])); // [ 0, 10, 30 ]



                 // PLEASE IGNORE
                 
    // function valTimesIndex (arrayOfVal) {
    //     let newArray = [];
    //     let multiplierValue;
    
    //     for (let key of arrayOfVal) {
    //         multiplierValue = key * arrayOfVal.indexOf(key);
    
    //         newArray.push(multiplierValue);
    //     }
    
    //     return newArray;
    // }
    
    // console.log(valTimesIndex([1,2,3])); // [ 0, 2, 6 ]
    // console.log(valTimesIndex([5,10,15])); // [ 0, 10, 30 ]