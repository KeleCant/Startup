# Startup: What to Do

## Specification Deliverable

### Elevator pitch

Have you ever been Bored? Have you ever wondered what should I do tonight but, had no ideas? With my new website "What to Do" you get access to beloved places in the area. You can see what's nearby. After visiting you can leave a comment to help other people have a fun night. If you discover a cool place you can add it, you never know maybe you will discover the next big hit.

### Design

![](ModelDiagram.png)

This websight has 4 main pages:
1. The login Page
1. The browing page which diplays nearby locations
1. Each location has its own page for comments and reviews
1. the adding location page which will create a new location page

### Key features

- Secure login
- Display of multiple locations based on distance and reviews
- Ability to comment and review places
- Ability to add new location

### Technologies

These technologies will be used in the following ways.

- **HTML** - Basic structural and organization of websight
- **CSS** - Styling and animating page changes and button clicks
- **JavaScript** - Interactivity, switching pages and allowing you to click on buttons
- **Web Service** - Remote functions that pulls from data base of locations and reviews
- **Authentication** - Creating accounts and logging in
- **Database persistence** - Storing user data in a database - stores comments and reviews
- **WebSocket** - Will store the comments and upload them to server
- **Web Framework** - Using React to add components and request routing

### HTML
- used to for the basic framework of my program
- used to navigate between pages
- used to input data that will later be stored and used
- used to connect my websight to my github
- Added new HTML file, about.html, addlocations.html, index.html, locationlist.html, TheTaste.html
- Added to each html page a way to connect to other html files

### CSS 
- Created one main CSS file for each HTML file
- Went back through each HTML file and remodeled them to fit CSS requirments
- Created navagation bar on the top of the page to easily switch between pages
- modified old CSS code to create git hub button on the bottem of the page.
- removed coppy and paste buggs and changed everything to have a uniform system that CSS can structure
- Added bootstrap functionality and style to the code

### JavaScript
- Gave functionality to the button on index.html
- Created data store for info entered on index.html
- Created new JavaScript file titled LocationInfo.js This file is to store new information to create a page that displays information.
- Created function called createLocation to store data from the addlocation.html page
- modified HTLM pages to work with new functions
- Created DisplayInfo class that will be used to modify an HTML function with new information
- Created new function for each page that updates the display and database
- Created new functions to display stored data.
    
