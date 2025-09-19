document.querySelector('.toggle-password').addEventListener('click',function(){
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
})


document.querySelector('.login-form').addEventListener('submit', function(e){
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value();

    if (username || !password){
        alert('Please fill in both fields.');
        return
    }
    loginUser(username,password)
});

function loginUser(user, pass){

    const dummyUser = 'dame';
    const dummyPass = 'grrr';

    if (user === dummyUser && pass === dummyPass){
        alert('Login Successfull');
    }
    else
        alert('Invalid username or password')
        

}



