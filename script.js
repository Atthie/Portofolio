const menu = document.querySelector('.menu-icone');
menu.addEventListener('click',() =>{
    const lien =document.querySelector('.lien');
    const visibility =lien.getAttribute('style');
    if (visibility == 'visibility: hidden;') {
        lien.style.visibility='visible';
    }else{
        lien.style.visibility='hidden';
        
    }
})