var display = document.getElementsByTagName('p');
var keyboard = document.querySelector('.keyboard')
var buttons = Array.from(keyboard.children);
buttons.forEach((button)=>{
    button.onclick = (value)=>{
        var val = button.value;
        var input = display[1].innerHTML +=val;
        if(val=="clear"){
            display[1].innerHTML ="";
            display[0].innerHTML ="";
        }
        else if(val ==""){
            display[1].innerHTML = display[1].innerHTML.substr(0, display[1].innerHTML.length-1);
        }
        else if(val == "equal"){
            input = input.substr(0, input.length -5);
            var result = eval(input);
            display[0].innerHTML = input;
            display[1].innerHTML = result;
        }
    }
})
