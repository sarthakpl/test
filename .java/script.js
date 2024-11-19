let SigninBtn = document.getElementById('sign1')
let signEmail = document.getElementById('em1')
let signPass = document.getElementById('pass1')
let forgetPass=document.getElementById('fpass')

SigninBtn.addEventListener('click', suc)

function suc() {
    let u = JSON.parse(localStorage.getItem('user'))
    if (u !=null) {
        if (signEmail.value == u.em && signPass.value == u.pass){
            alert("login done")
            window.location.href="index.html"
        }
        else{
            alert("envalid email")
        }

    }
}
