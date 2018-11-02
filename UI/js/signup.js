// document.getElementById('registerUser').addEventListener('submit', registerUser);

// function errorNotification(res){
//     return `<p>${res.msg}</p>`;
// }

// function registerUser(e){
//     e.preventDefault();
//     let user_name = document.getElementById('name').value;
//     let user_password = document.getElementById('password').value;
//     let user_confirm = document.getElementById('confirm').value;
//     console.log(user_name, user_password, user_confirm)
//     fetch('https://ken-online-store.herokuapp.com/api/v2/auth/signup', {
//         method:'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-type':'application/json',
//             'Authorization': 'Bearer ' + localStorage.getItem('token')
//         },
//         body:JSON.stringify({name:user_name, password:user_password, confirm:user_confirm})
//     })
//     .then((res) => res.json())
//     .then((res) => {
//         let msg = errorNotification(res);
//         if(res.msg == "User Successfully Created"){
//             document.getElementById('user-error').innerHTML = msg;
//             window.location.href = 'profile.html'
//         }
//         else{
//             document.getElementById('user-error').innerHTML = msg;
//             setTimeout(() => {
//                 let msg = "";
//                 document.getElementById('user-error').innerHTML = msg;
//             }, 5000)
//         }
//     })
// }

const signup = async () =>{
    const signup_form = document.getElementById('signup-form')
    const username = document.getElementById('sign-username').value 
    const email = document.getElementById('email-address').value
    const password = document.getElementById('sign-password').value
    const confirm_password = document.getElementById('confirm-pass').value

    
    await fetch(
        ' http://0.0.0.0:5000/api/v2/users/signup',
        {
            method: 'POST',
            body: JSON.stringify({
                "username":username,
                "email":email,
                "password": password,
                "confirm_password":confirm_password
            }),
            headers: {
              "Accept": 'application/json',
              "Content-Type": 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }
    ).then(
        response =>{
          console.log(response)
            if (response.status == 201) {
                console.log('Response ok')
            }
            console.log('invalid response')
            return response.json()
        }
    ).then(
        json =>{
            console.log(json)
        }
    )
}