function formTrainSeating(passengers) {
  var gerbA = [];
  var gerbB = [];
  var gerbC = [];
  var gerbD = [];
  var gerbE = [];
  var semua = [];
  for(var i=0; i<passengers.length; i++){
    if(passengers[i]==='A'){
      gerbA.push(passengers[i]);
    } else if (passengers[i]==='B'){
      gerbB.push(passengers[i]);
    } else if (passengers[i]==='C'){
      gerbC.push(passengers[i]);
    } else if (passengers[i]==='D'){
      gerbD.push(passengers[i]);
    } else {
      gerbE.push(passengers[i]);
    }
  }
  semua.push(gerbA, gerbB, gerbC, gerbD, gerbE);
  return semua;
}

console.log(formTrainSeating('ABDCCCE')); // [['A'], ['B'], ['C', 'C', 'C'], ['D'], ['E']]
console.log(formTrainSeating('ABC')); // [['A'], ['B'], ['C'], [], []]
console.log(formTrainSeating('E')); // [[], [], [], [], ['E']]
console.log(formTrainSeating('EAB')); // [['A'], ['B'], [], [], ['E']]
console.log(formTrainSeating('BBABB')); // [['A'], ['B', 'B', 'B', 'B'], [], [], []]
