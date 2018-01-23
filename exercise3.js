/*Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter
berupa string dan number. Parameter pertama merupakan memberId dan parameter ke-2
merupakan value uang yang dibawa oleh member tersebut.

Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

Sepatu brand Stacattu seharga 1500000
Baju brand Zoro seharga 500000
Baju brand H&N seharga 250000
Sweater brand Uniklooh seharga 175000
Casing Handphone seharga 50000
Buatlah function yang akan mengembalikan sebuah object dimana object tersebut berisikan
informasi memberId, money, listPurchased dan changeMoney.

Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
Jika uang yang dimiliki kurang dari 50000 maka tampilkan "Mohon maaf, uang tidak cukup"
Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu
dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.
Contoh jika inputan memberId: '324193hDew2' dan money: 700000

maka output:

{ memberId: '324193hDew2', money: 700000, listPurchased: [ 'Baju Zoro', 'Sweater Uniklooh' ],
changeMoney: 25000 }
*/

// 1. jika member id kosong atau undefined atau money undefined, tuliskan 'Mohon maaf,
//    toko X hanya berlaku untuk member saja'
// 2. jika uang kurang dari 50000, tuliskan 'Mohon maaf, toko X hanya berlaku untuk member saja'
//   2a. atau jika tidak, lanjutkan kode
//     2aa. inisialisasi array multidimensi berisi nama barang dan harga
//     2ab. inisialisasi array kosong
//     2ac. inisialisasi object literal
//     2ad. inisialisasi obj.memberId adalah memberId
//     2ae. inisialisasi obj.money adalah money
//     2af. buat looping untuk membaca array multidimensi berdasarkan money
//       2afa. jika money lebih besar atau sama dengan index ke-1 dari array ke-i index ke-1, kurangkan
//             money dengan index ke-1 dari array ke-i, kemudian push index ke-0 dari array ke-i
//     2ag. inisialisasi obj.listPurchased adalah array baru
//     2ah. inisialisasi obj.chargeMoney adalah money(hasil terakhir dari looping)
//     2ai. tampilkan object

function shoppingTime(memberId, money) {
  console.log('-------------------');
  if(memberId==='' || undefined || money===undefined){
    console.log('Mohon maaf, toko X hanya berlaku untuk member saja');
  } else {
    if(money<50000){
      console.log('Mohon maaf, uang tidak cukup');
    } else {
      var merek = [ ['Sepatu Stacattu', 1500000], ['Baju Zoro', 500000], ['Baju H&N', 250000],
                    ['Sweater Uniklooh', 175000], ['Casing Handphone', 50000] ];
      var arr = [];
      var obj = {};
      obj.memberId = memberId;
      obj.money = money;
      for(var i in merek){
        if(money>=merek[i][1]){
          money -= merek[i][1];
          arr.push(merek[i][0]);
        }
      }
      obj.listPurchased = arr;
      obj.chargeMoney = money;
      console.log(obj);
    }
  }
  console.log('-------------------');
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
