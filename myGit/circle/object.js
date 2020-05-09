(function() {
  
    var delay = 100,
             i = 0,
        startTimer = function (pixels) {
          
          var elem = document.getElementById('circlee'),
              bottom = elem.offsetTop;
         
         if ((pixels > 0 && bottom > 250) ||(pixels < 0 && bottom < 50)){
          clearInterval(timer);
    
          timer = setInterval(function () {
    
           startTimer(pixels * -1);
            }, delay);
    
            }
    
         elem.style.top = bottom + pixels + 'px';      
          i++;
        
    
    };
    var timer = setInterval(function () {
    
      startTimer(20);
    }, delay);
    
    //var timer = setTimeout(startTimer, delay);
})();