var myText = 'The clearInterval() method clears a timer set with the setInterval() method.',

i = 0,

myButton = document.getElementById('button');

myButton.onclick = function(){

'use strict';

var typeWriter = setInterval(() => {

    document.getElementById('type').textContent += myText[i];

    i = i + 1;

    if(i > myText.length - 1) {
        clearInterval(typeWriter);
    }
    
}, 100);


};