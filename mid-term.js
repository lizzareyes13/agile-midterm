//challenge 1

function transformFirstAndLast(array){
  var list = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
  var returns = {};
  var key = array[0];
  var value = array[array.length-1];
  returns[key] = value;
  return returns;
}
var obj = transformFirstAndLast(list);

obj;

//challenge 2
function getAllKeys(obj){
  var results = [];
  for(var keys in obj){
    keys.push(x);
  }
  return results;
}

var obj = {
  name : 'Sam',
  age : 25,
  hasPets : true

  // a : 'a',
  // number : 11,
  // hungry : true,
  // grammyWins : 1
};

var output = console.log(getAllKeys(obj));
output;


//challenge 3
var obj = [
  key: [1,2,3]
];

function getElementsGreaterThan10AtProperty(obj, key) {
  var array = [];
  if(array.length === 0 || array.length <= 10
    || /*property at given key is not array*/
    || /*no property at key*/ ) {
    return "[]";
  }
  return array;
}

var output = console.log(getElementsGreaterThan10AtProperty(obj,key));
output;


//challenge 4

closures can be useful in creating a private timer because it saves things onto the global memory and makes things accessible.

//challenge 5
"Aurelio De Rosa" will get printed onto the console.
