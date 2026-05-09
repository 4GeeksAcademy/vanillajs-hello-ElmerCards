import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



window.onload = function () {
  //write your code here 

  let randomNumber = Math.floor(Math.random()*12)+1

  let simbols = document.querySelectorAll(".simbolos") 

  let cards = document.querySelector("#cartas")

  let diseños = ["♦", "♥", "♠", "♣"];
  
  let carga = Math.floor(Math.random()* diseños.length)

  let cargaDeEstilos = diseños[carga]
  
  
  cards.innerHTML = randomNumber 

  let colorFinal = "";
  if (cargaDeEstilos === "♥" || cargaDeEstilos === "♦") {
      colorFinal = "red";
  } else {
      colorFinal = "black";
  }
  
  cards.style.color = colorFinal; 

  simbols.forEach(simbolo => {
    simbolo.innerHTML = cargaDeEstilos;
    simbolo.style.color = colorFinal;
  });

}

  

  

 



