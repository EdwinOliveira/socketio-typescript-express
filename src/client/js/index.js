class UI {
    static verifyLogin(loginObj) {
        let socket = io.connect('http://localhost:5000');
        socket.emit('login', { loginObj });
    }
}

document.querySelector('#login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    //Getting Email and Password from the Inputs.
    let email = document.querySelector('#exampleInputEmail1').value;
    let password = document.querySelector('#exampleInputPassword1').value;
    
    //Creating the object
    const loginObj = {email: email,password: password};

    //Calling the function to verify the account.
    UI.verifyLogin(loginObj);
});