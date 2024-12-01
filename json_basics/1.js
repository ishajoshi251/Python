// JSON is a text format for storing and transporting data, Both JSON and XML can be used to receive data from a web server


// JavaScript has a built in function for converting JSON strings into JavaScript objects:JSON.parse()
// When receiving data from a web server, the data is always a string.
// Parse the data with JSON.parse(), and the data becomes a JavaScript object.

const obj1 = {
    name: "Alice",
    age: 25,
    isStudent: false,
    hobbies: ["reading", "gaming", "hiking"]
  };
const jsonString = JSON.stringify(obj1);
console.log(jsonString);
//'{"name":"Alice","age":25,"isStudent":false,"hobbies":["reading","gaming","hiking"]}'













