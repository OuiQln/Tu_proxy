let productName = ["fannel","jeans","leggings", "scarf","jeggings"];
let productKeywords = ["shirt", "pants", "accessory", "shoes", "socks"];

let productUrl = ['foo1',
                  'foo2', 
                  'foo3',
                  'foo4',
                  ]

var schemaObj = 
{
  "id": 000001,
  "name": "Shirt",
  "price": 6.99,
  "url": "asdf",
  "qty": 99,
  "keywords": "shirt, red,"
}

let productsAll = [];
//randomizer helper functon
function generateRandomNumber(min, max) {
  let randomNumber = Math.random() * (max - min) + min;
   return Math.floor(randomNumber);
}

function randomItemInArray(array) {
   return array[generateRandomNumber(0,array.length)];
}

//populate obj 
for (i = 1; i < 100; i++){
  schemaObj.id = i;
  schemaObj.name = randomItemInArray(productName);
  schemaObj.keywords = randomItemInArray(productKeywords);

  productsAll.push(schemaObj); //[{}]
}


// [
//   {
//     "id": 000001,
//     "name": "Shirt",
//     "price": 6.99,
//     "url": "asdf",
//     "qty": 99,
//     "keywords": "shirt, red,"
//   },
//   {
//     "id": 000002,
//     "name": "Shirt",
//     "price": 7.99,
//     "url": "asdf",
//     "qty": 99,
//     "keywords": "shirt, red,"
//   },
//   {
//     "id": 000003,
//     "name": "Shirt",
//     "price": 6.99,
//     "url": "asdf",
//     "qty": 99,
//     "keywords": "shirt, red,"
//   },
//   {
//     "id": 000004,
//     "name": "Shirt",
//     "price": 6.99,
//     "url": "asdf",
//     "qty": 99,
//     "keywords": "shirt, red,"
//   },
//   {
//     "id": 000005,
//     "name": "Shirt",
//     "price": 6.99,
//     "url": "asdf",
//     "qty": 99,
//     "keywords": "shirt, red,"
//   },
//   {
//     "id": 000006,
//     "name": "Shirt",
//     "price": 6.99,
//     "url": "asdf",
//     "qty": 99,
//     "keywords": "shirt, red,"
//   },
//   {
//     "id": 000007,
//     "name": "Shirt",
//     "price": 6.99,
//     "url": "asdf",
//     "qty": 99,
//     "keywords": "shirt, red,"
//   },
//   {
//     "id": 000008,
//     "name": "Shirt",
//     "price": 6.99,
//     "url": "asdf",
//     "qty": 99,
//     "keywords": "shirt, red,"
//   },
//   {
//     "id": 000009,
//     "name": "Shirt",
//     "price": 6.99,
//     "url": "asdf",
//     "qty": 99,
//     "keywords": "shirt, red,"
//   },
//   {
//     "id": 000010,
//     "name": "Shirt",
//     "price": 6.99,
//     "url": "asdf",
//     "qty": 99,
//     "keywords": "shirt, red,"
//   },
//   {
//     "id": 000011,
//     "name": "Shirt",
//     "price": 6.99,
//     "url": "asdf",
//     "qty": 99,
//     "keywords": "shirt, red,"
//   },
//   {
//     "id": 000001,
//     "name": "Shirt",
//     "price": 6.99,
//     "url": "asdf",
//     "qty": 99,
//     "keywords": "shirt, red,"
//   },
//   {
//     "id": 000001,
//     "name": "Shirt",
//     "price": 6.99,
//     "url": "asdf",
//     "qty": 99,
//     "keywords": "shirt, red,"
//   },

// ]