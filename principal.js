var solution = [0,0,0,0];

function action_au_click1() {

    if (document.getElementById("btnColor1").tag == 1) {
        document.getElementById("btnColor1").style.backgroundColor = "#0B3FCE";
        document.getElementById("btnColor1").tag++;
        document.getElementById("resultat").innerText += document.getElementById("btnColor1").tag + "\n";
    } else if (document.getElementById("btnColor1").tag == 2) {
        document.getElementById("btnColor1").style.backgroundColor = "#F80022";
        document.getElementById("btnColor1").tag++;
        document.getElementById("resultat").innerText += document.getElementById("btnColor1").tag + "\n";
    } else if (document.getElementById("btnColor1").tag == 3) {
        document.getElementById("btnColor1").style.backgroundColor = "#FFD300";
        document.getElementById("btnColor1").tag++;
        document.getElementById("resultat").innerText += document.getElementById("btnColor1").tag + "\n";
    }else{
        document.getElementById("btnColor1").style.backgroundColor = "#0E9100";
        document.getElementById("btnColor1").tag = 1;
        document.getElementById("resultat").innerText += document.getElementById("btnColor1").tag + "\n";
    }

};
function action_au_click2() {

    if (document.getElementById("btnColor2").tag == 1) {
        document.getElementById("btnColor2").style.backgroundColor = "#0B3FCE";
        document.getElementById("btnColor2").tag++;
        document.getElementById("resultat").innerText += document.getElementById("btnColor2").tag + "\n";
    } else if (document.getElementById("btnColor2").tag == 2) {
        document.getElementById("btnColor2").style.backgroundColor = "#F80022";
        document.getElementById("btnColor2").tag++;
        document.getElementById("resultat").innerText += document.getElementById("btnColor2").tag + "\n";
    }  else if (document.getElementById("btnColor2").tag == 3) {
        document.getElementById("btnColor2").style.backgroundColor = "#FFD300";
        document.getElementById("btnColor2").tag++;
        document.getElementById("resultat").innerText += document.getElementById("btnColor2").tag + "\n";
    }else {
        document.getElementById("btnColor2").style.backgroundColor = "#0E9100";
        document.getElementById("btnColor2").tag = 1;
        document.getElementById("resultat").innerText += document.getElementById("btnColor2").tag + "\n";
    }

};

function action_au_click3() {

    if (document.getElementById("btnColor3").tag == 1) {
        document.getElementById("btnColor3").style.backgroundColor = "#0B3FCE";
        document.getElementById("btnColor3").tag++;
        document.getElementById("resultat").innerText += document.getElementById("btnColor3").tag + "\n";
    } else if (document.getElementById("btnColor3").tag == 2) {
        document.getElementById("btnColor3").style.backgroundColor = "#F80022";
        document.getElementById("btnColor3").tag++;
        document.getElementById("resultat").innerText += document.getElementById("btnColor3").tag + "\n";
    }  else if (document.getElementById("btnColor3").tag == 3) {
        document.getElementById("btnColor3").style.backgroundColor = "#FFD300";
        document.getElementById("btnColor3").tag++;
        document.getElementById("resultat").innerText += document.getElementById("btnColor3").tag + "\n"; 
    
    }else {
        document.getElementById("btnColor3").style.backgroundColor = "#0E9100";
        document.getElementById("btnColor3").tag = 1;
        document.getElementById("resultat").innerText += document.getElementById("btnColor3").tag + "\n";
    }

};

function action_au_click4() {

    if (document.getElementById("btnColor4").tag == 1) {
        document.getElementById("btnColor4").style.backgroundColor = "#0B3FCE";
        document.getElementById("btnColor4").tag++;
        document.getElementById("resultat").innerText += document.getElementById("btnColor4").tag + "\n";
    } else if (document.getElementById("btnColor4").tag == 2) {
        document.getElementById("btnColor4").style.backgroundColor = "#F80022";
        document.getElementById("btnColor4").tag++;
        document.getElementById("resultat").innerText += document.getElementById("btnColor4").tag + "\n";
    }  else if (document.getElementById("btnColor4").tag == 3) {
        document.getElementById("btnColor4").style.backgroundColor = "#FFD300";
        document.getElementById("btnColor4").tag++;
        document.getElementById("resultat").innerText += document.getElementById("btnColor4").tag + "\n";
    
    } else {
        document.getElementById("btnColor4").style.backgroundColor = "#0E9100";
        document.getElementById("btnColor4").tag = 1;
        document.getElementById("resultat").innerText += document.getElementById("btnColor4").tag + "\n";
    }

};


var btnColor1 = document.getElementById('btnColor1');
btnColor1.addEventListener("click", action_au_click1, false);
var btnColor2 = document.getElementById('btnColor2');
btnColor2.addEventListener("click", action_au_click2, false);
var btnColor3 = document.getElementById('btnColor3');
btnColor3.addEventListener("click", action_au_click3, false);
var btnColor4 = document.getElementById('btnColor4');
btnColor4.addEventListener("click", action_au_click4, false);