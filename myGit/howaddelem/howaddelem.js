(function(){
  
   let elem = document.createElement("p");
   let wrappedP = document.getElementById("wrapped");
   elem.innerHTML = '<i><u><strong> Add dynamic element</strong></u></i>';
   //elem.setAttribute('id','medynamic');  // give  element id
   //elem.id = 'medynamic';     // another version give id
   //wrappedP.parentNode.appendChild(elem); // add after element
   wrappedP.parentNode.insertBefore(elem,wrappedP); // add before element
   //wrappedP.parentNode.removeChild(wrappedP); //delete
   // wrappedP.parentNode.replaceChild(elem,wrappedP); //change
    
  })();