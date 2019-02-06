// generate_random_load(50, 'test3', ['_id','user'], 4)

// Mongo > db.test3.find()
// { "_id" : "uNOK", "user" : "RlZS" }
// { "_id" : "tWHy", "user" : "xzGl" }
// { "_id" : "XUwH", "user" : "vySE" }
// { "_id" : "T8k0", "user" : "JMM2" }
// { "_id" : "H6R4", "user" : "HdZF" }
// .....

// function generate_random_load(count, collection_name, array_keys, key_size) {
//     for (var i = 0; i < count; i++) {
//         var document = {};
//         for (var j in array_keys) {
//             document[array_keys[j]] = random_string(key_size);
//         }
//         getDB("test").getCollection(collection_name).insert(document);
//     }
// }

// function random_string(len, charSet) {
//     charSet = charSet ||
//         "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     var randomString = "";
//     for (var i = 0; i < len; i++) {
//         var randomPoz = Math.floor(Math.random() * charSet.length);
//         randomString += charSet.substring(randomPoz, randomPoz + 1);
//     }
//     return randomString;
// }

// function getDB(db_name) {
//     return db.getMongo().getDB(db_name);
// }
const mongoose = require('mongoose');
const dummy = require('mongoose-dummy');
const ignoredFields = ['_id','created_at', '__v', /detail.*_info/];
let genderValues = ['Male', 'Female']
let schemaDefinition = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
    },
    birth_date: {
        type: Date
    },
    gender: {
        type: String,
        enum: genderValues
    },
    data: {
        type: Object,
        default: null
    },
    results: [
        {
            score: Number,
            course: Number
        }
    ],
    is_student: {
        type: Boolean
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId
    },
    detail: {
        main_info: String,
        some_info: String,
        none_match: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});
let model = mongoose.model('Student', schemaDefinition);
let randomObject = dummy(model, {
    ignore: ignoredFields,
    returnDate: true
})
console.log(randomObject);
