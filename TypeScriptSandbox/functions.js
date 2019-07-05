var getSum = function (num1, num2) {
    return num1 + num2;
};
console.log(getSum(1, 2));
//The Question Mark makes the type optional
var getName = function (firstName, lastName) {
    if (lastName === undefined)
        return firstName;
    return firstName + " " + lastName;
};
console.log(getName("Ben"));
var returnNothing = function () {
    return undefined || null;
};
