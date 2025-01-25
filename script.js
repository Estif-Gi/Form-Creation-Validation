

document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
    form.addEventListener('submit',function (submit) {
        submit.preventDefault();
        const userName = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const email = document.getElementById('email').value.trim();
        let isValid = true;
        let messages = [];
        if(userName.length<3)
        {
            isValid = false;
            messages.push('invalid username');

        };
        if(!email.includes('@')||!email.includes('.'))
        {
            isValid = false;
            messages.push('invalid email must include "@" and "."');
        };
        if(password.length < 8)
        {
            isValid = false;
            messages.push('invalid password, must be >=8');
        }
        feedbackDiv.style.display = 'block';
        
        if(isValid)
        {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'
        }
        else
        {
            feedbackDiv.innerHTML = messages.join('<br>'); 
            feedbackDiv.style.color = '#dc3545'; 
        }

    });
});
