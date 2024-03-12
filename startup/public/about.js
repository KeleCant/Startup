function getPicsumInfo() {
    return new Promise((resolve, reject) => {
        fetch('https://picsum.photos/id/0/info')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const url = data.download_url; // Extracting the URL from the JSON response
                resolve(url); // Resolving the promise with the URL
            })
            .catch(error => {
                reject(error); // Rejecting the promise with the error
            });
    });
}