//do while

var uz = 13;

do{
console.log('ok!');  
  uz = uz+1;
}while(uz<=10);

console.log(uz + ' aveli qan 10' );


var arr = [1,2,2,6,4,-212,321];
for(i=0,sum=0;i<arr.length;i++){
  if(arr[i] === 5 || arr[i]===1){
   continue;
  };
  sum+=arr[i];
};
console.log(sum);