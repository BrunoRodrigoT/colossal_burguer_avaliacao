
function bemvindo(){
    let out = document.createElement('h1')
    out.innerHTML = 'Seja bem-vinde ao Colossal Burguer'

    document.body.appendChild(out)
}

function enviar(){
    let email = document.getElementById('mail')
    let senha = document.getElementById('senha')

    if(email.value == ''){
        alert('Por favor verifique se todos os dados foram preenchidos.')
    }else if(senha.value == ''){
        alert('Por favor verifique se todos os dados foram preenchidos.')
    }else if(true){
        let form = document.getElementById('formulario')
        form.remove()

        bemvindo()
    }
}