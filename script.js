let themeDots = document.getElementsByClassName('theme-dot');

// Using Local Storage for saving theme options for users next visit
let theme = localStorage.getItem('theme');

if(theme == null) {
    setTheme('blue');
} else {
    setTheme(theme);
}

for(var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        console.log('Option Clicked', mode);
        setTheme(mode);
    });
}

function setTheme(mode) {
    if(mode == 'light') {
        document.getElementById('theme-style').href = 'styles.css'
    }

    if(mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css'
    }

    if(mode == 'green') {
        document.getElementById('theme-style').href = 'green.css'
    }

    if(mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css'
    }

    localStorage.setItem('theme', mode);
}

function sendEmail() {
    var name = document.getElementById('user-name').value;
    var subject = document.getElementById('user-subject').value;
    var email = document.getElementById('user-email').value;
    var message = document.getElementById('user-message').value;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "hritikbagane@gmail.com",
        Password: "kxmsgltnrrntepco",
        To: "hritikbagane@gmail.com",
        From: `${email}`,
        Subject: `${subject}`,
        Body: `Name: ${name} <br /> Email: ${email} <br /> Message: ${message}`,
    }).then(() => alert("Mail successfully sent!"));

    document.getElementById('user-name').value = "";
    document.getElementById('user-subject').value = "";
    document.getElementById('user-email').value = "";
    document.getElementById('user-message').value = "";
}