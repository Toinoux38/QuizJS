let a, b, choix, c, compteur;

let score = 0;

let compteurtf = 1
for (let el of document.getElementsByClassName("answer btn")) {

  el.addEventListener("click", (e) => {
		
    if (el.value === "true") {
      document.getElementById("result").innerText = "Bonne réponse !"
      compteurtf = 0
      document.getElementById("score").innerText = ++score
    } else {
      document.getElementById("result").innerText = "Mauvaise réponse ..."
      compteurtf = 0
    }
		
    for (let btn of document.getElementsByClassName("answer btn")) {
      btn.disabled = true
    }
  })
}



const questionSelect = document.getElementById("html-select");
const answerElement = document.getElementById("answer2");


questionSelect.addEventListener("change", selection);
let compteursel = 1
function selection(event) {
  let choice = event.target.value;
  if (compteursel === 1){
  if (choice === "choix3") {
    answerElement.innerText = "Bonne réponse ! +1"
    document.getElementById("score").innerText = ++score
    compteursel = 0
    document.getElementById("compteur1").innerHTML = "Votre score est actuellement de " +  compteur;
  } else {
    answerElement.innerText = "Mauvaise réponse ..."
    compteursel = 0
  }
}
else{
  answerElement.innerText = "Vous ne pouvez répondre qu'une seule fois !"
}
}

let compteurrad = 1
function radioButton() { 
  if(compteurrad === 1){
  if(document.getElementById('img1').checked) { 
      document.getElementById("affiche").innerHTML 
          = "Bonne réponse ! +1" 
          document.getElementById("score").innerText = ++score
          document.getElementById("compteur1").innerHTML = "Votre score est actuellement de " +  compteur;
          compteurrad = 0 
  } 
  else if(document.getElementById('img2').checked) { 
      document.getElementById("affiche").innerHTML 
          = "Mauvaise réponse..." 
          compteurrad = 0  
  } 
  else if(document.getElementById('img3').checked) { 
      document.getElementById("affiche").innerHTML 
          = "Mauvaise réponse..." 
          compteurrad = 0  
  } 

  else { 
      document.getElementById("erreur").innerHTML 
          = "Oula il manque une réponse là"; 
        
  }
 compteurrad = 0}
} //Je sais pas pourquoi ça marche, mais bon. On transforme un bug en une feature, c'est bien non ? xD
let compteurcheck = 1
function checkboxes() {  
  if(compteurcheck === 1){
  if(document.getElementById('ind2').checked && document.getElementById('ind3').checked ) { 
      document.getElementById("affiche1").innerText 
          = "Bonne réponse ! +1"
      document.getElementById("score").innerText = ++score
      compteurcheck = 0
      document.getElementById("compteur1").innerHTML = "Votre score est actuellement de " + compteur;
  } 
  else { 
      document.getElementById("faux1").innerText 
          = "Mauvaise réponse..."; 
          compteurcheck = 0
  } 
}
  else{
    document.getElementById("faux1").innerText 
          = "Vous ne pouvez répondre qu'une fois !"; 
  }
}

let compteurform = 1 
function Formulaire() {
if(compteurform === 1){
  if(document.getElementById('algo').value === "3"){
     document.getElementById("affiche2").innerText  = "Bonne réponse ! +1"
     document.getElementById("score").innerText = ++score
     compteurform = 0
     if(score <= 2){document.getElementById("final").innerText  = "Votre score total est de " + score +"/5, va peut-être falloir commencer a réviser..."}
  if(score === 5){document.getElementById("final").innerText  = "Votre score total est de " + score +"/5, est-ce Elon-musk qui est devant cet écran ? GG !"}
  if(score === 3){document.getElementById("final").innerText  = "Votre score total est de " + score +"/5, boarf c'est pas trop mal, t'es capable de mieux !"}
  if(score === 4){document.getElementById("final").innerText  = "Votre score total est de " + score +"/5, tout proche de la perfection, comme mon ortografe !"}

    

  }
  else { 
    document.getElementById("faux2").innerText 
        = "Mauvaise réponse...";
        compteurform = 0
        if(score <= 2){document.getElementById("final").innerText  = "Votre score total est de " + score +"/5, va peut-être falloir commencer à réviser..."}
  if(score === 5){document.getElementById("final").innerText  = "Votre score total est de " + score +"/5, est-ce Elon-musk qui est devant cet écran ? GG !"}
  if(score === 3){document.getElementById("final").innerText  = "Votre score total est de " + score +"/5, boarf c'est pas trop mal, t'es capable de mieux !"}
  if(score === 4){document.getElementById("final").innerText  = "Votre score total est de " + score +"/5, tout proche de la perfection, comme mon ortografe !"}

} }
else{
  document.getElementById("faux2").innerText 
          = "Vous ne pouvez répondre qu'une fois !";
}
}


  


