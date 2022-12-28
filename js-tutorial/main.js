/*
Types of Datas in Js

1.Primitive Data
    - Number
    - String
    - Boolean
    - Undefinined
    - Null
    - Symbol
2.Complex data
    - Function
    - Object
*/

//Number type
var a = 1;
var b = 2;
var c = 3;

//String type
var myName = 'KaoMing';

//Boolean type
var isSuccess = true;

//Undefined type
var smtUndefined;
var hello = 'HelloWorld';

//Null
var isNull = null;

//Symbol type
var id = Symbol('id'); //Unique
var id1 = Symbol('id1'); //Unique

//Function
var myFunction = function() {
    alert('HelloWorld');
}
console

//Object types
var myObject = {
    name: 'KaoMing',
    age: '21',
    address: 'Hanoi',
    myFunction: function () {

    }
};

var myArray = [
    'This',
    'is',
    'my',
    'array'
];

//Check types of data
console.log(typeof myArray);

//Tests
var a = 1;
var b = 2;
var c = 3;

if ((a > 0) && (b > 1)){
    console.log(true);
}else{
    console.log(false);
}

function writeLog (){
    var myString = '';
    for (var param of arguments) {
        console.log(param)
    }
}

// writeLog('Log1', 'Log2', 'Log3', 'Log4');

// var someString = ('Biet gi dau hoi lam gi?');

// console.log(someString);

var games = [
    'dota',
    'league',
    'valorant',
    'cs:go',
]
console.log(games.toString());//convert array to string
console.log(games.pop());//delete the last element and return that element on the concole
console.log(games.join());//like toString but you can add smt between elements
console.log(games.push);//add more elements at the end of array
console.log(games.shift);//delete the first element and return that element on the concole
console.log(games.unshift);//add more element at the start of an array
console.log(games.splice);//delete any element in a given index pos and can be add more elements on to it
console.log(games.concat);//add array to array
console.log(games.slice);//cut array in a given index pos

//Object
function User(firstname, lastname, avatar){
    this.firstname = firstname;
    this.lastname = lastname;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstname} ${this.lastname}`;
    }
}

var author = new User('Cao', 'Minh', 'Avatar');
var User = new User('Some', 'one', 'Avatar');

author.title = 'Just a comment';
User.comment = 'Im commenting smt';

console.log(author.getName());
console.log(User.getName());

// function getNextYear(){
//     return new Date().getFullYear() + 1;
// }

// console.log(getNextYear())

// function getRandomItem(number){
//     return number[(Math.floor(Math.random() * number.length))]
// }
// console.log(getRandomItem([1, 2, 3, 4]));

// function run(a) {
//     if (a % 3 === 0){
//         return 1;
//     }else if(a % 5 === 0){
//         return 2;
//     }else if(a % 15 ===0){
//         return 3;
//     }
// }

// console.log(run(3)) // 1
// console.log(run(5)) // 2
// console.log(run(15)) // 3


let item = {
    name: 'Javascript',
    coin: 150
}

const result = item.coin > 0 ? `${item.coin} Coins` : 'Its free';
console.log(result);

function getTotal(arr) {
    var sum = 0;
    var arrLength = arr.length;
    for(var i = 0; i < arrLength; i++) {
        sum += arr[i];
    }
    return sum;
}

var myString = 'JavaScript';
for (var key in myString){
    console.log (myString[key]);
}