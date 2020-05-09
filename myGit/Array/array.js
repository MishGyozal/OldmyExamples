var arr = [1,2 ,'str',{}];

var arr2 = new  Array(1,22,'str');

console.log(arr);
console.log(arr2);
console.log(arr[2]);

arr[6] = 'six';
console.log(arr);

console.log(arr[5]);

console.log(arr.length);

//delet xorurd cem tali undefineda sarqum


delete arr[1];
console.log(arr);
console.log(arr.length);


arr.splice(1,1);

console.log(arr);
console.log(arr.length);


arr[arr.length] = 'new';

console.log(arr);

var matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
]
console.log(matrix);

console.log(matrix[0][2]);

var newArr = arr.concat(matrix);

console.log(newArr);

console.log(arr.join(', '));

arr.push('new2');
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();

console.log(arr);

arr.unshift('up_new');

console.log(arr);

var reversearr =arr.reverse();

console.log(reversearr);

var sliced = arr.slice(1,4);

console.log(sliced);

console.log(arr);

console.log(arr.sort());