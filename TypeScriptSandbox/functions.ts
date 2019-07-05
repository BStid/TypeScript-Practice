const getSum = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(getSum(1, 2));

//The Question Mark makes the type optional
const getName = (firstName: string, lastName?: string): string => {
  if (lastName === undefined) return firstName;
  return `${firstName} ${lastName}`;
};
console.log(getName("Ben"));

const returnNothing = (): void => {
  return undefined || null;
};
