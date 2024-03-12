const nameEl = document.querySelector("#name");
localStorage.setItem("userName", nameEl.value);


//Total overview
// 1. make the add button store data
// 2. modify generic page to display data from location class
// 3. place a chatbox in page
// 4. modify locations list to be dependant on locations data

class displayInfo {
    locationName = null;
    Adress = null;
    Review = [];
    again = [];
    comments = [];
    displayInfo(ln, ad, rv, ag){
        this.locationName = ln;
        this.Adress = ad;
        this.Review.add(rv);
        this.again.add(ag);
    }
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