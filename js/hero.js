let jobNum = 0;

let jobTimer = setInterval(nextJob, 10000);

makeJobIndicator();
displayJob();

function nextJob() {
    jobNum = (jobNum + 1) % jobs.length;
    displayJob();
}

function prevJob() {
    jobNum === 0?
        jobNum = jobs.length - 1:
        jobNum--;
    displayJob();
}

function goToJob(n) {
    jobNum = n;
    displayJob();
} 

function changeJobIndicators() {
    for(let i = 0; i < jobs.length; i++) {
        if(i === jobNum) {
            $(`#job${i}`).removeClass('far').addClass('fas');
        } else {
            $(`#job${i}`).removeClass('fas').addClass('far');
        }
    }
}

function makeJobIndicator() {
    let html = '<i class="fas fa-angle-left" onclick="prevJob()"></i>'
    for (let i = 0; i < jobs.length; i++) {
        html += `<i id="job${i}" class="far fa-circle" onclick="goToJob(${i})"></i>`;
    }
    html += `<i class="fas fa-angle-right" onclick="nextJob()"></i>`;
    $('#job-indicator').html(html);
}

function displayJob() {
    // Stop timer 
    clearInterval(jobTimer);
    // Display Job
    $('#job-description, #job-preview-link').fadeOut(500, () => {
    $('#job-company').html(jobs[jobNum].company);
    $('#job-title').html(jobs[jobNum].title);
    $('#job-tools').html(toolsToHTMLList(jobs[jobNum].tools));
    $('#job-responsibilities').html(arrayToHTMLList(jobs[jobNum].responsibilities));
    $('#job-preview-link').attr('href', jobs[jobNum].image);
    $('#job-preview').attr('src', jobs[jobNum].image);
    jobs[jobNum].image !== ''?
        $('#job-description').css('max-width', '500px'):
        $('#job-description').css('max-width', 'max-content');
    changeJobIndicators();}).fadeIn(500);
    
    // Reset Timer
    jobTimer = setInterval(nextJob, 30000);
}

function toolsToHTMLList(tools) {
    let htmlList = '';
    for(let i = 0; i < tools.length; i++) {
        tools[i].url?
            htmlList += `<a class="basic-link" href="${tools[i].url}" target="_blank"><li>${tools[i].name}</li></a>`:
            htmlList += `<li>${tools[i].name}</li>`
    }
    return htmlList;
} 

function arrayToHTMLList(arr) {
    let htmlList = '';
    for(let i = 0; i < arr.length; i++) {
        htmlList += `<li>${arr[i]}</li>`;
    }
    return htmlList;
}