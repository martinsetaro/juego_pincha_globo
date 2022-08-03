let container = document.querySelector('.container');
let palabra_secreta=document.querySelector('.palabra_secreta');
let seleccionarLetra=document.querySelector('.seleccionarLetra');
let confirmarLetra = document.querySelector('.confirmar_letra');
let entrada = document.querySelector('.entrada');
let jardin = document.querySelector('.jardin');
let start = document.querySelector('.btn_comenzar')
let btn_start = document.querySelector('.btn_start')
let palabra_muestra = document.querySelector('.palabra_muestra');
let btn_recargar = document.querySelector('.btn_recargar');
let btn_comenzar = document.querySelector('.btn_comenzar');
let oportunidades = document.querySelector('.oportunidades');

let palabra ="TECLADO";
let wordSecret=[];
let contador = 2;
let oportunidad = palabra.length + 3;



start.addEventListener('click',()=>{
     jardin.style.backgroundImage = 'url("./img/escena1.png")';
     btn_comenzar.style.opacity=0;
     btn_recargar.style.display="block";
     for(let i =0;i< palabra.length;i++){
        wordSecret.push(palabra[i]);
        console.log(wordSecret)
    }
    
})


confirmarLetra.addEventListener('click',()=>{
    
    oportunidad = oportunidad - 1;
    oportunidades.textContent = oportunidad;
    
   buscarLetra();

   entrada.value = ""; 
    });

    function buscarLetra(){
     
      let intro = entrada.value.toUpperCase();

      const nuevaBusqueda = wordSecret.find(item => item === intro)

      if(nuevaBusqueda){
        palabra_muestra.textContent += intro;
        ganastes();
      }
      else
      {
        jardin.style.backgroundImage = `url("./img/escena${contador++}.png")`;
         perdistes(contador)

       
    }
}

    btn_recargar.addEventListener('click',()=>{
        location.reload();
    } ) 

    function perdistes(contador){
        if(contador === 7){
            Swal.fire({
                icon: 'error',
                title: 'Perdistes!',
                text: 'Tal vez tengas suerte la proxima!',
               
              })
            confirmarLetra.disabled = true;
            confirmarLetra.style.opacity = 0.5;
      }
    }

    function ganastes(){
        if(palabra_muestra.textContent === palabra){
            Swal.fire({
                icon: 'success',
                title: 'Ganaste!',
                text: 'Felicidades!',
               
              })
            confirmarLetra.disabled = true;
            confirmarLetra.style.opacity = 0.5;
        }
    }

   


    

 
    


    
    





