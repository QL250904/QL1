const colorSet = new Set();

colorSet.add('Red');
colorSet.add('Blue');
colorSet.add('Green');
colorSet.add('Red'); 

console.log(colorSet.size); 

console.log(colorSet.has('Blue')); 

colorSet.delete('Green');

colorSet.forEach((color) => {
    console.log(color);
});
