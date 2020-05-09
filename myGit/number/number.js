var tiv = 234.646,
    n = NaN,
    inf = Infinity;


document.write('<br>'+tiv.toFixed(2));
document.write('<br>'+tiv.toExponential());
document.write('<br>'+tiv.toPrecision(4));
document.write('<br>'+typeof tiv.toString(7));
document.write('<br>'+Math.sqrt(81));
document.write('<br>'+Math.pow(2, 5));
document.write('<br>'+Math.floor(tiv));
document.write('<br>'+Math.ceil(tiv));
document.write('<br>'+Math.round(tiv));
document.write('<br/>'+Math.PI);
document.write('<br>'+"9ddsc"* 2 + (24+34));
document.write('<br>'+ NaN === NaN);
document.write('<br>'+isNaN(n));
document.write('<br>'+1/0);
document.write('<br>'+-1/0);
document.write('<br>'+inf >5436656);
document.write('<br>'+inf+2343 > inf)