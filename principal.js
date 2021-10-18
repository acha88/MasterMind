// Tableau de couleur
var tColor = ["","Green","Blue", "Red", "Yellow" ];
// pour stocker les  solutions - 
var tSolution = [0,0,0,0,0];
var Solution = "";
// compteur nombre essai
var iNbEssai = 0;

// retirer affichage btn rejouer
document.getElementById('btnRejouer').style.display="none";


// Générer  la solution :
for (let index = 1; index < 5; index++) {
    var iNombre = Math.floor(Math.random() *4) +1;
    if (iNombre == 5) {
        tSolution[index] = 4;
    }
    else {
        tSolution[index] = iNombre;
    }
    switch (tSolution[index]) {
        case 1:
            Solution += "Vert "; 
            break;
        case 2:
            Solution += "Bleu ";
            break;
        case 3:
            Solution += "Rouge ";
            break;
        case 4:
            Solution += "Jaune ";
        default:
            break;
    };
}

// stocker la proposition
var tProposition = [0,0,0,0,0];

// les fonctions
function colorOK(iColor) {
    var str_Color="";
    if (iColor==1) {
        str_Color="Vert"
    } else if (iColor == 2) {
        str_Color="Bleu"
    } else if (iColor == 3) {
        str_Color="Rouge"
    } else if (iColor == 4) {
        str_Color="Jaune"
    }
    return str_Color;
}

// couleur des boutons
function action_au_click1() {
    if (document.getElementById("btnColor1").tag == 1) {
        document.getElementById("btnColor1").style.backgroundColor = "#0B3FCE";
        document.getElementById("btnColor1").tag++;
        
    } else if (document.getElementById("btnColor1").tag == 2) {
        document.getElementById("btnColor1").style.backgroundColor = "#F80022";
        document.getElementById("btnColor1").tag++;
    } else if (document.getElementById("btnColor1").tag == 3) {
        document.getElementById("btnColor1").style.backgroundColor = "#FFD300";
        document.getElementById("btnColor1").tag++;
    }else{
        document.getElementById("btnColor1").style.backgroundColor = "#0E9100";
        document.getElementById("btnColor1").tag = 1;
    }
};
function action_au_click2() {
    if (document.getElementById("btnColor2").tag == 1) {
        document.getElementById("btnColor2").style.backgroundColor = "#0B3FCE";
        document.getElementById("btnColor2").tag++;
    } else if (document.getElementById("btnColor2").tag == 2) {
        document.getElementById("btnColor2").style.backgroundColor = "#F80022";
        document.getElementById("btnColor2").tag++;
    }  else if (document.getElementById("btnColor2").tag == 3) {
        document.getElementById("btnColor2").style.backgroundColor = "#FFD300";
        document.getElementById("btnColor2").tag++;
    }else {
        document.getElementById("btnColor2").style.backgroundColor = "#0E9100";
        document.getElementById("btnColor2").tag = 1;
    }
};
function action_au_click3() {
    if (document.getElementById("btnColor3").tag == 1) {
        document.getElementById("btnColor3").style.backgroundColor = "#0B3FCE";
        document.getElementById("btnColor3").tag++;
    } else if (document.getElementById("btnColor3").tag == 2) {
        document.getElementById("btnColor3").style.backgroundColor = "#F80022";
        document.getElementById("btnColor3").tag++;
    }  else if (document.getElementById("btnColor3").tag == 3) {
        document.getElementById("btnColor3").style.backgroundColor = "#FFD300";
        document.getElementById("btnColor3").tag++; 
    }else {
        document.getElementById("btnColor3").style.backgroundColor = "#0E9100";
        document.getElementById("btnColor3").tag = 1;
    }
};
function action_au_click4() {
    if (document.getElementById("btnColor4").tag == 1) {
        document.getElementById("btnColor4").style.backgroundColor = "#0B3FCE"; // bleu
        document.getElementById("btnColor4").tag++;
    } else if (document.getElementById("btnColor4").tag == 2) {
        document.getElementById("btnColor4").style.backgroundColor = "#F80022"; // rouge
        document.getElementById("btnColor4").tag++;
    }  else if (document.getElementById("btnColor4").tag == 3) {
        document.getElementById("btnColor4").style.backgroundColor = "#FFD300"; // Jaune
        document.getElementById("btnColor4").tag++;
    } else {
        document.getElementById("btnColor4").style.backgroundColor = "#0E9100"; // Vert
        document.getElementById("btnColor4").tag = 1;
    }
};
// Proposition 
var action_au_click_valider = function () {
    // on vien de faire un essai de +
    iNbEssai++;

    tProposition[1] = document.getElementById('btnColor1').tag;
    tProposition[2] = document.getElementById('btnColor2').tag;
    tProposition[3] = document.getElementById('btnColor3').tag;
    tProposition[4] = document.getElementById('btnColor4').tag;
    
    document.getElementById("resultat").innerHTML += "\n" + "Essai numéro :"+iNbEssai+ " :";
    for (let index = 1; index < 5; index++) {
        document.getElementById("resultat").innerHTML += colorOK(tProposition[index]) + " -";
        //document.getElementById('resultat').innerHTML += tColor[tProposition[index]] + " - ";
    }
// sauvegarder la solution
var tSolutionREC = [0,0,0,0,0];
    for (let index = 0; index < 5; index++) {
        tSolutionREC[index] = tSolution[index];
    }
// Compter les bien placés
var iNbBP = 0;
    for (let index = 1; index < 5; index++) {
        if (tSolutionREC[index]== tProposition[index]) {
            iNbBP++;
            tSolutionREC[index]=98;
            tProposition[index]=99;
        }  
    }
// compter les mal placés 
// prendre tous les éléments de la solution
var iNbMP = 0;
for (let i = 1; i < 5; i++) {
    // les comparer avec tous les éléments
    for (let j = 0; j < 5; j++) {
        if (tProposition[i] == tSolutionREC[j]) {
            iNbMP++;
            tSolutionREC[j]=98;
            tProposition[i]=99;
        } else {
            // rien
        }
    }
}   
// Partie gagnée
    if (iNbBP == 4) {
        alert("Bravo vous avez gagner !");
        document.getElementById('BtnRejouer').style.display="block";
    } else {
        document.getElementById("resultat").innerHTML += "Vous avez "+ iNbBP + " bien placé(s)" + " et " + iNbMP + " mal placé(s) </br>";
        if (iNbEssai == 10) {
            alert("Vous avez perdu !");
            document.getElementById("affichage").innerText = "La solution était : " + Solution;
            document.getElementById("btnValider").style.display="none";
            document.getElementById("btnRejouer").style.display="block";
        }
    }
}

