//Step 1: Clarify
    //Create a function that takes in an array
    //Remove all falsy values from the array
    //Falsy values in JavaScript are false, null, 0, "", undefined, and NaN

//Step 2: Create sample data and solve without code
    //[1, 0, false, 3, ''] ==> [1,3]
    //[-10, undefined, NaN, 25, 'Hello World'] ==> [-10, 25, 'Hello World']
    //[true, false, null, 'Hello World', 12] ==> [true, 'Hello World', 12]

//Step 3: Define data structures
    //Function
    //Empty Array
    //For loop
    //If statement
    //.push()

//Step 4: Psuedo code
    //Create a function that accepts an array as an argument
    //Define an empty array to later return
    //Loop through the array
    //If the element is truthy
        //Push to the empty array
    //Outside of the for loop
        //Return the array

//Step 5: Solve with code
    function falsyChecker(array){
        let truthyArray = [];
        for(let i = 0; i < array.length; i++){
            if(array[i]){
                truthyArray.push(array[i]);
            }
        }
        console.log(truthyArray); //Instead of returning
    }

    function falsyCheckerTwo(array){
        let truthyArray = [];
        array.forEach((element) => {
            if(element){
                truthyArray.push();
            }
        })
        console.log(truthyArray); //Instead of returning
    }

    function falsyCheckerThree(array){
        return array.filter(element => element);
    }

//Step 6: Test
let arrayOne = [1, 0, false, 3, ''];
let arrayTwo = [-10, undefined, NaN, 25, 'Hello World'];
let arrayThree = [true, false, null, 'Hello World', 12];

falsyChecker(arrayOne);
falsyChecker(arrayTwo);
falsyChecker(arrayThree);