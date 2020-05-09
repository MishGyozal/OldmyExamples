function funcDec (a,b){
    return a + b;
  }
  console.log(funcDec(7,2));
  
  var funcExp = function(a,b){
    return a + b;
    
  };
  console.log(funcExp(2,4));
  
  
  
  function func1(){
    function funcExample (){
      return 'one';
    }
   return funcExample();
    
  };
  
  console.log(func1());
  
  function func2(){
     var funcExample = function(){
      return 'two';
     }
     return funcExample();
  }
  
  console.log(func2());
  
  //het kanci funkcia
  
  var funtic = function(callback){
      var name = 'Ashot';
     return callback(name);
  };
  
  console.log(funtic(function(n){
    return 'Hi ' +n;
  }));
  
  
  
  var func11 = function() {
      return  function() {
       console.log('Hi');
      };
  };
  
  console.log(func11() );
  func11()() ;
  
  
  var proo = 1;
  (function(pro){
    console.log(pro);
    console.log('HI that self-invoking function javascript');
  })(proo);
  
  
  var funcarg = function(){

    let   sum = 0;
    for(let i=0; i<arguments.length; i++){
      sum += arguments[i];
    };
    return sum;
    
  }
  console.log(funcarg(9,7,23,32,43,-122));