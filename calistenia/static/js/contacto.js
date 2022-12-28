const formulario = document.getElementById('contacto');
const inputs = document.querySelectorAll('#contacto input');


const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    tema: /^[a-zA-ZÀ-ÿ\s]{1,20}$/,
    mensaje: /^[a-zA-ZÀ-ÿ\s]{1,300}$/,
	telefono: /^\d{9}$/
}
const validarContacto = (e) => {
    switch(e.target.name) {
        case "nombre_input":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('nombre_input').classList.remove('is-invalid');
                document.getElementById('nombre_input').classList.add('is-valid');
            } else{
                document.getElementById('nombre_input').classList.add('is-invalid');
                document.getElementById('nombre_input').classList.remove('is-valid');
                document.querySelector('#nombre_form')
            }
        break;
        case "telefono_input":
            if(expresiones.telefono.test(e.target.value)){
                document.getElementById('telefono_input').classList.remove('is-invalid');
                document.getElementById('telefono_input').classList.add('is-valid');
            } else{
                document.getElementById('telefono_input').classList.add('is-invalid');
                document.getElementById('telefono_input').classList.remove('is-valid');
            }
        
        break;
        case "correo_input":
            if(expresiones.correo.test(e.target.value)){
                document.getElementById('correo_input').classList.remove('is-invalid');
                document.getElementById('correo_input').classList.add('is-valid');
            } else{
                document.getElementById('correo_input').classList.add('is-invalid');
                document.getElementById('correo_input').classList.remove('is-valid');
            }
        
        break;
        case "tema_input":
            if(expresiones.tema.test(e.target.value)){
                document.getElementById('tema_input').classList.remove('is-invalid');
                document.getElementById('tema_input').classList.add('is-valid');
            } else{
                document.getElementById('tema_input').classList.add('is-invalid');
                document.getElementById('tema_input').classList.remove('is-valid');
            }
        break;
        case "mensaje_input":
            if(expresiones.mensaje.test(e.target.value)){
                document.getElementById('mensaje_input').classList.remove('is-invalid');
                document.getElementById('mensaje_input').classList.add('is-valid');
            } else{
                document.getElementById('mensaje_input').classList.add('is-invalid');
                document.getElementById('mensaje_input').classList.remove('is-valid');
            }
        break;
    }
}
inputs.forEach((input) =>{
    input.addEventListener('keyup',validarContacto);
    input.addEventListener('blur',validarContacto);
    });

contacto.addEventListener('submit',(e) =>{
    e.preventDefault();
})

