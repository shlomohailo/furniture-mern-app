


export async function getDataCities() {
    return await fetch(`http://localhost:8000/api/cities`)
        .then(response => response.json())
        .catch((error) => {
            console.log(error);
        })
}  