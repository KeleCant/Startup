const nameEl = document.querySelector("#name");
localStorage.setItem("userName", nameEl.value);

//calls Location Data service
async function displayInfo() {
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

  displayScores(PageData);
}


function createLocation () {
    //this function will create a class and store information in this class then bring the user to the new page
    const locationname = document.querySelector("#locationname");
    localStorage.setItem("locationName", locationname.value);
        
    const adress = document.querySelector("#adress");
    localStorage.setItem("adress", adress.value);
        
    //this will be web stock data
    //const uReview = document.querySelector("#uReview");
    //localStorage.setItem("uReview", uReview.value);
        
    const again = document.querySelector("#again");
    localStorage.setItem("again", again.value);

    //new displayInfo(locationname,adress,review,again);
    //moves user to the custom page
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