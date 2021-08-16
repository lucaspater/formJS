function updateBg(reset){
    const cuadrado = document.getElementById('cuadrado')
    reset ? cuadrado.classList.remove('extra') :
    cuadrado.classList.add('extra')
}


// Form
const myForm = event => {
    event.preventDefault()
    const mailformat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const formState = []
    let name = document.getElementById('nombre')
    let lastname = document.getElementById('apellido')
    let age = document.getElementById('edad')
    let coments = document.getElementById('comentarios')
    let terms = document.getElementById('terminos')
    let email = document.getElementById('email')

    !name.value ? name.classList.add('error'):
    formState.push({ element: 'nombre', value: name.value }) && name.classList.remove('error')

    !lastname.value ? lastname.classList.add('error') :
    formState.push({ element: 'apellido', value: lastname.value }) && lastname.classList.remove('error')

    !age.value ? age.classList.add('error') :
    formState.push({ element: 'apellido', value: lastname.value }) && lastname.classList.remove('error')


    !email.value || !email.value.match(mailformat) ? email.classList.add('error') :
    formState.push({ element: 'email', value: email.value }) && email.classList.remove('error')

    if(formState.length === 3){
        const dato = document.getElementById('formValues')
        dato.innerHTML = JSON.stringify(formState)
    }
}


