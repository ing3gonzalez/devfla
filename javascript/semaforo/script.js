document.write('<h1 style=""> Bienvenido al Semaforo JS </h1>')
/*
//var apagado = new Image(100, 200);
//apagado.src = 'img/apagado.png';
document.write("<img src='img/apagado.png' >");

//var verde = new Image(100, 200);
//verde.src = 'img/verde.png';
document.write("<img src='img/verde.png' >");

//var amarillo = new Image(500, 500);
//amarillo.src = 'img/amarillo.png';
document.write("<img src='img/amarillo.png' >");

//var rojo = new Image(100, 200);
//rojo.src = 'img/rojo.png';
document.write("<img src='img/rojo.png' >");
*/
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'img/apagado.png';
imgArray[0].id = 'mainImage';

imgArray[1] = new Image();
imgArray[1].src = 'img/verde.png';
imgArray[1].id = 'mainImage';

imgArray[2] = new Image();
imgArray[2].src = 'img/amarillo.png';
imgArray[2].id = 'mainImage';

imgArray[3] = new Image();
imgArray[3].src = 'img/rojo.png';
imgArray[3].id = 'mainImage';

let timerId = setInterval(() => nextImage(), 1000);
setTimeout(() => { clearInterval(timerId); nextImage(); }, 4000);


function nextImage(){
  var img = document.getElementById("mainImage");
  for(var i = 0; i < imgArray.length;i++){
     if(imgArray[i].src == img.src){
          if(i === imgArray.length){
              document.getElementById("mainImage").src = imgArray[0].src;
              break;
          }
         document.getElementById("mainImage").src = imgArray[i+1].src;
        break;
     }

  }
}


var img = document.getElementById("ciclo");
  for(var i = 0; i < imgArray.length;i++){
     if(imgArray[i].src == img.src){
          if(i === imgArray.length){
              document.getElementById("ciclo").src = imgArray[0].src;
              break;
          }
         document.getElementById("ciclo").src = imgArray[i+1].src;
        break;
     }

  }
  
//https://www.delftstack.com/es/howto/javascript/javascript-array-of-images/
//https://keepcoding.io/blog/metodos-settimeout-y-setinterval-en-javascript/
