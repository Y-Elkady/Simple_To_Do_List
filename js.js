var arrtodo=[];
var numOfTask=[];
var count=1;
function add(){
    var todo=document.getElementById("todo").value;
    arrtodo.push(todo);
    numOfTask.push(count++);
    console.log(arrtodo);

    display();
}

function display(){
    var result="";
    var countTask="";

    for(var i=0;i<arrtodo.length;i++){
        result += "<div>"+arrtodo[i] + "<Button onclick='remove("+i+")' id='remove' class='btn btn-success'>DONE</Button><br><br></div>";
    }
    for(var i=0;i<arrtodo.length;i++){
        countTask += numOfTask[i] + "<br> <br>";
    }
        document.getElementById("tasks").innerHTML=result;
        document.getElementById("num").innerHTML=(countTask);
}


function remove(i){
    // arrtodo.splice(i, 1);
    arrtodo.pop(i);
    display();
}

function removeAll(){
    arrtodo=[];
    // arrtodo.length = 0;
    display();
}