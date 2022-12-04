export async function getDataOrders() {
    return await fetch(`http://localhost:8000/api/orders`)
        .then(response => response.json())
        .catch((error) => {
            console.log(error);
        })
}  