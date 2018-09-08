//Step 1: Clarify
    //Create a function that returns a count of how many vowels are in a string passed in as an argument
    //We will consider a,e,i,o,u as vowels

//Step 2: Create sample data and solve without code
    //'Tayte Stokes' ==> 4
    //'I love code' ==> 5
    //'Apple MacBook' ==> 5

//Step 3: Define code constructs
    //Function
    //for loop
        //forEach()
    //If statement
    // ===
    // ||

//Step 4: Psuedo Code
    //Create a function that accepts a string as an argument and will return a count of how many vowels are in the string
    //Define a counter variable and set it equal to 0
    //Convert the string into lowercase and store it in a variable
    //Split the lowercase string and store it into a new variable
    //Loop through the split lowercase array
        //For each element in the array, check if they are a vowel (a,e,i,o,u)
        //If they are, increase the counter variable by 1
    //Return the counter variable

//Step 5: Solve with code
    //Option 1:
    function vowelCount(str){
        let counter = 0;
        let lowerCaseString = str.toLowerCase();
        let lowerCaseArray = lowerCaseString.split('');
        for(let i = 0; i < lowerCaseArray.length; i++){
            if(lowerCaseArray[i] == 'a' || lowerCaseArray[i] == 'e' || lowerCaseArray[i] == 'i' || lowerCaseArray[i] == 'o' || lowerCaseArray[i] == 'u'){
                counter += 1;
            }
        }
        console.log(counter);
    }

    //Option 2:
    function vowelCounterTwo(str){
        let counter = 0;
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        for(let i = 0; i < str.length; i++){
            for(let j = 0; j < vowels.length; j++){
                if(str[i] == vowels[j]){
                    counter += 1;
                }
            }
        }
        console.log(counter);
    }

//Step 6: test
let stringOne = 'Tayte Stokes';
vowelCount(stringOne);
