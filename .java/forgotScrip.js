function onRetrieve() {
    let email = document.getElementById('femail').value;
    let storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser === null || storedUser.em !== email) {
        alert('Email not found. Please try again');
        return;
    }   
    sessionStorage.setItem('femail', email);
    window.location.href ="passchange.html";
    
}