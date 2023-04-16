document.addEventListener('DOMContentLoaded', function() {
    scrollHeader();
    scrollNav();
});

function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion a');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e){
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function scrollHeader(){
    const header = document.querySelector('#header');
    const enlaces = document.querySelectorAll('.link');
    const logo = document.querySelector('.logo');
    const guest = document.querySelector('#guest-info');
    
    window.addEventListener('scroll', function(){
        // console.log(guest.getBoundingClientRect());
        if(guest.getBoundingClientRect().bottom < 832){
            header.classList.add('stick','fixed-top', 'w-100', 'shadow', 'bg-white', 'text-warning', 'py-4');
            logo.classList.add('tag');
            logo.classList.remove('text-white');
            enlaces.forEach(enlace => {
                enlace.classList.add('tag');
                enlace.classList.remove('text-white');
            });
        }else{
            header.classList.remove('stick','fixed-top', 'w-100', 'shadow', 'bg-white', 'text-warning');
            logo.classList.remove('tag');
            logo.classList.add('text-white');
            enlaces.forEach(enlace => {
                enlace.classList.remove('tag');
                enlace.classList.add('text-white');
            });
        }
    });  
}


