// javascript para enviar el formulario por email 


const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#truco')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:zorrobrayan0@gmail.com?subject=Mi nombre es ${form.get('nombre')}, mi mail es: ${form.get('mail')}&body=${form.get('mensaje')}`)
    $buttonMailto.click()
}
