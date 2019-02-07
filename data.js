const product = require('/index.js');
const mongoose = require('mongoose');

//randomizer helper functon
function generateRandomNumber(min, max) {
  let randomNumber = Math.random() * (max - min) + min;
  return Math.floor(randomNumber);
}

function randomItemInArray(array) {
  return array[generateRandomNumber(0,array.length)];
}

//store data
let productsAll = [];

//populate obj 
function populateData() {
  let productName = ["fannel","jeans","leggings", "scarf","jeggings"];
  let productKeywords = ["shirt", "pants", "accessory", "shoes", "socks"];
  let productURL = ['foo1',
                    'foo2', 
                    'foo3',
                    'foo4',
                    ]

  for (i = 1; i < 100; i++){
    var schemaObj = 
                  {
                    "id": 1,
                    "name": "Shirt",
                    "price": 6.99,
                    "url": "asdf",
                    "qty": 99,
                    "keywords": "shirt, red,"
                  }
    schemaObj.id = i;
    schemaObj.name = randomItemInArray(productName);
    schemaObj.keywords = randomItemInArray(productKeywords);
    schemaObj.url = randomItemInArray(productURL);
    productsAll.push(schemaObj); //[{}]
  }
}

//forEach in feed data into Db
function savingDB(){
  productsAll.forEach((pro) => {//the individual product
    pro.save();//save into database

    //db.mDB.insert({"name" : "some string"})
  });
}

savingDB();