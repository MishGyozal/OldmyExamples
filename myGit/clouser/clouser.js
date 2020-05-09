let index;
var firstfunc = function(){
        index = 6;
        return function(){
            return index;
        };
    } ;
  
  var secondfunc = function(){
      index = 13;
  var oldindex = firstfunc()();
    if (oldindex > index){
        alert('old number is bigger');
    }else
    {
      alert('new number is bigger');
    };
    
  };
  secondfunc();