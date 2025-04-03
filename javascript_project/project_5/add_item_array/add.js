
let array=[];
function add(){
    let input=document.getElementById("input").value;
    array.push(input);
    document.getElementById("input").value=" ";

}
function display(){

    let result=document.getElementById("result");
   result.innerHTML=`${array.join()}`;

}


    
    


