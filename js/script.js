const marcador = document.getElementById("marcador");
const fondo_juego = document.getElementById("fondo_juego");


const inicioJuego = (event) => {
    let random = Math.floor(Math.random()*50);
    
    if(random >= 5){
        marcador.textContent = random;
        for(let i = 0; i < random; i++){
        
            let mosca = document.createElement("IMG");
            mosca.src = "./imagenes/mosca.png";
            let postLeft = Math.floor(Math.random() * (fondo_juego.clientWidth - mosca.width));
            let posTop = Math.floor(Math.random() * (fondo_juego.clientHeight - mosca.height));
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

const pulsarMosca = (event) => {

    let element = event.target;

    if(element.nodeName === "IMG"){
        console.log(event)
    }

}

fondo_juego.addEventListener("click", pulsarMosca);
document.addEventListener("DOMContentLoaded", inicioJuego);