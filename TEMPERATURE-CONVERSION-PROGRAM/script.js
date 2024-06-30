let input = document.getElementById("i1");
let celsius = document.getElementById(`celsius`);
let fahrenheit = document.getElementById(`fahrenheit`);
let  result=0;
let F=false;
let C=false;
function calculate(){
    if (input.value==''){
        window.alert(`Write value in input!`);
        location.reload();
    }
    if(celsius.checked&&fahrenheit.checked){
        window.alert(`CHOOSE ONE OPTION!`)
        location.reload();
    }
    if(celsius.checked){
        C=true;
        result=((9/5)*Number(input.value))+32;
    }
    else if(fahrenheit.checked){
        F=true;
        result=(Number(input.value)-32)*(5/9);
    }
    else
    {
        window.alert(`Choose one option`);
        location.reload();
    }
    let newp = document.createElement('p');
    if(C) {
        newp.textContent = result.toFixed(2)+'°F';
    }
    else
        if(F){
            newp.textContent = result.toFixed(2)+'°C';

        }
    document.querySelector(`.container`).appendChild(newp);
}
function reset(){
    location.reload();
}