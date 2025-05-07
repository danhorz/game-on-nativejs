const goku={
    nombre:'GOKU',
    vida:500,
    porcetajevida:100,
    ataque1:"golpe 10",
    ataque2:"Kamehameha 15",
    ataque3:"Genkidama 30",
}
const vegeta={
    nombre:'VEGETA',
    vida:500,
    porcetajevida:100,
    ataque1:"golpe 10",
    ataque2:"Ataque big ban 15",
    ataque3:"Final Flash 30",
}

const luchadores=[];

const main=document.querySelector("main");
const playerSelection=document.querySelector("#persona1-eleccion");
const playerAuto=document.querySelector("#persona2-eleccion");
main.style.background='black';

const vozvegeta = new Audio('./assets/vegetavoz.mp3');
const vozgoku = new Audio('./assets/gokuvoz.mp3');
let personaje_seleccionado="";
/* */


/* Seleccion */
const botonGoku=document.getElementById("goku");
botonGoku.addEventListener('click',function(){
vozgoku.play();
playerSelection.textContent='';
playerAuto.textContent=''  
playerSelection.textContent='GOKU';
playerAuto.textContent='VEGETA'
});
const botonVegeta=document.getElementById("vegeta");
botonVegeta.addEventListener('click',function(){

vozvegeta.play();
playerSelection.textContent='';
playerAuto.textContent=''  
playerSelection.textContent='VEGETA';
playerAuto.textContent='GOKU'
});



const template=document.getElementById("combate");
const botonJugar=document.querySelector("#jugar");



botonJugar.addEventListener('click',function(){
    personaje_seleccionado=playerSelection.textContent;
    main.style.background='url("./assets/img.jpg")';
    main.style.backgroundRepeat='no-repeat';
    main.style.backgroundSize='cover'; 

    main.innerHTML="";
    
    
    
    textdata=template.content.cloneNode(true);
    main.appendChild(textdata);
    const musicaFondo = new Audio('./assets/pelea.mp3');
    const golpeBasico = new Audio('./assets/golpeBasico.mp3');
    musicaFondo.play();
    let controlVida1=document.getElementById("controlVida1");
    let controlVida2=document.getElementById("controlVida2");
    const imgSelecionado=document.getElementById("img-p1");
    const imgOponente=document.getElementById("img-p2");
    const ataque1P1=document.getElementById("ataque1P1");
    const ataque2P1=document.getElementById("ataque2P1");
    const ataque3P1=document.getElementById("ataque3P1");
    
    
    const ataque1P2=document.getElementById("ataque1P2");
    const ataque2P2=document.getElementById("ataque2P2");
    const ataque3P2=document.getElementById("ataque3P2");
    let vida1=document.getElementById("numeroVidap1");
   
    let vida2=document.getElementById("numeroVidap2");
    
    if(personaje_seleccionado===goku.nombre){
        imgSelecionado.setAttribute('src', './assets/gokupelea.png');
        imgOponente.setAttribute('src', './assets/vegetapelea.png');
        ataque1P1.textContent=goku.ataque1;
        ataque2P1.textContent=goku.ataque2;
        ataque3P1.textContent=goku.ataque3;
        ataque1P2.textContent=vegeta.ataque1;
        ataque2P2.textContent=vegeta.ataque2;
        ataque3P2.textContent=vegeta.ataque3;
        
        vida1.textContent=goku.vida;
        vida2.textContent=vegeta.vida;
        controlVida1.style.width = `${goku.porcetajevida}%`;
        controlVida1.style.height='100%';
        controlVida1.style.backgroundColor="yellow";
        controlVida2.style.width = `${vegeta.porcetajevida}%`;
        controlVida2.style.height='100%';
        controlVida2.style.backgroundColor="yellow";
        
        

        ataque1P1.addEventListener('click',function(){
            golpeBasico.pause();
            golpeBasico.currentTime=0;
            vida2.textContent-=10;
            
            controlVida2.style.width=`${vegeta.porcetajevida-=2}%`;
            golpeBasico.play();
        })
        ataque2P1.addEventListener('click',function(){
            vida2.textContent-=15;
            controlVida2.style.width=`${vegeta.porcetajevida-=3}%`;
            
        })
        ataque3P1.addEventListener('click',function(){
            vida2.textContent-=30;
            controlVida2.style.width=`${vegeta.porcetajevida-=6}%`;
            
        })

        ataque1P2.addEventListener('click',function(){
            golpeBasico.pause();
            golpeBasico.currentTime=0;
            vida1.textContent-=10;
           
                controlVida1.style.width=`${goku.porcetajevida-=2}%`;
                golpeBasico.play();
            
            
        })
        ataque2P2.addEventListener('click',function(){
            vida1.textContent-=15;
            
            controlVida1.style.width=`${goku.porcetajevida-=3}%`;
            
               
               
        })
        ataque3P2.addEventListener('click',function(){
            vida1.textContent-=30;
          
                controlVida1.style.width=`${goku.porcetajevida-=6}%`;
            
           
        })

       

        /* AÑADIR UN CONTENEDOR AL MDEIO DEL TODO COMO GIF */

    }
    
});

