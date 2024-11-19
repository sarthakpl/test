
let eName = document.getElementById('name1')
let eMail = document.getElementById('em')
let ePass = document.getElementById('pass')
let signReg = document.getElementById('sign')



signReg.addEventListener('click',sendData)


function sendData() {

    if (eName.value.length == 0) {
        document.getElementById('par1').innerHTML = 'please enter name'
    }
    else if (eMail.value.length == 0) {
        document.getElementById('error_email').innerHTML = 'plese enter email'
    }
    else if (ePass.value.length < 6 || ePass.value.length > 12) {
        document.getElementById('error_pass').innerHTML = 'password is too short or too long'
    }
    else
    {
        let user = {
            "name1": eName.value,
            "em": eMail.value,
            "pass": ePass.value,
        }
        localStorage.setItem("user", JSON.stringify(user))
    }

}