function getNumber(num){
    var result=document.getElementById("result");
    result.value +=num;
}

function back(){
    var result=document.getElementById("result");
    var e= result.value;
    e=e.substring(0, e.length-1);
    result.value= e;
}

function clearResult(){
    var result=document.getElementById("result");
    result.value = " ";
}


function setResult(){
    var result=document.getElementById("result");
    result.value= eval(result.value);

}