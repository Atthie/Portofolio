const menu = document.querySelector('.menu-icone');
const gauche =document.querySelector('.fleche-gauche');
const droite =document.querySelector('.fleche-droite');
const slide = ["p1.jpg", "p2.png", "p3.png"];
let numero = 0;
menu.addEventListener('click',() =>{
    const lien =document.querySelector('.lien');
    const visibility =lien.getAttribute('style');
    if (visibility == 'visibility: hidden;') {
        lien.style.visibility='visible';
    }else{
        lien.style.visibility='hidden';
    }
})

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.querySelector(".slide").src = slide[numero];
    console.log(numero);
}
