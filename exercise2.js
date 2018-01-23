/*Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array multidimensi
dimana array tersebut berisi value (pasti berurut dari kiri ke kanan) First Name, Last Name,
Gender dan Birth Year . Fungsi ini akan menampilkan object literal yang memiliki property
firstName, lastName, gender dan age. Nilai age didapatkan dari tahun sekarang dikurang tahun lahir.
 Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang maka age
 akan berisi 'Invalid Birth Year'

Contoh jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]]
maka output:

Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }
*/

// 1. jika array kosong, tuliskan ''
// 2. jika tidak, buat looping untuk setiap objek dalam arr
//   2a. inisialisasi object literal
//   2b. tuliskan object firstName dari array ke-i index ke-0
//   2c. tuliskan object lastName dari array ke-i index ke-1
//   2d. tuliskan object gender dari array ke-i index ke-2
//   2e. jika array ke i index ke-3 undefined, tuliskan object age 'Invalid Birth Year'
//   2f. jika tidak, tuliskan object age tahun ini dikurang array ke-i index ke-3
//   2g. tampilkan sesuai format (kecuali object)
//   2h. tampilkan object

function changeMe(arr) {
  if(arr.length===0){
    console.log('');
  } else {
    for(var i in arr){
      var obj = {}
      obj.firstName = arr[i][0];
      obj.lastName = arr[i][1];
      obj.gender = arr[i][2];
      if(arr[i][3]===undefined){
        obj.age = 'Invalid Birth Year';
      } else {
        obj.age = 2018 - arr[i][3];
      }
      console.log((Number(i)+1) + '. ' + obj.firstName + ' ' + obj.lastName + ': ');
      console.log(obj);
    }
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
