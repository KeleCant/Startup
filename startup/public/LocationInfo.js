// Calls Location Data service
async function LoadInfo() {
  try {
    // Get the latest data from the service
    const response = await fetch('/api/LoadData');
    const pageData = await response.json();

    // Populate HTML elements with the retrieved data
    document.getElementById("locationPicture").innerHTML = `<img src="${pageData.locationPicture}" alt="Location Picture" />`;
    document.getElementById("locationName").innerHTML = `<h2>${pageData.locationName}</h2>`;
    document.getElementById("addressInfo").innerHTML = `<p>${pageData.addressInfo}</p>`;
    document.getElementById("mapLocation").innerHTML = `<iframe src="${pageData.mapLocation}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    document.getElementById("pageCreatorExperience").innerHTML = `<p>${pageData.pageCreatorExperience}</p>`;

    // Save the data in localStorage
    localStorage.setItem('PageData', JSON.stringify(pageData));
  } catch (error) {
    console.error('Error loading data:', error);
    // If there was an error, try to use the data from localStorage
    const pageDataText = localStorage.getItem('PageData');
    if (pageDataText) {
      const pageData = JSON.parse(pageDataText);
      document.getElementById("locationPicture").innerHTML = `<img src="${pageData.locationPicture}" alt="Location Picture" />`;
      document.getElementById("locationName").innerHTML = `<h2>${pageData.locationName}</h2>`;
      document.getElementById("addressInfo").innerHTML = `<p>${pageData.addressInfo}</p>`;
      document.getElementById("mapLocation").innerHTML = `<iframe src="${pageData.mapLocation}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
      document.getElementById("pageCreatorExperience").innerHTML = `<p>${pageData.pageCreatorExperience}</p>`;
    }
  }
}

async function LoadList() {
    try {
        // Get the latest high scores from the service
        const response = await fetch('/api/LoadList');
        LoadList = await response.json();
    
        // Save the scores in case we go offline in the future
        localStorage.setItem('LoadList', JSON.stringify(LoadList));
      } catch {
        // If there was an error then just use the last saved scores
        const loadDataText = localStorage.getItem('LoadList');
        if (loadDataText) {
            LoadList = JSON.parse(loadDataText);
        }
      }
    
      displayListInformation(LoadList);
}

//this function will display all the json data on the LocationList.html
function displaylistInformation(LoadList) {
    //this will go to locationLiat.html
    //I need to figure out how to work json
    //
}


async function createLocation() {
  // Check if the user is logged in and has a valid auth token
  const authToken = localStorage.getItem('authToken');
  if (!authToken) {
    // If user is not logged in, show login modal
    showLoginModal();
    return;
  }

  // Collect location data from HTML inputs
  const locationData = {
    locationName: document.querySelector("#locationname").value,
    address: document.querySelector("#adress").value,
    again: document.querySelector("#again").checked ? "Yes" : "No"
  };

  window.location.href = `LocationInfo.html`; // Redirect to location info page

  // //Incert into DataBase
  // try {
  //   const response = await fetch('/api/AddLocation', {
  //     method: 'POST',
  //     headers: { 
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(locationData),
  //   });

  //   if (response.ok) {
  //     const newLocation = await response.json();
  //     // Handle successful creation, navigate to the new location page or update UI
  //     //window.location.href = `LocationInfo.html`; // Redirect to location info page
  //     console.log('Location added successfully:', newLocation);
  //   } else {
  //     // Handle error response
  //     console.error('Error adding location:', response.statusText);
  //     // You can display an error message or handle it as per your application logic
  //   }
  // } catch (error) {
  //   console.error('Error adding location:', error);
  //   // Handle error
  // }
}



// Function to add review
function addInfo() {
  const review = document.getElementById("Rewiew").value;
  const wouldGoAgain = document.getElementById("Yes").checked ? "Yes" : "No";
  // You can perform further actions here, such as sending the review data to the server
  console.log("Review:", review);
  console.log("Would Go Again:", wouldGoAgain);
}


//
// Redirection tools
//

function showLoginModal() {
  const modal = document.getElementById('loginModal');
  modal.style.display = 'block';
}

// Function to close the login modal
function closeModal() {
  const modal = document.getElementById('loginModal');
  modal.style.display = 'none';
}

// Function to redirect user to the login page
function redirectToLogin() {
  window.location.href = 'login.html'; // Adjust the login page URL as per your application
}