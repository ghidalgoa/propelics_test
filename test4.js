/*
4. Write a function that combines two arrays by alternatingly taking their elements in, e.g. [x,y,z], [10,20,30] prints
[x,10,y,20,z,30].
*/


var array1= [1,2,3,4,5,6];
var array2= ["a","b","c","d"];

/*
a and b are arrays, if one of them isn't, will print the other one, 
if none is an array, will print an empty array
*/
function mixingArrays(a,b){
    var und = 'undefined';
	var mixedArray = [];
	var mixedArrayPos = 0;
//if A is longer than B i'll check for the end of B to stop writing undefined B positions.
	if(a.length >= b.length){
		for(var i=0, alen=a.length; i < alen;i++){
			mixedArray[mixedArrayPos] = a[i];
			mixedArrayPos++;
//checking if we reach the end of B, if not we should write the element
			if (typeof b[i] != und){
				mixedArray[mixedArrayPos] = b[i];
				mixedArrayPos++;
			}
		}	
	} else {
//if B is longer than A we check for the end of A to stop writing undefined B positions.
		for(var j=0, blen=b.length; j < blen;j++){
//checking if we reach the end of A, if not we write the element
			if (typeof a[j] != und){
				mixedArray[mixedArrayPos] = a[j];
				mixedArrayPos++;
			}
			mixedArray[mixedArrayPos] = b[j];
			mixedArrayPos++;
        }
	}
	return mixedArray;
}

//print function for the array
function printArray(array){
    var finalArray = "[";
    for(var i=0, alen=array.length; i < alen;i++){
        finalArray = finalArray.concat(array[i]);
        if (i != array.length - 1){
            finalArray = finalArray.concat(",");
        }
    }
    finalArray = finalArray.concat("]");
    alert(finalArray);
}

printArray(mixingArrays(array1,array2));
