
function contactretrive(){
    let userName=document.getElementById('cName').value;
    let userEmail=document.getElementById('cEmail').value;
    let userTitle=document.getElementById('cTitle').value;
    let userText=document.getElementById('ctext').value;
    let par21=document.getElementById('par2').value;


    if (userName.value =="" || userEmail.value =="" || userTitle.value ==""|| userText =="" ) {
        document.getElementById('par2').innerHTML = 'please fill details'
    }
     else
      {
        document.getElementById('par2').innerHTML = ' '
        localStorage.setItem("userName",userName);
        localStorage.setItem("userEmail",userEmail);
        localStorage.setItem("userTitle",userTitle);
        localStorage.setItem("userText",userText);

    document.getElementById('Tcontactus').innerHTML='thank you for contacting us'

     document.getElementById('cName').value = '';
     document.getElementById('cEmail').value = '';
     document.getElementById('cTitle').value = '';
    document.getElementById('ctext').value = '';
    }




}



