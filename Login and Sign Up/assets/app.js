let createUser = () => {
    let name_u = document.getElementById("name").value;
    let email_u = document.getElementById("email").value;
    let gender_u = document.getElementById("gender");
    let db_u = document.getElementById("db").value;
    let gender;
    gender_u.checked ? gender="MALE":gender= "FEMALE";
    localStorage.setItem('name', name_u);
    localStorage.setItem('gender', gender);
    localStorage.setItem('email', email_u);
    localStorage.setItem('db', db_u);
}

let deleteUser = () => {
    localStorage.clear();
}

let checkUser = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let lname = localStorage.getItem('name');
    let lemail = localStorage.getItem('email');
    if(name == lname && email == lemail){
        alert("Welcome back!");
    }
    else{
        alert("Please sign up!");
    }
}

let signup = () => {
    window.location.href = "index.html";
}