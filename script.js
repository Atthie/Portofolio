
const menu = document.querySelector('.menu-icone');
const gauche =document.querySelector('.fleche-gauche');
const droite =document.querySelector('.fleche-droite');
const closeModal=document.querySelector('.close-modal');
const envoyer =document.querySelector('.envoyer');
let non = document.getElementById('#nom');
let usermail = document.querySelector('#email').value;
let message = document.querySelector('#message').value;
const slide = ["p1.jpg", "p2.png", "p3.png"];
let visibility='visibility:hidden'

let numero = 0;
///////////////// Script du menu en mode telephone //////////////////////////////////////////////////////////////////////
menu.addEventListener('click',() =>{
    const lien =document.querySelector('.lien');
    const visibility =lien.getAttribute('style');
    if (visibility == 'visibility: hidden;') {
        lien.style.visibility='visible';
    }else{
        lien.style.visibility='hidden';
    }
})
//////////////////////////////// function ChangeSlide //////////////////////////////////////////////////////////////////
function ChangeSlide(direction) {
    numero = numero + direction;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.querySelector(".slide").src = slide[numero];
}

////////////////////////// Script d'envoi du mail //////////////////////////////////////////////////////////////////////
envoyer.addEventListener('click',()=>{
   
    var templateParams = {
        email: usermail.value,
        message:message.value,
        nom: nom.value,
    };
    emailjs.send('service_c6qtdan', 'template_wyhgq2p', templateParams)
        .then(function(response) {
            modal(visibility);
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        }); 

})
//////////////////////////////Function modal/////////////////////////////////////

function modal(visibil) {
    let modal = document.getElementById("modal");
    modal.setAttribute('style',visibil);
    modal.style.visibility = modal.style.visibility == "visible" ? "hidden" : "visible";
}