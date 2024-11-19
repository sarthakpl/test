function changePassword() {
    let newpass = document.getElementById('newpass').value;
    let confirmpass = document.getElementById('confirmpass').value;

    if (newpass !== confirmpass) {
        alert('Passwords do not match');
        return;
    }
   
    let user = JSON.parse(localStorage.getItem('user'));
    user.pass = newpass;
    localStorage.setItem('user', JSON.stringify(user));

    alert('Password successfully changed');
    window.location.href = "login.html";
}