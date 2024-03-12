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

// function displayPicture() {
//     const random = Math.floor(Math.random() * 1000);
//     fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
//       .then((response) => response.json())
//       .then((data) => {
//         const containerEl = document.querySelector('#picture');
  
//         const width = containerEl.offsetWidth;
//         const height = containerEl.offsetHeight;
  
//         const imgUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
//         const imgEl = document.createElement('img');
//         imgEl.setAttribute('src', imgUrl);
//         containerEl.appendChild(imgEl);
//       });
//   }


  function displayPicture() {
    console.log("Function called");
    const random = Math.floor(Math.random() * 1000);
    fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data received:", data);
        const containerEl = document.querySelector('#picture');
  
        const width = containerEl.offsetWidth;
        const height = containerEl.offsetHeight;
  
        const imgUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
        console.log("Image URL:", imgUrl);
        const imgEl = document.createElement('img');
        imgEl.setAttribute('src', imgUrl);
        containerEl.appendChild(imgEl);
      })
      .catch(error => console.error("Error fetching data:", error));
  }