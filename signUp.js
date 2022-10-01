/*function validated() {
  
    let username = document.forms["form"]["userName"].value;
    let email = document.forms["form"]["email"].value;
    let password = document.forms["form"]["password"].value;
    
    if (username.value == ' '  && email.value == ' '  && password.value == ' ') {
        document.getElementById("result").innerHTML = input.validationMessage
    } else {
        const form = document.getElementById("form");

   const payLoad = new FormData()
   payLoad.append('userName', 'Sandy');
    
   console.log(payLoad)

   fetch('https://todo-app-bc.herokuapp.com/api/v1/users/signup', {
      method: "POST",
      body: payLoad,

   })
   .then(res => res.json())
   .then(data => console.log(data))
   .catch(err => console.log(err))
  
       
    }
          
    
}*/


//Sign Up Validation

const form = document.getElementById("form");
    form.onsubmit = (e) => {
    e.preventDefault();
  var userName = document.getElementById("userName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  fetch("https://todo-app-bc.herokuapp.com/api/v1/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        userName: userName,
        email: email,
        password: password,
        }),

    })

    .then((res) => {
        return res.json();
    } )
    .then((data) => { 
        if (data != 'null') {
            window.location.href = './login.html'
        }
        /*console.log(data);*/
    })    
    .catch((err) => console.log(err));
}  