var action_au_click_rejouer = function () {
    location.reload();
}

var btnColor1 = document.getElementById('btnColor1');
btnColor1.addEventListener("click", action_au_click1, false);
var btnColor2 = document.getElementById('btnColor2');
btnColor2.addEventListener("click", action_au_click2, false);
var btnColor3 = document.getElementById('btnColor3');
btnColor3.addEventListener("click", action_au_click3, false);
var btnColor4 = document.getElementById('btnColor4');
btnColor4.addEventListener("click", action_au_click4, false);

var btnValider = document.getElementById('btnValider');
btnValider.addEventListener("click", action_au_click_valider, false);
var btnRejouer = document.getElementById('btnRejouer');
btnRejouer.addEventListener("click", action_au_click_rejouer, false);

// chronomètre
var sp = document.getElementsByTagName("span");
var btnStart=document.getElementById("btnStart");
var btnStop=document.getElementById("btnStop");
var t;
var ms=0,s=0,min=0,h=0;
   
/*La fonction "start" démarre un appel répétitive de la fonction update_chrono par une cadence de 100 milliseconde en utilisant setInterval et désactive le bouton "start" */

function start(){
   t =setInterval(update_chrono,100);
   btnStart.disabled=true;
}
/*La fonction update_chrono incrémente le nombre de millisecondes par 1 <==> 1*cadence = 100 */
function update_chrono(){
    ms+=1;
    /*si ms=10 <==> ms*cadence = 1000ms <==> 1s alors on incrémente le nombre de secondes*/
       if(ms==10){
        ms=1;
        s+=1;
       }
       /*on teste si s=60 pour incrémenter le nombre de minute*/
       if(s==60){
        s=0;
        min+=1;
       }
       if(min==60){
        min=0;
        h+=1;
       }
/*afficher les nouvelle valeurs*/
sp[0].innerHTML=h+" h";
sp[1].innerHTML=min+" min";
sp[2].innerHTML=s+" s";
sp[3].innerHTML=ms+" ms";
}
/*on arrête le "timer" par clearInterval ,on réactive le bouton start */
function stop(){
    clearInterval(t);
    btnStart.disabled=false;
}
/*dans cette fonction on arrête le "timer" ,on réactive le bouton "start" et on initialise les variables à zéro */
function reset(){
    clearInterval(t);
    btnStart.disabled=false;
    ms=0,s=0,min=0,h=0;
    
/*on accède aux différents span par leurs indice*/
sp[0].innerHTML=h+" h";
sp[1].innerHTML=min+" min";
sp[2].innerHTML=s+" s";
sp[3].innerHTML=ms+" ms";
}


var btnStart = document.getElementById('btnStart');
btnStart.addEventListener("click", start, false);
var btnPause = document.getElementById('btnPause');
btnPause.addEventListener("click", stop, false);
var btnStop = document.getElementById("btnStop");
btnStop.addEventListener("click", reset, false);