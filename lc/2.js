// Seorang detektif sedang mengejar pelaku-pelaku kejahatan. Pelaku-pelaku kejahatan ini
// akan memasang beberapa jebakan secara acak agar detektif tidak menangkap mereka. Detektif
// memiliki 3 "nyawa", setiap detektif terkena jebakan maka "nyawa" dari detektif ini akan berkurang.
//
// Buatlah sebuah algoritma/pseudocode yang akan menerima sebuah inputan array yang isinya
// adalah string berupa:
//  - '@' adalah jebakan yang dipasang oleh pelaku-pelaku kejahatan
//  - '*' adalah jalanan biasa
//  - 'Villain' adalah pelaku kejahatan
//
// Dimana function ini akan mengembalikan berapa banyak villain yang berhasil detektif tangkap.
//
// Contoh
// -------
// 1. inputan: ['*', '*', '@', '*', 'Villain', '*',  '@', 'Villain']
//    output: Nice work, detective! You got all villains: 2
//
// 2. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain',  '@', 'Villain']
//    output: Ooops, you lose. You just got 2 villains
//
//
// */
// PSEUDOCODE
// 1. inisialisasi variabel nyawa bernilai 3 (nyawa)
// 2. inisialisasi variabel kosong untuk menampung villain (vill)
// 3. buat looping untuk membaca input dari kiri ke kanan (0 sampai input.length-1)
//   3a. jika index ke-i dari input = @, kurangi variabel nyawa sejumlah 1
//   3b. jika index ke-i dari input = villain dan nyawa tidak sama dengan nol, tambahkan villain sejumlah 1
// 4. jika nyawa tidak sama dengan 0, tuliskan 'Nice work, detective! You got all villains: ' + vill
// 5. jika nyawa sama dengan 0, tuliskan 'Ooops, you lose. You just got ' + vill + ' villains'

function kasitau(input){
  var nyawa = 3;
  var vill = 0;
  for(var i=0; i<input.length; i++){
    if(input[i]==='@'){
      nyawa--;
    } else if(input[i]==='Villain' && nyawa!==0){
      vill++;
    }
  }
  if(nyawa!==0){
    return 'Nice work, detective! You got all villains: ' + vill
  } else {
    return 'Ooops, you lose. You just got ' + vill + ' villains'
  }
}

console.log(kasitau(['*', '*', '@', '*', 'Villain', '*',  '@', 'Villain']));
console.log(kasitau(['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain',  '@', 'Villain']));
