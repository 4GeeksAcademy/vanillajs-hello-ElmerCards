import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



window.onload = function () {
  //write your code here 

  let simbols = document.querySelectorAll(".simbolos") 

  let cards = document.querySelector("#cartas")

  let diseños = ["♦", "♥", "♠", "♣"];

  let specialCards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "J", "Q", "K"] 

  let estructuraSpecialCards = Math.floor(Math.random()*specialCards.length)
  
  let carga = Math.floor(Math.random()* diseños.length)

  let cargaDeEstilos = diseños[carga] 
  
  let cargaSpecialCards = specialCards[estructuraSpecialCards]
  
  cards.innerHTML = cargaSpecialCards

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

  

  

 



