
const contactForm = document.querySelector('#contact-form');
const submitBtn = document.querySelector('.submit-btn');
const inputName = document.querySelector('#name');
const inputMail = document.querySelector('#email');
const inputMessage = document.querySelector('#message');

const apiKey = 'aTgJhi2J0VH3rccjG';
const serviceId = 'service_9a8akrr';
const templateId = 'template_thks2cb';

emailjs.init(apiKey);

contactForm.addEventListener('submit', e => {
    e.preventDefault();
    // submitBtn.innerText = 'Just A MOMENTE....';
    // window.alert('Mensaje enviado correctamente')
    Swal.fire("El mensaje ha sido enviado, nos contactaremos a la brevedad!");
    const inputFields = {
        name: inputName.value,
        email: inputMail.value,
        message: inputMessage.value
    }

    emailjs.send(serviceId, templateId, inputFields)
    .then(() => {
        // submitBtn.innerText = "Mensaje enviado con exito"

        inputName.value = "";
        inputMail.value = "";
        inputMessage.value = "";
    }, (error) => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        // submitBtn.innerText = "algo salio mal";
    });
});

//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}