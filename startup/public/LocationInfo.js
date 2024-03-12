const nameEl = document.querySelector("#name");
localStorage.setItem("userName", nameEl.value);

//calls Location Data service
async function LoadInfo() {
  try {
    // Get the latest high scores from the service
    const response = await fetch('/api/LoadData');
    PageData = await response.json();

    // Save the scores in case we go offline in the future
    localStorage.setItem('PageData', JSON.stringify(PageData));
  } catch {
    // If there was an error then just use the last saved scores
    const PageDataText = localStorage.getItem('PageData');
    if (PageDataText) {
        PageData = JSON.parse(PageDataText);
    }
  }

  displayInformation(PageData);
}

//this function will display all the json data from the PageData and display it from the on the LocationInfo.html page
function displayInformation(PageData) {
    
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

function addInfo () {
    //update display
    this.Review.add(rv);
    this.again.add(ag);
}

function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
  }

function getLocationName() {
    return localStorage.getItem('locationName') ?? 'Unknown Location';
}

function getAdress() {
    return localStorage.getItem('adress') ?? 'No adress found';
}