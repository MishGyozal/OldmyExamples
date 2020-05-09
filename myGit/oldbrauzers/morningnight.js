(function() {
    let buttons = document.getElementsByTagName('button');
    let  len = buttons.length;
    for (let i = 0; i < len;i++) {
        buttons[i].onclick =  function (e) {
            e.returnValue = false;
            let elem = e.srcElement;
            if (elem.id === 'day') {
              document.body.className = 'day';
            }  else if (elem.id === 'night'){
              document.body.className = 'night';
            }
        };
    };
})();