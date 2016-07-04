/*
5. Write a function that receives a matrix and returns its transposed one.
*/

var givenMatrix = [[1,2],[3,4],[5,6]];

function transposeMatrix(matrix) {
  for (var i = 0, mLen = matrix.length; i < mLen; i++) {
    for (var j = 0; j <i; j++) {
//swap element[i,j] and element[j,i] using temp as a pivot
      var temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  return matrix
}

//for testing propouse
function printArray(array){
  for (var i = 0, iLen = array.length; i < iLen; i++) {
    for (var j = 0; j < array.length; j++) {
        if (typeof array[i][j] != 'undefined'){
            alert(i + "," + j + "=" + array[i][j]);
            }
        }
    }
}

var returnedMatrix = transposeMatrix(givenMatrix);
printArray(returnedMatrix);