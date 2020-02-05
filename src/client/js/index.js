class UI {
    static verifyLogin(email, password) {

    }
}

document.querySelector('#login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    let email = document.querySelector('#exampleInputEmail1').value;
    let password = document.querySelector('#exampleInputPassword1').value;
    console.log(email,password);
    UI.verifyLogin(email, password);
});