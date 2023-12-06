let stack = [];

stack.push("Google");
stack.push("Instagram");
stack.push("YouTube");

console.log(stack.pop());
stack.push("Amazon");
console.log(stack);

stack = [];

stack.unshift("Create New File");
stack.unshift("Resized File");
stack.unshift("Cloned Out Wrinkle");

console.log(stack);

stack.shift();

console.log(stack);
