// JavaScript also has a built in function for converting an object into a JSON string:
// JSON.stringify()
const jsonString = '{"name":"Alice","age":25,"isStudent":false,"hobbies":["reading","gaming","hiking"]}';
const obj = JSON.parse(jsonString);
console.log(obj);
// {
//   name: "Alice",
//   age: 25,
//   isStudent: false,
//   hobbies: ["reading", "gaming", "hiking"]
// }