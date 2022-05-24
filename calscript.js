// function for clearing screen

function clearscreen(){
    document.getElementById("screen").value = "";

}

// function for display

function display(value){
    document.getElementById("screen").value += value;

}

// function to evaluate

function calculate(){
    var p = document.getElementById("screen").value;
    var q = eval(p);

    document.getElementById("screen").value = q;

}

