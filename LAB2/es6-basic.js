var str = "Hello World !!!"
console.log(str);
 
number =10; 
{
    let number = 22;
    console.log(number);

}
console.log(number);
{
    const number = 10;
   // number = 15;


}
function add(a, b) {
    let c = a+b;
    return c;

}
let result = add(5,3);
console.log(result);

const addFn = (a,b) => a+ b;
result = addFn(10, 15);
console.log(result)

const conCatArr = cars.concat(rname);
console.log(conCatArr.toString());

//spread operator
const catArr = [...cars, ...rname];
console.log(catArr);

//iteration
const keys = cars.keys();
let text = "";
for(x of keys){
    text += x;
}
console.log(text);

cars.forEach(cat);
function cat(value, index, array) {
  text += value;
}
console.log(text);

cars.map(addVal)
function addVal(value) {
    return value + "<br>";
}

const numbers = [10, 20, 30];
const over10 =numbers.filter(over10fn);
function over10fn(value) {
    return value > 10;
}
console.log(over10);

let sum = numbers.reduce(addFn);
function addFn(total , value){
    return total + value;
}
console.log(sum);

let boolOver10 = numbers.every(over10fn);
console.log(boolOver10);
boolOver10 = numbers.some(over10fn);
console.log(boolOver10);

let first = numbers.find(over10fn);
console.log(first);
let firstKey = numbers.findIndex(over10fn);
console.log(firstKey);

const alphabet = Array.from("ABCDEF");
console.log(alphabet);

