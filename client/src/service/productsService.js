export async function getDataProducts() {
    return await fetch(`http://localhost:8000/api/product`)
        .then(response => response.json())
        .catch((error) => {
            console.log(error);
        })
}  