import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



window.addEventListener("DOMContentLoaded",() => {
  let cardGenearator= document.querySelector("#cards")
  
  let randomNumber = Math.floor(Math.random()*12)+1

  let naipes = ""

  switch (randomNumber) {
    case 1:
      naipes= 
        `<div class="container border shadow  bg-white rounded  position-relative d-flex align-items-center justify-content-center" style="width: 300px; height: 400px;">
        <container class="position-absolute top-0 start-0  ms-3 mt-2">
          <p style="font-size: 70px">♣</p>
        </container>
        <div class="text-white">
          <h1 class="display-1 m-0 text-black fw-bolder">3</h1>
        </div>
        <container class="position-absolute bottom-0 end-0  mb-2 me-3">
          <p style="font-size: 70px">♣</p>
        </container>
      </div>`  
      break;
    case 2:
    naipes = 
       `<div class="container border shadow  bg-white rounded  position-relative d-flex align-items-center justify-content-center" style="width: 300px; height: 400px;">
        <container class="position-absolute top-0 start-0  ms-3 mt-2">
          <p style="font-size: 70px">♣</p>
        </container>
        <div class="text-white">
          <h1 class="display-1 m-0 text-black fw-bolder" >J</h1>
        </div>
        <container class="position-absolute bottom-0 end-0  mb-2 me-3">
          <p style="font-size: 70px">♣</p>
        </container>
      </div>`  
      break;
      case 3:
      naipes = 
       `<div class="container border shadow  bg-white rounded  position-relative d-flex align-items-center justify-content-center" style="width: 300px; height: 400px;">
        <container class="position-absolute top-0 start-0  ms-3 mt-2">
          <p style="font-size: 70px">♣</p>
        </container>
        <div class="text-white">
          <h1 class="display-1 m-0 text-black fw-bolder">K</h1>
        </div>
        <container class="position-absolute bottom-0 end-0  mb-2 me-3">
          <p style="font-size: 70px">♣</p>
        </container>
      </div>`  
      break;
      case 4:
      naipes = 
       `<div class="container border shadow  bg-white rounded  position-relative d-flex align-items-center justify-content-center" style="width: 300px; height: 400px;">
        <container class="position-absolute top-0 start-0  ms-3 mt-2">
          <p style="font-size: 70px;color: red">♥</p>
        </container>
        <div class="text-white">
          <h1 class="display-1 m-0 fw-bolder" style="color: red;">8</h1>
        </div>
        <container class="position-absolute bottom-0 end-0  mb-2 me-3">
          <p style="font-size: 70px;color: red">♥</p>
        </container>
      </div>`  
      break;
      case 5:
      naipes = 
       `<div class="container border shadow  bg-white rounded  position-relative d-flex align-items-center justify-content-center" style="width: 300px; height: 400px;">
        <container class="position-absolute top-0 start-0  ms-3 mt-2">
          <p style="font-size: 70px;color: red">♥</p>
        </container>
        <div class="text-white">
          <h1 class="display-1 m-0  fw-bolder" style="color: red;">Q</h1>
        </div>
        <container class="position-absolute bottom-0 end-0  mb-2 me-3">
          <p style="font-size: 70px;color: red">♥</p>
        </container>
      </div>`  
      break;
      case 6:
      naipes = 
      `<div class="container border shadow  bg-white rounded  position-relative d-flex align-items-center justify-content-center" style="width: 300px; height: 400px;">
        <container class="position-absolute top-0 start-0  ms-3 mt-2">
          <p style="font-size: 70px;color: red">♥</p>
        </container>
        <div class="text-white">
          <h1 class="display-1 m-0  fw-bolder" style="color: red;">9</h1>
        </div>
        <container class="position-absolute bottom-0 end-0  mb-2 me-3">
          <p style="font-size: 70px;color: red">♥</p>
        </container>
      </div>`  
      break;
      case 7:
      naipes = 
      `<div class="container border shadow  bg-white rounded  position-relative d-flex align-items-center justify-content-center" style="width: 300px; height: 400px;">
        <container class="position-absolute top-0 start-0  ms-3 mt-2">
          <p style="font-size: 70px;color: red">♦</p>
        </container>
        <div class="text-white">
          <h1 class="display-1 m-0  fw-bolder" style="color: red;">1</h1>
        </div>
        <container class="position-absolute bottom-0 end-0  mb-2 me-3">
          <p style="font-size: 70px;color: red">♦</p>
        </container>
      </div>`  
      break;
      case 8:
      naipes = 
      `<div class="container border shadow  bg-white rounded  position-relative d-flex align-items-center justify-content-center" style="width: 300px; height: 400px;">
        <container class="position-absolute top-0 start-0  ms-3 mt-2">
          <p style="font-size: 70px;color: red">♦</p>
        </container>
        <div class="text-white">
          <h1 class="display-1 m-0  fw-bolder" style="color: red;">A</h1>
        </div>
        <container class="position-absolute bottom-0 end-0  mb-2 me-3">
          <p style="font-size: 70px;color: red">♦</p>
        </container>
      </div>`  
      break;
      case 9:
      naipes = 
      `<div class="container border shadow  bg-white rounded  position-relative d-flex align-items-center justify-content-center" style="width: 300px; height: 400px;">
        <container class="position-absolute top-0 start-0  ms-3 mt-2">
          <p style="font-size: 70px;color: red">♦</p>
        </container>
        <div class="text-white">
          <h1 class="display-1 m-0  fw-bolder" style="color: red;">6</h1>
        </div>
        <container class="position-absolute bottom-0 end-0  mb-2 me-3">
          <p style="font-size: 70px;color: red">♦</p>
        </container>
      </div>`  
      break;
      case 10:
      naipes= 
        `<div class="container border shadow  bg-white rounded  position-relative d-flex align-items-center justify-content-center" style="width: 300px; height: 400px;">
        <container class="position-absolute top-0 start-0  ms-3 mt-2">
          <p style="font-size: 70px">♠</p>
        </container>
        <div class="text-white">
          <h1 class="display-1 m-0 text-black fw-bolder">A</h1>
        </div>
        <container class="position-absolute bottom-0 end-0  mb-2 me-3">
          <p style="font-size: 70px">♠</p>
        </container>
      </div>`  
      break;
      case 11:
      naipes= 
        `<div class="container border shadow  bg-white rounded  position-relative d-flex align-items-center justify-content-center" style="width: 300px; height: 400px;">
        <container class="position-absolute top-0 start-0  ms-3 mt-2">
          <p style="font-size: 70px">♠</p>
        </container>
        <div class="text-white">
          <h1 class="display-1 m-0 text-black fw-bolder">5</h1>
        </div>
        <container class="position-absolute bottom-0 end-0  mb-2 me-3">
          <p style="font-size: 70px">♠</p>
        </container>
      </div>`  
      break;
      case 12:
      naipes= 
        `<div class="container border shadow  bg-white rounded  position-relative d-flex align-items-center justify-content-center" style="width: 300px; height: 400px;">
        <container class="position-absolute top-0 start-0  ms-3 mt-2">
          <p style="font-size: 70px">♠</p>
        </container>
        <div class="text-white">
          <h1 class="display-1 m-0 text-black fw-bolder">2</h1>
        </div>
        <container class="position-absolute bottom-0 end-0  mb-2 me-3">
          <p style="font-size: 70px">♠</p>
        </container>
      </div>`  
  }
    cardGenearator.innerHTML= naipes
  
  })
  

  

 



