//exercicio de Expressões regulares
const statement = "create table author (id number, name string, age number, city string, state string, coutry string)";
const regexp = /create table ([a-z]+) \((.+)\)/;
const parseStatement =statement.match(regexp);
const tableName = parseStatement[1];
let columns = parseStatement[2];
columns = columns.split(', ');

console.log(parseStatement);
console.log(statement);
console.log(tableName);
console.log(columns);
