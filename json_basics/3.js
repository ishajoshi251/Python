
// In JSON, keys must be strings, written with double quotes:
// JSON object literals are surrounded by curly braces {}.
// JSON object literals contains key/value pairs.
// Keys and values are separated by a colon.
// Keys must be strings, and values must be a valid JSON data type:
// string, number, object, array, boolean, null
// Each key/value pair is separated by a comma.

console.log({"name":"John"});
console.log({"name":"John"}); // Key: string, Value: string

console.log({"employee":{"name":"John", "age":30, "city":"New York"}});
console.log({"employee":{"name":"John", "age":30, "city":"New York"}}); // Key: string, Value: object

console.log({"employees":["John", "Anna", "Peter"]});
console.log({"employees":["John", "Anna", "Peter"]}); // Key: string, Value: array

console.log({"sale":true});
console.log({"sale":true}); // Key: string, Value: boolean

