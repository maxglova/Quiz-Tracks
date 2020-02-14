// Quiz Tracks
// Originally created for the 2020 Pantheon site

// Helpers

let submitBtn = document.getElementById('submit');
// Role Radio Btns
let accounting = document.getElementById('accounting');
let callCenter = document.getElementById('call-center');
let field = document.getElementById('field');
let iT = document.getElementById('IT');
let operations = document.getElementById('operations');

// Level Radio Btns
let beginner = document.getElementById('beginner');
let intermediate = document.getElementById('intermediate');
let advanced = document.getElementById('advanced');

// PDFs
let accounting1 = 'https://eloquentjavascript.net/Eloquent_JavaScript.pdf'


// Generates the PDF based on Quiz Answers
// function generatePdfs() {
//     if(accounting.checked == true && beginner.checked == true) {
//         alert( `You're a beginner in accounting`);
//     } else if(accounting.checked == true && intermediate.checked == true) {
//         alert( `You're a intermediate in accounting`);
//     } else if(accounting.checked == true && advanced.checked == true) {
//         alert( `You're an Advanced accountant`);
//     } else {
//         alert(`You're a looser`);
//     }
// };

// Displays Thank You Content
function thankYouContent() {
    let resultsContainer = document.getElementById('results-container');
    resultsContainer.style.display = 'block';
}

function hideQuestionForm() {
    // Hides the previous content
    let questionsContainer = document.getElementById('questions-wrap');
    resultsContainer.style.display = 'none';
}

// Triggers PDF Downloader
function pdfDownloader(){
    let a = document.createElement('a');

    let linkText = document.createTextNode(`Click Me NoW!`);

    a.appendChild(linkText);
    // Set the title. 
    a.title = "This is Link";  

    // Set the download attribute, and default file name
    // a.setAttribute('download', 'Pantheon Suggested Schedule');
    
    // Set the href property. 
    a.href = accounting1;  
        
    // Append the anchor element to the body. 
    document.getElementById('result').appendChild(a);

    document.getElementById('submit').style.pointerEvents = 'none';

    //generatePdfs();

    thankYouContent();

}

submitBtn.addEventListener('click', pdfDownloader)