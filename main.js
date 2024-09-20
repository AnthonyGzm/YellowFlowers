onload = () =>{
        document.body.classList.remove("container");
};

document.addEventListener("DOMContentLoaded", function() {
        const message = document.querySelector('.flower-message');
    
        setTimeout(() => {
            message.style.opacity = '0'; // Desvanecer el mensaje
            setTimeout(() => {
                message.style.display = 'none'; // Ocultar el mensaje completamente
            }, 500); // Tiempo para completar la animación de desvanecimiento
        }, 10000); // Tiempo en milisegundos antes de que comience a desaparecer (10 segundos)
    });