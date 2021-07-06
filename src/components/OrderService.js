const baseURL = 'http://localhost:8080/orders/'

export const getOrders = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postOrder = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteOrders = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}