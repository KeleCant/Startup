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

async function createLocation () {
    //this function will create a class and store information in this class then bring the user to the new page
    const locationname = document.querySelector("#locationname");
    localStorage.setItem("locationName", locationname.value);
        
    const adress = document.querySelector("#adress");
    localStorage.setItem("adress", adress.value);
  
    const again = document.querySelector("#again");
    localStorage.setItem("again", again.value);

    const newLocation = {locationName: userName, adress: score, again: date, };

    try {
      const response = await fetch('/api/AddLocation', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newLocation),
      });

      // Store what the service gave us as the high scores
      const newLocation = await response.json();
      localStorage.setItem('newLocation', JSON.stringify(newLocation));
    } catch {
      // If there was an error then just track scores locally
      this.updateScoresLocal(newLocation);
    }

    window.location.href = "LocationInfo.html";
}

// Function to add review
function addInfo() {
  const review = document.getElementById("Rewiew").value;
  const wouldGoAgain = document.getElementById("Yes").checked ? "Yes" : "No";
  // You can perform further actions here, such as sending the review data to the server
  console.log("Review:", review);
  console.log("Would Go Again:", wouldGoAgain);
}