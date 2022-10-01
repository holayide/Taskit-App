//Validation of Forms




//Login Validation//

var jwt = localStorage.getItem("jwt");
/*if (jwt != null) {
  window.location.href = './home.html'
}*/

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://todo-app-bc.herokuapp.com/api/v1/users/login");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({
    "email": email,
    "password": password
  }));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4){
      const objects = JSON.parse(this.responseText);
      /*console.log(objects);*/

      if (objects.status == 'success') {
        localStorage.setItem("jwt", objects['token']);
        window.location.href = './home.html';
      }
      else{
        Swal.fire({
          text: objects.message,
          icon: 'error',
          confirmButtonText: 'OK'
        });
    }
    

     
      }
  };
  return false;
}


