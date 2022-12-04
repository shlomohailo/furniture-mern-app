export async function getDataSales() {
    return await fetch(`http://localhost:8000/api/sales`)
        .then(response => response.json())
        .catch((error) => {
            console.log(error);
        })
}  