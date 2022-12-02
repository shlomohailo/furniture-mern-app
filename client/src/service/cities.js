const baseUrl = `http://localhost:3000/api/cities`;


export async function getDataCities() {
    return await fetch(`${baseUrl}`)
        .then(response => response.json())
        .catch((error) => {
            console.log(error);
        })
}  