function comecar(){
    var name = document.getElementById("exampleForControlInput1").value;

    show(name);
}

function show(nome){
    document.getElementById("nomePrint").textContent = none;
    var div = document.getElementById("selects-div");
    if(nome && nome.trim() !== ""){
        div.style.display = "block"
        document.getElementById("exampleFormControlInput1").style.background = "none";
    }else{
        document.getElementById("error").style.display = "flex";

    }

}

function fechar(){
    document.getElementById("error").style.display = "none";
    document.getElementById("exampleFormControlInput1").style.background = "black";
}