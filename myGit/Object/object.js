var obj = {
    csccv : 'str',
    func : function() {
      console.log(this.csccv);
    }
  };
  
  var prop = 'func';
  
  console.log(typeof obj.csccv || 'name');
  
  obj.ddd = "gag 9";
  obj.csccv = "banana";
  console.log(obj);
  
  var a = {bro: 1}, b = {bro: 2}, c = {bro: 3};
  
  
  
  a = b = c ={bro: 'new'}
  
  console.log(a,b,c );
  
  var y = obj;
  
  console.log(y.ddd);
  
  //delete obj.func;
  //console.log(obj);
  
  obj.func();
  
  var MYAPP = {
    
  };