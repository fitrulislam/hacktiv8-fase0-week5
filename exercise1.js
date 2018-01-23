/*Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa
array yang berisi angka-angka. Function akan me-return array multidimensi dimana array
tersebut berisikan 3 kategori/kelompok:

kelompok pertama (baris pertama) merupakan angka-angka genap
kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
*/

// 1. inisialisasi array kosong untuk angka genap
// 2. inisialisasi array kosong untuk angka ganjil
// 3. inisialisasi array kosong untuk kelipatan 3
// 4. inisialisasi variabel kosong untuk menampung semua
// 5. buat looping untuk setiap variabel di arr
//   5a. jika array index ke-i dimodulus 3 = 0, push ke array kelipatan 3
//   5b. jika array index ke-i adalah angka genap, push ke array genap
//   5c. selain itu, push ke array ganjil
// 6. push semua array (array genap, array ganjil, array kelipatan 3) berurutan

function mengelompokkanAngka(arr) {
  var arrGenap = [];
  var arrGanjil = [];
  var arrLipatTiga = [];
  var arrSemua = [];
  for (var i in arr){
    if(arr[i]%3===0){
      arrLipatTiga.push(arr[i]);
    } else if(arr[i]%2===0){
      arrGenap.push(arr[i]);
    } else {
      arrGanjil.push(arr[i]);
    }
  }
  arrSemua.push(arrGenap, arrGanjil, arrLipatTiga);
  return arrSemua;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
