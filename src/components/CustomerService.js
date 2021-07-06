const baseURL = 'http://localhost:5000/customers'

export const getCustomers = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postCustomers = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteCustomers = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}