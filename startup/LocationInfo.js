const nameEl = document.querySelector("#name");
localStorage.setItem("userName", nameEl.value);

//Items I need to store
//LocationName
//Review 1
//Recomendation
//Comments



//Total overview
// 2. create Location class that stores data
// 3. make the add button store data
// 4. modify generic page to display data from location class
// 5. place a chatbox in page
// 6. modify locations list to be dependant on locations data

// class LocationData {
//     LocationData()
// }


function createLocation (){
    //this function will create a class and store information in this class then bring the user to the new page
    const locationname = document.querySelector("#locationname");
    localStorage.setItem("locationname", adress.value);
    const adress = document.querySelector("#adress");
    localStorage.setItem("Adress", adress.value);
    const review = document.querySelector("#review");
    localStorage.setItem("Review", review.value);
    const again = document.querySelector("#again");
    localStorage.setItem("again", username.value);
    window.location.href = "LocationInfo.html"; //Change this to sent to custom page
}