const baseURL = 'http://localhost:8080/orders/'

export const getOrders = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const getOrderById = (id) => {
    return fetch(baseURL + id)
        .then(res =>res.json())
    
}



export const postOrder = (customer,basket) => {
    const newOrder = {
        date : "25/06/2025",
        customer: customer,
        items: basket
    }
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(newOrder),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteOrders = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}