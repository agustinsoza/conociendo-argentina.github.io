const contenido1 = document.getElementById("contenido1");
const contenido2 = document.getElementById("contenido2");
const contenido3 = document.getElementById("contenido3");
const contenido4 = document.getElementById("contenido4");
const contenido5 = document.getElementById("contenido5");
const fulImgBox = document.getElementById("fulImgBox");

fulImg = document.getElementById("fulImg");

function mostrar1(){
    contenido1.style.display = 'flex'
    contenido2.style.display = 'none'
    contenido3.style.display = 'none'
    contenido4.style.display = 'none'
    contenido5.style.display = 'none'
    btn1.style.color = '#D6AA87'
    btn2.style.color = 'white'
    btn3.style.color = 'white'
    btn4.style.color = 'white'
    btn5.style.color = 'white'
};

function mostrar2(){
    contenido1.style.display = 'none'
    contenido2.style.display = 'grid'
    contenido3.style.display = 'none'
    contenido4.style.display = 'none'
    contenido5.style.display = 'none'
    btn1.style.color = 'white'
    btn2.style.color = '#D6AA87'
    btn3.style.color = 'white'
    btn4.style.color = 'white'
    btn5.style.color = 'white'
};

function mostrar3(){
    contenido1.style.display = 'none'
    contenido2.style.display = 'none'
    contenido3.style.display = 'flex'
    contenido4.style.display = 'none'
    contenido5.style.display = 'none'
    btn1.style.color = 'white'
    btn2.style.color = 'white'
    btn3.style.color = '#D6AA87'
    btn4.style.color = 'white'
    btn5.style.color = 'white'
};

function mostrar4(){
    contenido1.style.display = 'none'
    contenido2.style.display = 'none'
    contenido3.style.display = 'none'
    contenido4.style.display = 'flex'
    contenido5.style.display = 'none'
    btn1.style.color = 'white'
    btn2.style.color = 'white'
    btn3.style.color = 'white'
    btn4.style.color = '#D6AA87'
    btn5.style.color = 'white'
};

function mostrar5(){
    contenido1.style.display = 'none'
    contenido2.style.display = 'none'
    contenido3.style.display = 'none'
    contenido4.style.display = 'none'
    contenido5.style.display = 'flex'
    btn1.style.color = 'white'
    btn2.style.color = 'white'
    btn3.style.color = 'white'
    btn4.style.color = 'white'
    btn5.style.color = '#D6AA87'
};

function openImg(reference) {
    fulImgBox.style.display = "flex"
    fulImg.src = reference
};
function closeImg () {
    fulImgBox.style.display = "none"
};

const formulario_reg = document.getElementById('formulario');
const formulario_log = document.getElementById('formulario-login')
const inputs = document.querySelectorAll('#formulario input');

const user = 'Usuario_2024';
const pwd = '2024';
const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,50}$/,
    pwd: /^.{4,16}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
};
const campos = {
    usuario: false,
    nombre: false,
    pwd: false,
    correo: false
}


const validar_formulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            validar_campos(expresiones.usuario, e.target, 'usuario');
            campo_vacio(e.target, 'usuario');
        break;
        case "nombre":
            validar_campos(expresiones.nombre, e.target, 'nombre');
            campo_vacio(e.target, 'nombre');
        break;
        case "pwd":
            validar_campos(expresiones.pwd, e.target, 'pwd');
            validar_pwd2();
            campo_vacio(e.target, 'pwd');
        break;
        case "pwd2":
            validar_pwd2();
            campo_vacio(e.target, 'pwd2');
        break;
        case "correo":
            validar_campos(expresiones.correo, e.target, 'correo');
            campo_vacio(e.target, 'correo');
        break;
    };
};

const validar_campos = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-correcto');
        document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');
        campos[campo] = true;
    } else{
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-incorrecto');
        document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.add('formulario_input-error-activo');
        campos[campo] = false;
    }
}

const validar_pwd2 = () => {
    const input_pwd1 = document.getElementById('pwd');
    const input_pwd2 = document.getElementById('pwd2');
    if(input_pwd1.value !== '' && input_pwd2.value !== '') {
        if(input_pwd1.value !== input_pwd2.value) {
            document.getElementById(`grupo_pwd2`).classList.add('formulario_grupo-incorrecto');
            document.getElementById(`grupo_pwd2`).classList.remove('formulario_grupo-correcto');
            document.querySelector(`#grupo_pwd2 .formulario_input-error`).classList.add('formulario_input-error-activo');
            campos['pwd'] = false;
        }  else {
            document.getElementById(`grupo_pwd2`).classList.remove('formulario_grupo-incorrecto');
            document.getElementById(`grupo_pwd2`).classList.add('formulario_grupo-correcto');
            document.querySelector(`#grupo_pwd2 .formulario_input-error`).classList.remove('formulario_input-error-activo');
            campos['pwd'] = true;
        }
    }
    
}

const campo_vacio = (input, campo) => {
    if(input.value == '') {
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-correcto');
        document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');
    }

}

inputs.forEach((input) => {
    input.addEventListener('keyup', validar_formulario);
    input.addEventListener('blur', validar_formulario);
});

formulario_reg.addEventListener('submit', (e) => {
    e.preventDefault();
    const terminos = document.getElementById('terminos')

    if(campos.usuario && campos.nombre && campos.pwd && campos.correo && terminos.checked) {
        formulario_reg.reset();
        document.getElementById('mensaje_check').classList.add('formulario_registro-check-activo');
        setTimeout(() => {
            document.getElementById('mensaje_check').classList.remove('formulario_registro-check-activo');
        }, 4000);
        document.querySelectorAll('.formulario_grupo-correcto').forEach((estilo) => {
            estilo.classList.remove('formulario_grupo-correcto');
        })
        setTimeout(() => {
            location.reload()
        }, 2000);
    } else {
        document.getElementById('mensaje_error').classList.add('formulario_registro-error-activo');
        setTimeout(() => {
            document.getElementById('mensaje_error').classList.remove('formulario_registro-error-activo');
        }, 4000)
    }
});

formulario_log.addEventListener('submit', (e) => {
    e.preventDefault();
    if(document.getElementById('user_log').value == user && document.getElementById('pwd_log').value == pwd) {
        window.alert('Bienvenido');
        formulario_log.reset();
    } else {
        document.getElementById('mensaje_log-error').classList.add('formulario_login-error-activo');
        setTimeout(() => {
            document.getElementById('mensaje_log-error').classList.remove('formulario_login-error-activo');
        }, 4000);
    }
})

document.getElementById('user_log').src