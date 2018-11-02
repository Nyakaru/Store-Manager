
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