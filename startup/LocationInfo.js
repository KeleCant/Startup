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


function createLocation (){
    const adress = document.querySelector("#adress");
    localStorage.setItem("Adress", adress.value);
    const review = document.querySelector("#review");
    localStorage.setItem("Review", review.value);
    const again = document.querySelector("#again");
    localStorage.setItem("again", username.value);

}