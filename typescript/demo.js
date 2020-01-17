var hello = "Hello World!";
console.log(hello);
var decLiteral = 6;
console.log(decLiteral);
var u_name = "Gene";
var age = 37;
var sentence = "Hello, my name is " + u_name + ".I'll be " + (age + 1) + " years old next month.";
console.log(sentence);
var list = [1, 2, 3];
var type_list = [1, 2, 3];
// 元组
var x;
x = ['hello', 10]; // OK
//x = [10, 'hello']; // Error
x[2] = 'world'; // OK, 字符串可以赋值给(string | number)类型
console.log(x[2]);
