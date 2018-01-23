// PSEUDOCODE
// 1. inisialisasi variabel baru bernilai 999 (fir)
// 2. inisialisasi variabel baru bernilai 999 (sec)
// 3. buat looping untuk membaca firstArr
//   3a. jika firstArr[i] lebih dari first, first = firstArr[i]
// 4. buat looping untuk membaca secondArr
//   4a. jika secondArr[j] lebih dari second, second = secondArr[j]
// 5. jika first > second, return first, sebaliknya jika lebih kecil, return second

function highestGlobalMinimum(firstArr, secondArr) {
  var fir = 999;
  var sec = 999;
  for(var i=0; i<firstArr.length; i++){
    if(firstArr[i]<fir){
      fir = firstArr[i];
    }
  }
  for(var j=0; j<secondArr.length; j++){
    if(secondArr[j]<sec){
      sec = secondArr[j];
    }
  }
  if(fir>sec){
    return fir;
  } else {
    return sec;
  }
}

console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5
console.log(highestGlobalMinimum([5, 11, 18, 6], [3, 1, 8, 13])); // 5
