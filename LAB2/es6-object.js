//es6-object.js
let preson = {
    name "Phattaraphon",
    age:20,
    eyecolor: "black",
    function () => {
        return ${preson name} : ${preson.age;};
    },
};

const x = person;
x age = 30;
console.log(person.age);
console.log(x.fullname());

function addFn(...num) {
    let sum = 0;
    for (value of num) sum += perseInt(value);
    return sum;
}
console.log(addFn(10,20,30,40));

//destructuring
const [a,b] = [10,20,30];
console.log(b);

const {name:rName,age}= person;
console.log(rName)