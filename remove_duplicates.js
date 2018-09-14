//Step 1: Clarify
    //Create a function that takes in an array and returns it with duplicate values removed

//Step 2: Create sample data and solve
    // ['one', 'two', 'three', 'three'] ==> ['one', 'two', 'three'];
    // [20, 32, 20, 4] ==> [20, 32, 4];
//Step 3: Define code constructs

//Step 4: Psuedo code

//Step 5: Solve with code
    function removeDuplicates(arr){
        return arr.filter((element, index, array) => {
            if(array.indexOf(element) == index){
                return element;
            }
        })
    }

//Step 6: Test
    const arrOne = ['one', 'two', 'three', 'three'];
    const arrTwo = [20, 32, 20, 4];

    console.log(removeDuplicates(arrOne));
    console.log(removeDuplicates(arrTwo));