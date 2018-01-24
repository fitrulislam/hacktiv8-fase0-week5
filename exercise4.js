/*Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis barang
yang terjual pada hari itu.

Barang-barang SALE yang akan dihitung penjualannya:

Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1
Function akan menerima array yang berisikan object pembeli (nama pembeli, barang yang
  ingin dibeli dan jumlah barang yang dibelinya). Jika stock barang kurang dari jumlah yang
  ingin dibeli oleh pembeli maka pembeli batal untuk membeli barang tersebut.

Function countProfit akan mengembalikan/me-return sebuah array of object dimana array tersebut
berisi objek-objek barang dari toko X tersebut yang berisikan info nama barang, siapa saja yang
membeli, sisa stock barang dan total pemasukan untuk barang tersebut
*/

function countProfit(shoppers) {
  console.log('--------------------');
  var listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  if(shoppers.length===0){
    return shoppers;
  } else {
    var arrObj = [];
    for(var i in listBarang){
      var obj = {}
      var arr = [];
      var countProduct = 0;
      obj.product = listBarang[i][0];
      for(var j in shoppers){
        if(shoppers[j].product===listBarang[i][0]){
          arr.push(shoppers[j].name);
          countProduct += shoppers[j].amount;
        }
      }
      if(countProduct > listBarang[i][2] && arr.length>1){
        var buyer = arr[0];
        for(var k in shoppers){
          if(shoppers[k].name===buyer){
            obj.shoppers = [buyer];
            obj.leftOver = listBarang[i][2] - shoppers[k].amount;
            obj.totalProfit = listBarang[i][1] * shoppers[k].amount;
          }
        }
      } else if(countProduct > listBarang[i][2]){
        obj.shoppers = [];
        obj.leftOver = listBarang[i][2];
        obj.totalProfit = 0;
      } else {
        obj.shoppers = arr;
        obj.leftOver = listBarang[i][2] - countProduct;
        obj.totalProfit = listBarang[i][1] * countProduct;
      }
      arrObj.push(obj);
      // console.log(countProduct);
    }
    return arrObj;
  }
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
