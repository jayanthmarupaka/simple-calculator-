
const display=document.getElementById("display")

function func(input){
    display.value +=input;
}

function clearfunc(){
    display.value="";
}

function cal(){
    try{
        display.value=eval(display.value);

    }
    catch(error){
        display.value="Error";
    }
}