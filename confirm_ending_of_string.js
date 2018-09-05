//Step 1: Clarify
    //Create a function that checks if a string (first argument, str) ends with the given target string (second argument, target). If it does return true, if it doesn't return false.

//Step 2: Create sample data and solve without code
    //check('Tayte', 'e') ==> true
    //check('Apple iPhpne', 'abc') ==> false
    //check('Video Games', 'ames') ==> true

//Step 3: Define code constructs
    //function
    //if/else statement
    // === comparison operator
    //.substr()
    //.endsWith()

//Step 4: Psuedo code
    //Create a function that accepts two arguments
    //check to see if the string ends with the target
        //use substr() method passing in the -target.length to start at the end of the string
        //if the end of the string matches the target
            //return true
        //else
            //return false

//Step 5: Solve with code
    //Option 1:
    // function checkStr(str, target){
    //     if(str.substr(-target.length) === target){
    //         return true;
    //     }else {
    //         return false;
    //     }
    // }

    //Option 2:
    function checkStrTwo(str, target){
        // if(str.endsWith(target)){
        //     return true;
        // }else {
        //     return false;
        // }
        return str.endsWith(target);
    }

    // function checkStrThree(str, target){
    //     return str.endsWith(target) ? true : false;
    // }

//Step 6: Test
    //Option 1:
    // console.log('Test One:', checkStr('Tayte', 'e'));
    // console.log('Test Two:', checkStr('Apple iPhone', 'abc'));
    // console.log('Test Three:', checkStr('Video Games', 'ames'));
    //Option 2:
    console.log('Test One:', checkStrTwo('Tayte', 'e'));
    console.log('Test Two:', checkStrTwo('Apple iPhone', 'abc'));
    console.log('Test Three:', checkStrTwo('Video Games', 'ames'));
    //Option 3:
    // console.log('Test One:', checkStrThree('Tayte', 'e'));
    // console.log('Test Two:', checkStrThree('Apple iPhone', 'abc'));
    // console.log('Test Three:', checkStrThree('Video Games', 'ames'));