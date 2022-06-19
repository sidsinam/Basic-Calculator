const input = document.getElementById("input");
function display(s){
    input.value += s;
}
function result(s){
    //display(s);
    input.value += s;
}

function del(){
    input.value= input.value.slice(0,-1);
}

function delall(){
    input.value = "";

}
function calculate(){
    input.value = eval(input.value);
}
// function sin(){
//     display("Sin");
// }

// function cos(){
//     display("Cos");
// }