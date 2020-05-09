var numbers = document.querySelectorAll(".number"),
	operations = document.querySelectorAll(".operation"),
    decimalBtn = document.getElementById('decimal'),
    clearBtns = document.querySelectorAll(".clearbtn"),

    resultBtn = document.getElementById('result'),
    homeworkBtn = document.getElementById('inc'),
    display = document.getElementById('display'),
    memoryCurrentNumber = 0,
    memoryNewNumber = false ,
   memoryPendingOperation = '' ,
    operationlistt = document.getElementById('operationlist');



for (var i=0; i<numbers.length; i++) {
    var number = numbers[i];
    number.addEventListener('click',function(e){
      numberPress(e.target.textContent);
    });
};



for (var i=0; i<operations.length; i++) {
    var operationBtn = operations[i];
    operationBtn.addEventListener('click',function(e){
      operation(e.target.textContent);
    });
};


for (var i=0; i<clearBtns.length; i++) {
    var clearBtn = clearBtns[i];
    clearBtn.addEventListener('click',function(e){
     clear(e.target.textContent);
      
    });
};




resultBtn.addEventListener('click', function(e){
     result(e.target.textContent);
      
    });
homeworkBtn.addEventListener('click',function(e){
     homework(e.target.textContent);
      
    });

    

decimalBtn.addEventListener('click', function(e){
     decima(e.target.textContent);
      
    });







function numberPress(number){
  if(memoryNewNumber){
    display.value = number;
    memoryNewNumber = false;
  }else{
    if(display.value === '0'){
        display.value = number;
      }
      else{
        display.value += number; 
      };   
      };
   };

function operation(oper) {
 var localoperationmemory = display.value;
  
  
  if (memoryNewNumber && memoryPendingOperation !== '=' ){
    display.value = memoryCurrentNumber ;
  }else{
    memoryNewNumber = true;
    if (memoryPendingOperation === '+'){
      memoryCurrentNumber += parseFloat(localoperationmemory);
    } else if (memoryPendingOperation ==='-'){
       memoryCurrentNumber -= parseFloat(localoperationmemory);
    }else if (memoryPendingOperation ==='*'){
       memoryCurrentNumber *= parseFloat(localoperationmemory);
    }else if (memoryPendingOperation ==='/'){
       memoryCurrentNumber /= parseFloat(localoperationmemory);
    }else {
      memoryCurrentNumber = parseFloat(localoperationmemory);
    };
    display.value = memoryCurrentNumber;
    memoryPendingOperation = oper;
  };
};

function decima(ket) {
  var localDecimalmemory = display.value;
  if (memoryNewNumber){
    localDecimalmemory = '0.';
    memoryNewNumber = false;
  }else{
    if (localDecimalmemory.indexOf('.') === -1){
       localDecimalmemory += '.';
    };
   
  };
  display.value = localDecimalmemory;
};

function clear(id) {
  if (id === 'ce'){
    display.value = '0';
    memoryNewNumber = true;
  }else if (id === 'c'){
     display.value = '0';
    memoryNewNumber = true;
    memoryCurrentNumber = 0;
     memoryPendingOperation = ''; 
   
  }
   console.log('GNGUMENQ ' + id + "  OV"   );
	
};


function homework(argument) {
  for (var i=0; i<operations.length; i++){
   var newLi = document.creatElement('li');
   var  operationText = operations[i].value;  
      newLi.innerText = operationText;
      operationlist.appendChild(newLi);
  };
  
  
	  console.log('howworkBtn click'  );
};