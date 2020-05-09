(function() {
  
    var elems = document.getElementsByTagName("p"),
        classelems = document.getElementsByClassName("para"),
        elemSelector = document.querySelector("p"),
        elemSelectorAll = document.querySelectorAll("p"),
        elemsindiv = document.querySelectorAll("div p"),
        idelementselector = document.querySelector("#for");
        
        //console.log(idelementselector);
        //console.log(elemsindiv);
        //console.log(elemSelector);
        //console.log(elemSelectorAll);
        //console.log(classelems);
        //console.log( idelem );
        //console.log(elemes);
     
    for (var i = 0, len = elems.length; i < len; i++ ) {
      //console.log( elems[i].tagName); 
      //console.log( elems[i].parentNode); 
      //console.log( elems[i].nextSibling.nextSibling); 
      //console.log( elems[i].previousSibling.nodeName); 
      //console.log( elems[i].previousSibling.tagName);
      //console.log( elems[i].nodeType); 
      //console.log( elems[i].previousSibling.nodeType);
    }
      //console.log(document.querySelector("div").childNodes);  
      //console.log(document.querySelector("div").children);
      //console.log(document.querySelector("div").lastChild);
      //console.log(document.querySelector("div").firstChild);
      //console.log(document.querySelector("div").innerHTML);
   })();