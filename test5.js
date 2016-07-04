/*
10. Write a function that reverses a given (as a parameter) string
*/

var testStr = "a*/-&%$,.bc";

function reverseString(str){
//in case we get anything but a string as a parameter
    if(typeof str != 'string'){
        return "invalid string";
    } else {
/*
split() to get a char array, reverse() to reverse de c[] and join() to 
get the string from the array
*/
        return str.split("").reverse().join("");
    }

}

alert(reverseString(testStr));