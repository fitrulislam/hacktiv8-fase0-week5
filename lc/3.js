/*breakSentence adalah sebuah function yang menerima satu parameter berupa string kalimat.
function akan mereturn sebuah array yang berisikan setiap kata di kalimat tesebut.


[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode
maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan sintaks .split()! Jangan lupa, split bukanlah operasi array.
- Dilarang menggunakan regex .match dan lainnya!

[EXAMPLE]
breakSentence('I am so amazed')

output: ['i', 'am', 'so', 'amazed']
*/

// PSEUDOCODE
// 1. inisialisasi variabel tampungan
// 2. inisialisasi array kosong
// 3. buat looping untuk membaca sentence
//   3a. tambahkan setiap karakter kedalam tampungan
//   3b. jika sentence[j] adalah spasi, langsung masukkan tampungan kedalam array
//     3bc. tuliskan lagi variabel tampungan = kosong
// 4. push tampungan terakhir kedalam array
// 5. return array

function breakSentence(sentence) {
  var tamp = '';
  var arr = [];
  for(var i=0; i<sentence.length; i++){
    tamp += sentence[i];
    if(sentence[i]===' '){
      arr.push(tamp);
      tamp = '';
    }
  }
  var arr2 = [];
  var tamp2 = '';
  for(var j=0; j<arr.length; j++){
    var arr3 = arr[j]
    for(var k=0; k<arr3.length-1; k++){
      tamp2 += arr3[k];
    }
    arr2.push(tamp2);
    tamp2 = '';
  }
  arr2.push(tamp);
  return arr2;
}

console.log(breakSentence('I am so amazed')); // ['I', 'am', 'so', 'amazed' ]
console.log(breakSentence('do something')); // ['do', 'something']
console.log(breakSentence('')); // []
console.log(breakSentence('week4 is so easy')); // ['week4', 'is', 'so', 'easy']
console.log(breakSentence('I can do this with my eyes closed')); // ['I', 'can', 'do', 'this', with', 'my', 'eyes', 'closed']
