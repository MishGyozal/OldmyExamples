var str = '"String" is data type',
    str2 = "\"string\" is  data type",
    longstr = 'erkar mi text enq grum';

document.write(str);
document.write("<br>"+str2);
document.write("<br>"+longstr.length);
document.write("<br>" + 'hello ' + 'world');
document.write("<br>"+str2.concat(' panir'));


document.write("<br>"+str.charAt(1) );

document.write("<br>"+str.charCodeAt(1) );

document.write("<br>"+str.substring(3, 11) );

document.write("<br>"+str.slice(-5) );

document.write("<br>"+str.substr(12 , 4) );

document.write("<br>"+str.split(' ') );

document.write("<br>"+str.replace('string','number') );

document.write("<br>"+str.indexOf('a') );

document.write("<br>"+str.toUpperCase() );

document.write("<br>"+str.toLowerCase() );