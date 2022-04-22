const submit = document.querySelector('#submit')
const emailField = document.querySelector('#email')
const error = document.querySelector('#helperText')
const errorImg = document.querySelector('#errorImg')
submit.addEventListener('click', (e)=>{
    e.preventDefault()
    let field = email.value
    let emailDomnain = field.substring(0, field.indexOf('@'))
    let emailSubDomain = field.substring(field.indexOf('@') + 1)
    let emailTLD = field.substring(field.indexOf('.') + 1)
    if(emailDomnain.length < 2 || !field.includes('@') || !emailSubDomain.includes('.') || emailTLD.length < 2)
        errorMessage()
    else{
        successMessage()
    }        
})
const errorMessage = ()=>{
    email.focus()
    helperText.innerHTML = 'Please provide a valid email'
    errorImg.classList.remove('hide')
}
const successMessage = ()=>{
    helperText.innerHTML = 'Thank you. Your Email is added!'
    errorImg.classList.add('hide')
}