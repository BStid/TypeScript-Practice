// TypeScript Type Variables
let myString: string;
let myNumber: number;
let myBoolean: boolean;
let myVar: any;

let inlineStringDeclared: string = "This was declared on one line";

myVar = 5;
myBoolean = true;
myNumber = 22;
myString = `This number is ${myNumber}.`;

// TypeScript Type Arrays
let strArr: string[];
let numArr: number[];
let boolArr: boolean[];
let anyArr: any[];

strArr = ["Hello", "World"];
numArr = [3, 4, 5];
boolArr = [true, false, true];
anyArr = [1, "Hello", true, myString];

//Another Way to Define Arrays
let newStrArr: Array<string>;
let newNumArr: Array<number>;
let newBoolArr: Array<boolean>;
let newAnyArr: Array<any>;

newStrArr = ["One", "Two", "Three"];
newNumArr = [1, 2, 3];
newBoolArr = [true, false, true];
newAnyArr = [1, "two", false, numArr];

//Tuple
let strNumTuple: [string, number];
strNumTuple = ["Hello", 4];

//Void
let myVoid: void = undefined || null;
let myNull: null = null;
let myUndefined: undefined = undefined;

console.log(myVoid);
