const add_product = async () =>{
    const add_product_form = document.getElementById('add_product_form')
    const name = document.getElementById('cname').value 
    const price = document.getElementById('price').value
    const quantity = document.getElementById('avail').value

    await fetch(
        ' http://0.0.0.0:5000/api/v2/products',
        {
            method: 'POST',
            body: JSON.stringify({
                "name":name,
                "price":price,
                "quantity": quantity
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

const get_products = async () =>{
    elem = document.getElementById('get_product_button').addEventListener('click', async (event) => {
    event.preventDefault();
    fetch(
        ' http://0.0.0.0:5000/api/v2/products',
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
