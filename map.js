const colorMap = new Map();

colorMap.set('Red', 5);
colorMap.set('Blue', 12);
colorMap.set('Green', 8);

console.log(colorMap.get('Blue')); 

console.log(colorMap.has('Red')); 

colorMap.delete('Green');

console.log(colorMap.has('Green')); 
colorMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
