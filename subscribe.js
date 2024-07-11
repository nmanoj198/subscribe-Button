function subscribe(){
    var status = document.getElementById("button").value;
    console.log(status);
    if(status=="Subscribe"){
    document.getElementById("button").value="Subscribed";
    document.getElementById("button").style.backgroundColor="darkgray";
    }
    else{
    document.getElementById("button").value="Subscribe";
    document.getElementById("button").style.backgroundColor="red";
    }
}

function scaleUp(){
    document.getElementById("button").style.transform="scale(1.1)";
}
function scaleDown(){
    document.getElementById("button").style.transform="scale(1)";
}

