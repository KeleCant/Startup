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
    localStorage.setItem("locationname", locationname.value);
        //this code breaks
    const adress = document.querySelector("#adress");
    localStorage.setItem("adress", adress.value);
        //this code breaks
    // const review = document.querySelector("#review");
    // localStorage.setItem("review", review.value);
        
    // const again = document.querySelector("#again");
    // localStorage.setItem("again", username.value);

    //new displayInfo(locationname,adress,review,again);
    //moves user to the custom page
    window.location.href = "LocationInfo.html";
}

function addInfo () {
    //update display
    this.Review.add(rv);
    this.again.add(ag);
}