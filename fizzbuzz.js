// Step 1: Clarify
  // Write a function that counts to N (input of user) and pushes each number to an array in sequence, starting with 1.       If the numbers divisible by 3, replace that number with "Fizz".  If divisible by 5, the number should be replaced by     "Buzz". Numbers divisible by both 3 and 5 should be replaced with "Fizz Buzz"

  // Example output: [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14 , 'FizzBuzz']

//Step 2: Create sample data & solve without code
    // 15 => [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14 , 'FizzBuzz']
    // 20 => [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14 , 'FizzBuzz', 16, 17, 'Fizz', 19,           'Buzz']
    // 25 => [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14 , 'FizzBuzz', 16, 17, 'Fizz', 19,           'Buzz', 'Fizz', 22, 23, 24, 'Buzz']
    // 30 => [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14 , 'FizzBuzz', 16, 17, 'Fizz', 19,           'Buzz', 'Fizz', 22, 23, 'Fizz', 'Buzz', 26, 'Fizz', 28, 29, 'FizzBuzz']

//Step 3: Decide what code contructs to use
    //Function
    //For Loop
    //if/else statement
    //.push()

//Step 4: Write psuedo code
    //Create a function called FizzBuzz that takes one argument
    //Create an empty array to push values into
    //Create a for loop that loops as many times as the parameter
    //For each iteration check to see
        //if divisible by 5 && 3 (15)
            //push 'FizzBuzz' to the returning array
        //else if divisible by 5
            //push 'Buzz' to the returning array
        //else if fivisible by 3
            //push 'Fizz' to the returning array
        //else push the element to the array
    //return the new array

//Step 5: Solve in Code
    function FizzBuzz(num){
        let returningArray = [];
        for(let i = 1; i <= num; i++){
            if(i % 15 === 0){
                returningArray.push('FizzBuzz')
            }else if(i % 5 === 0){
                returningArray.push('Buzz')
            }else if(i % 3 === 0){
                returningArray.push('Fizz')
            }else {
                returningArray.push(i)
            }
        }
        return returningArray;
    }

    FizzBuzz(30);