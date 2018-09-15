//Step 1: Clarify
  //Create a function that checks if a string is a plaindrome. If it is return true, if it's not return false. Ignore special characters, look for white-spaces.
  //Try without using regex

//Step 2: Create sample data and solve without code
  //'Race car' => true
  //'Not a palindrome' => false
  //'Never odd or even' => true

//Step 3: Define code constructs
  //function
  //split()
  //filter()
  //!==
  //reverse()
  //join()
  //toLowerCase()

//Step 4: Psuedo code
  //Create a function that accepts a string as an argument
  //Create a variable called reversedString
    //Store the string reverse with the spaces removed and lowercased in it
  //Remove the spaces from the string and lowercase it
  //Compare to the reversedString and the new string are equal
    //If they are return true
    //If the aren't return false

//Step 5: Solve with code
function checkPalindrome(string){
    //Stored reversed string with spaces removed and lowercased in a variable
    const reversedString = string.split('').filter((e) => e !== ' ').reverse().join('').toLowerCase();
    //Change the string to remove spaces and lowercase it
    string = string.split('').filter((e) => e !== ' ').join('').toLowerCase();
    //Check to see if the two strings match, if they do return true else return false
    if(reversedString === string) return true;
    return false;
  }
  //Step 6: Test
    //Data
    const testOne = 'Race car';
    const testTwo = 'Not a palindrome';
    const testThree = 'Never odd or even';
    //Invoke the function with data passed in
    checkPalindrome(testOne);
    checkPalindrome(testTwo);
    checkPalindrome(testThree);