const add_sale = async () =>{
    const sale_form = document.getElementById('add_sale_form')
    const product_dict = document.getElementById('size').value 

    await fetch(
        ' http://0.0.0.0:5000/api/v2/sales',
        {
            method: 'POST',
            body: JSON.stringify({
                "product_dict":product_dict
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

const get_sales = async () =>{
    elem = document.getElementById('get_sale_button').addEventListener('click', async (event) => {
    event.preventDefault();
    fetch(
        ' http://0.0.0.0:5000/api/v2/sales',
        {
            method: 'GET',
            headers: {
              "Accept": 'application/json',
              "Content-Type": 'application/json'
            }
        }
    ).then(
        response =>{
          console.log(response)
            if (response.status == 200) {
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
 )
}
