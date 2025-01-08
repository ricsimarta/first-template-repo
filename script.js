// console.log("hello world");

/* 
adat típusok:
1. primitívek
 - string
 - number / NaN
 - undefined
 - null
 - boolean
2. adat struktúrák
 - tömb
 - objektumok
*/

// string
let string1 = "code\ncool";
let string2 = 'kismacska';
let string3 = `kávé ${string2 + string1}`; // template literal -> template literal expression

// console.log(string1, string2, string3);

let num1 = 69;
let num2 = -69;
let num3 = NaN;
let num4 = "69";
// console.log(num1 / num4);

// console.log(2 + Number("2") - 2 / Number("2"))

// boolean
let truth = true;
let lie = false;

// tömb
let array = ["one", "two", "three"];
const constArray = ["one", "two", "three"];
let newArray = ["three", "two", "one"];

let array1 = ["string", 12, true, null, {}, []];
let array2 = [
  ["x", "o", "x"], 
  ["o", "x", "o"], 
  ["x", "o", "o"]
]; // two-dimension array

array[10] = "four";
// console.log(array[19]);
constArray[10] = "four";
// console.log(constArray);


//objektum
let obj1 = {
  "key1": "value1",
  "key2": 12,
  "key3": true,
  "key-4": [
    {
      name: "Ricsi",
      age: 30
    },
    {
      name: "Nem Ricsi",
      age: -30
    }
  ]
};

// console.log(obj1["key-4"][0]["age"]);
// console.log(obj1["key-4"][0].age);

let obj2 = {
  key3: true,
  key1: "value1",
  key2: 12,
  "key-4": "valami",
  key5: []
};

// console.log(obj1["key-4"]);
// console.log(obj1["key-4"]);

console.log(Object.keys(obj2))

for (const kismacska in obj2) {
  console.log(obj2[kismacska])
}

// console.log(kismacska)