export const apiCall = (method, url, body) => {
   return fetch
   (
        url,
        {
            method: method, // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(body) // body data type must match "Content-Type" header
        }
    )
    .then((response) => {
        return response.json();
    })
}

export default {apiCall};