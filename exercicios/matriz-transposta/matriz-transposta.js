
  var l=5, c=5, i, j;
  var matriz = [[2,2,2,2,2],  
       [1,0,0,0,1],  
       [1,0,1,0,1],
       [1,0,0,0,1],  
       [1,1,1,1,1]];

  // for generate random data
  var generateRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }   

  module.exports = function (l, c, matriz) {
    var i, j, aux;
     
    for (i = 0; i < l; i++) {
      for (j = i+1; j < c; j++) {
        if (j != i) {
          aux = matriz[i][j];
          matriz[i][j] = matriz[j][i];
          matriz[j][i] = aux;
        }
      }
    }
     
    for (i = 0; i < l; i++) {
      for (j = 0; j < c; j++) {
        // console.log("%d ",matriz[i][j]);
      }
      // console.log("\n");
    }
    console.log('Matriz transposta', matriz);
    return matriz;
  }
    