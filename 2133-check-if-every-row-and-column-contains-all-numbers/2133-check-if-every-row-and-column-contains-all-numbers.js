var checkValid = function(matrix) {
    const matLength = matrix.length;
    const newMatrix = [];
      for(let i=0;i<matLength;i++){
          let sortArray = [... new Set(matrix[i])].sort((a,b) => a-b);
          if(!sortArray[matLength-1] || sortArray[0] !== 1 || sortArray[matLength-1] !== matLength){
               return false;
          }

          for(let j=0;j<matLength;j++){
              if(!newMatrix[j]) newMatrix[j] =[];
              newMatrix[j][i] = matrix[i][j];
          }
      }
      for(let i=0;i<matLength;i++){
          let sortArray = [...new Set(newMatrix[i])].sort((a,b)=> a-b);
          if(!sortArray[matLength-1] || sortArray[0] !== 1 || sortArray[matLength-1] !== matLength){
               return false;
          }
      }
      return true;
};