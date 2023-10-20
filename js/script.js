const marcador = document.getElementById("marcador");
const fondo_juego = document.getElementById("fondo_juego");

let random = Math.floor(Math.random()*50);
let postLeft;
let posTop;
const inicioJuego = (event) => {
    
    
    if(random >= 5){
        marcador.textContent = random;
        for(let i = 0; i < random; i++){
        
            do{
                postLeft = Math.floor(Math.random() * (fondo_juego.clientWidth - 90));
                posTop = Math.floor(Math.random() * (fondo_juego.clientHeight - 90));

            }while(!validarPosiciones(postLeft, posTop));
            
            let mosca = document.createElement("IMG");
            mosca.src = "./imagenes/mosca.png";
            mosca.setAttribute(
                "style",
                "position:absolute; left:" + postLeft + "px; top:"+
                posTop + "px"
            ) 
            fondo_juego.appendChild(mosca)

        } 
    }else{

        window.location.reload();
        
    }
}
const validarPosiciones = (postLeft, posTop) => {

    let posCorrecta = true;
    let moscas = fondo_juego.querySelectorAll("IMG");
    let i = 0;

    while(i < moscas.length && posCorrecta){
        //obtenemos la posicion de cada una de las moscas que tenemos
        moscaLeft = parseInt(moscas[i].style.left);
        moscaTop = parseInt(moscas[i].style.top);
        if(
            postLeft + 80 < moscaLeft ||
            postLeft - 80 > moscaLeft ||
            posTop + 80 < moscaTop ||
            posTop - 80 > moscaTop
        ){
            posCorrecta = true;

        }else{

            posCorrecta = false;
        }
        i++;

    }
    return posCorrecta;
}

const pulsarMosca = (event) => {

    let element = event.target;

    if(element.nodeName === "IMG"){
        if(marcador.textContent > 1){
            element.remove()
            marcador.textContent -= 1 
        }else{
            window.location.reload(); 
        }
        
    }
}

fondo_juego.addEventListener("click", pulsarMosca);
document.addEventListener("DOMContentLoaded", inicioJuego);