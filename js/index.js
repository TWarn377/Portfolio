$("#jumper").hover(function(){
    $("#jump-list").slideDown("slow");
    },
    function(){
    $("#jump-list").slideUp("slow");
});

// SELECT PROJECT
let projectNum = 0;

// PROJECTS CONTENT
const projects = [
        {
        title: "Calendar App",
        description: "<b>WARNING</b> it's not pretty <i>yet</i>. Its a calendar application design to try to be one place for everything.<br><br> The future twist with this app is it gives you 3 objectives - Work, Life, and Play and wil color-code them for you based on your selections. <br> Starting in mid-November 2025 through mid-January 2026, I have made the Event, Year, Month, Week, and Day views. </br></br> Now, I am working on back-end functionality to make events before going into styling.",
        images: [
            { url: "./img/projects/calendar-app/Screenshot 2026-01-21 200123.png", alt: "The search page, where customers can marvel at the homes the company has worked on."},
            { url: "./img/projects/calendar-app/Screenshot 2026-01-21 202028.png", alt: "The homepage, showcasing featured homes."},
    ]}, {
        title: "Notepad App",
        description: "A React Native notepad application for Android and iOS devices. <br> The app allows users to create, edit, and delete notes, as well as organize them into categories. <br> The app also includes a search function to quickly find notes by keyword. <br><br> End-to-end design and implementation completed independently for a database course (2021)",
        images: [
            { url: "./img/projects/notepad-app/Screenshot_20230220_102757.png", alt: "The search page, where customers can marvel at the homes the company has worked on."},
            { url: "./img/projects/notepad-app/Screenshot_20230220_102902.png", alt: "The homepage, showcasing featured homes."},
    ]}, {
    title: "Hayes Warner Realty Website",
    description: "A public website for a start up company that's flipping homes in the greater Cleveland area. <br><br> The website is made using Flask - A python microframework, SQL-Alchemy, JQuery, and standard HTML, CSS, and JavaScript. <br><br> The administration tool is a web application made with Angular 10 - A TypeScript framework, A RESTful API made from Hapi JS and Knex JS.",
    images: [
        { url: "./img/projects/hwr-site/HWR2.jpg", alt: "The search page, where customers can marvel at the homes the company has worked on."},
        { url: "./img/projects/hwr-site/HWR1.jpg", alt: "The homepage, showcasing featured homes."},
    ]}, {
    title: "Hayes Warner Realty Administration Tools",
    description: "An administration portal to compliment the Hayes Warner Realty Public site. <br><br> This web app is meant to serve as a central location for management to input and track metrics for houses. <br><br> One key feature of the app is that the public website will be able to be managed using the app. The user can choose which houses are displayed on the homepage, and select individual pictures for the homepage.",
    images: [
        // { url: "./img/projects/hwr-app/HWR2.jpg", alt: "The search page, where customers can marvel at the homes the company has worked on."},
        { url: "./img/projects/hwr-app/HWRAPP1.png", alt: "A page on the app where you can search for homes."},
    ]},//{
    // title: "Hayes Warner Reality Administration Tools (Original)",
    // description: "A desktop WPF (Windows Presentation Foundation) application, intended for expense tracking of houses.",
    // images: [
    //     { url: "./img/projects/hwr-app-original/HWROG2.png", alt: "The application displaying the information on the house that the user selected." },
    //     { url: "./img/projects/hwr-app-original/HWROG1.png", alt: "The application displaying houses that the user can select." }    
    // ]},
    // {
    // title: "Charity App",
    // description: "A website and administration tool served together as a packag. <br> The website is made using Flask - A python microframework, SQL-Alchemy, JQuery, and standard HTML, CSS, and JavaScript. <br> The administration tool is a web application made with Angular 10 - A TypeScript framework, A RESTful API made from Hapi JS and Knex JS.",
    // images: [
    //     { url: "./img/projects/charity-android-app/Screenshot_20230220_103050.png", alt: "The search page, where customers can marvel at the homes the company has worked on."},
    //     { url: "./img/projects/charity-android-app/Screenshot_20230220_103246.png", alt: "The homepage, showcasing featured homes."},
    // ]},
];
let projectTimer = setInterval(nextProject, 15000);

makeProjectIndicator();
dispProjects();

// DISPLAY PROJECT
function dispProjects() {
    clearInterval(projectTimer);

    $('#projects-section').fadeOut(500, () => {
    // Display title
    $('#title').html(projects[projectNum].title);
    // Display description
    $('#project-description').html(projects[projectNum].description);
    // Display Images
    for(let i = 0; i < 2; i++) {
        if (image = projects[projectNum].images[i]) {
            $(`#image-link${i + 1}`).show();
            $(`#image-link${i + 1}`).attr('href', image.url);
            $(`#project-image-${i + 1}`).attr('src', image.url);
            $(`#project-image-${i + 1}`).attr('alt', image.alt);
        } else {
            $(`#image-link${i + 1}`).hide();
        }
    }

    changeProjectIndicators();}).fadeIn(500);

    projectTimer = setInterval(nextProject, 30000);
}


// CHANGE PROJECT 
function nextProject() {
    projectNum = (projectNum + 1) % projects.length;
    dispProjects();
}


function prevProject() {
    projectNum === 0?
        projectNum = projects.length - 1:
        projectNum--;
    dispProjects();
}

function goToProject(n) {
    projectNum = n;
    dispProjects();
}

function makeProjectIndicator() {
    let html = '<i class="fas fa-angle-left" onclick="prevProject()"></i>'
    for (let i = 0; i < projects.length; i++) {
        html += `<i id="project${i}" class="far fa-circle" onclick="goToProject(${i})"></i>`;
    }
    html += `<i class="fas fa-angle-right" onclick="nextProject()"></i>`;
    $('#project-indicator').html(html);
}

function changeProjectIndicators() {
    for(let i = 0; i < projects.length; i++) {
        if(i === projectNum) {
            $(`#project${i}`).removeClass('far').addClass('fas');
        } else {
            $(`#project${i}`).removeClass('fas').addClass('far');
        }
    }
}


// RUN ON INITIALIZATION
dispProjects();