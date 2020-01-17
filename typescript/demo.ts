const hello : string = "Hello World!";
console.log(hello);

let decLiteral: number = 6;
console.log(decLiteral);


let u_name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ u_name }.I'll be ${ age + 1 } years old next month.`;
console.log(sentence);

let list: number[] = [1, 2, 3];
let type_list: Array<number> = [1, 2, 3];


// 元组
let x: [string, number];
x = ['hello', 10]; // OK
//x = [10, 'hello']; // Error