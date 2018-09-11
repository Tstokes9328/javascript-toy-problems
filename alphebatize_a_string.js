//Step 1: Clarify
    //Create a function that accepts a string as an argument and returns the string in lowercase alphabetical order

//Step 2: Create sample data and solve
    //'Tayte Stokes' ==> 'aeekossttty'
    //'JavaScript Toy Problem' ==> 'aabceijlmoopprrsttvy'
    //'Hello World' ==> 'dehllloorw'

//Step 3: Define code constructs
    //Function
    //.toLowerCase()
    //.split()
    //.sort()
    //.join()

//Step 4:Psuedo code
    //Create a function that accets a string
    //convert the str into lowercase to sort easier
    //convert the lowercase string into an array
    //use .sort() on the lowercase array
    //join the array after it's been sorted
    //return the new string

//Step 5: Solve with code
    function sortString(str){
        let lowercaseString = str.toLowerCase();
        let lowerCaseArray = lowercaseString.split('');
        let sortedArray = lowerCaseArray.sort();
        let newString = sortedArray.join('');
        return newString;
    }

    function sortStringTwo(str){
        return str.toLowerCase().split('').sort().join();
    }

//Step 6: Tets