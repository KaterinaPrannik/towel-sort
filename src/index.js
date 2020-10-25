

module.exports = function towelSort (matrix) {
  let sortArray=[];
  if(!Array.isArray(matrix)){
    return [];
  } else {
    for( let i = 0; i<matrix.length; i++){
      let item = matrix[i];
      if(i %2 !== 0){
       item = item.reverse();

      }
      sortArray.push(...item);
    }
  }
  return sortArray;
}
