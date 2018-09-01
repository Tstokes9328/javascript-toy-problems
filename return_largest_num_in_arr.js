//Step 1: Clarify
    //Create a function that accepts a 2d array of numbers and returns an array consisting of the largest number from each provided sub-array.

//Step 2: Create sample data & solve without code
    //[[2,4,53,10], [23,32,9,87], [123,43,65,47]] ==> [53, 87, 123]
    //[[12, 4, 3, 54], [65, 32, 1], [0, 1, 2], [200, 4,7, 5]] ==> [54, 65, 2, 200]

//Step 3: Decide what code contructs to use
    //function
    //empty array
    //for loop
        //foor loop
    //if statement

//Step 4: Write psuedo code
    //create a function that accepts an array of array's with numbers as an argument
    //define a variable to store results into an array
    //create a for loop to loop through outer array
    //define a variable to store the largest number and iniitalize it to the first value
    //create an inner for loop to loop through each subarray
    //check to see if the element in the subarray is larger than the current largest number, if so update the current largest number variable
    //after the inner loop store the new largest number into the results array
    //return the results array

//Step 5: Solve in code
function returnLargestArray(arr){
    let results = [];
    for(let i = 0; i < arr.length; i++){
        let largestNum = arr[i][0];
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] > largestNum){
                largestNum = arr[i][j]
            }
        }
        results[i] = largestNum;
    }
    console.log(results);
}



//Step 6: Test
let testArrOne = [[2,4,53,10], [23,32,9,87], [123,43,65,47]];
let testArrTwo = [[12, 4, 3, 54], [65, 32, 1], [0, 1, 2], [200, 4,7, 5]];

returnLargestArray(testArrOne);
returnLargestArray(testArrTwo);