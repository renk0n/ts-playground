const Bob = {
    name: "Bob",
    age: 20,
    kasikosa: 50
}
Bob.kasikosa  = 55;
console.log(`彼の名前は${Bob.name}で${Bob.age}歳で偏差値は${Bob.kasikosa}です．`);

console.log(JSON.stringify(Bob,null,2));


