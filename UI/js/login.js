// validate login
const login = async () =>{
    const login_form = document.getElementById('login-form')
    const username = document.getElementById('login-username').value 
    const password = document.getElementById('login-password').value
    
    await fetch(
        ' http://0.0.0.0:5000/api/v2/users/signin',
        {
            method: 'POST',
            body: JSON.stringify({
                "username":username,
                "password": password
            }),
            headers: {
              "Accept": 'application/json',
              "Content-Type": 'application/json'
            }
        }
    ).then(
        response =>{
          console.log(response)
            if (response.status == 200) {
              // localStorage.setItem('token')
              window.location.href = '../Templates/product.html'

                console.log('Response ok')
            }
            console.log('invalid response')
            return response.json()
        }
    ).then(
        json =>{
            console.log(json)
            localStorage.setItem('token', json.token)
        }
    )
}
