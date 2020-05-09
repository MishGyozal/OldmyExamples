var i;
var arr=[1,2,4],
    len=arr.length;

//for( i=0;i<10;i++){
//console.log(i);
//};

// cikl for in

var obj = {
  propp:'one',
  proppsecond:'two'
},
    
prop;

for (prop in obj){
  if(obj.hasOwnProperty(prop)){
    console.log(prop + ':' + obj[prop]);
  }
  
}
//cikl while


var k=0
while(k<10){
  console.log(k++);
};

//cikl do while
var h = 0;
do{
  console.log(h++);
}while(h<10);