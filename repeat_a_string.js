//Step 1: Clarify
    //Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

    //**Solve without using the string prototype method .repeat() first, then try with the .repeat()**

//Step 2: Create sample data and solve
    //function repeat("*", 3) ==> "***"
    //function repeat("abc", 3) ==> "abcabcabc"
    //function repeat("abc", 4) ==> "abcabcabcabc"
    //function repeat("*", 8) ==> "********"
    //function repeat("abc", -2) ==> ""

//Step 3: Define code constructs
    //function
    //for loop
    //if statement
    //.repeat()

//Step 4: Psuedo code
    //Without .repeat()
        //Create a function that accepts two arguments(string, number)
        //Define an empty string to mutate
        //Create a for loop to loop as many times as the number argument
            //Concatenate the empty string with the string being passed in every interation in the for loop
        //Return the defined string
    
    //With .repeat()
        //Create a function that accepts two arguments(string, number)
        //Check if num argument is less than 0 (negative number)
            //If it is return an empty string
            //if it isn't return the str using the repeat method with the number argument passed in

//Step 5: Solve with code
    //Without .repeat()
    function repeatString(str, num){
        let repeatedString = '';
        for(let i = 0; i < num; i++){
            repeatedString += str;
        }
        return repeatedString;
    }

    //With .repeat()
    function repeatStringV2(str, num){
        if(num < 0) return '';
        return str.repeat(num);
    }

//Step 6: test
    //Test for first function
    repeatString("*", 3);
    repeatString("abc", 3);
    repeatString("abc", 4);
    repeatString("*", 8);
    repeatString("abc", -2);

    //Test for second funciton
    repeatStringV2("*", 3);
    repeatStringV2("abc", 3);
    repeatStringV2("abc", 4);
    repeatStringV2("*", 8);
    repeatStringV2("abc", -2);