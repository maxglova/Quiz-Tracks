// Quiz Tracks
// Originally created for the 2020 Pantheon site


// Submit BTN
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

// Form
let form = document.getElementById('question-form');

// PDFs
let accounting1 = './ST-directions-HQ.pdf'

// Results Elements
let a = document.createElement('a');
let linkText = document.createTextNode(`Your suggested track list!`);


// Generates the PDF based on Quiz Answers
function generatePdfs() {
    // Accounting
    if(accounting.checked == true && beginner.checked == true) {
        hideQuestionForm();
        thankYouContent();
        return a.href = accounting1;
    } else if(accounting.checked == true && intermediate.checked == true) {
        hideQuestionForm();
        thankYouContent();
        return a.href = accounting1;
    } else if(accounting.checked == true && advanced.checked == true) {
        hideQuestionForm();
        thankYouContent();
        return a.href = accounting1;
    } else 
    // Call Center
    if(callCenter.checked == true && beginner.checked == true) {
        hideQuestionForm();
        thankYouContent();
        return a.href = accounting1;
    } else if(callCenter.checked == true && intermediate.checked == true) {
        hideQuestionForm();
        thankYouContent();
        return a.href = accounting1;
    } else if(callCenter.checked == true && advanced.checked == true) {
        hideQuestionForm();
        thankYouContent();
        return a.href = accounting1;
    } else 
    // Field
    if(field.checked == true && beginner.checked == true) {
        hideQuestionForm();
        thankYouContent();
        return a.href = accounting1;
    } else if(field.checked == true && intermediate.checked == true) {
        hideQuestionForm();
        thankYouContent();
        return a.href = accounting1;
    } else if(field.checked == true && advanced.checked == true) {
        hideQuestionForm();
        thankYouContent();
        return a.href = accounting1;
    } else 
    // IT
    if(iT.checked == true && beginner.checked == true) {
        hideQuestionForm();
        thankYouContent();
        return a.href = accounting1;
    } else if(IT.checked == true && intermediate.checked == true) {
        hideQuestionForm();
        thankYouContent();
        return a.href = accounting1;
    } else if(IT.checked == true && advanced.checked == true) {
        hideQuestionForm();
        thankYouContent();
        return a.href = accounting1;
    } else 
    // Operations
    if(operations.checked == true && beginner.checked == true) {
        hideQuestionForm();
        thankYouContent();
        return a.href = accounting1;
    } else if(operations.checked == true && intermediate.checked == true) {
        hideQuestionForm();
        thankYouContent();
        return a.href = accounting1;
    } else if(operations.checked == true && advanced.checked == true) {
        hideQuestionForm();
        thankYouContent();
        return a.href = accounting1;
        
    } 
    // Return Error Message
    else {
        alert(`Please complete the form to generate a suggested track list LOOSER!`);
    }
};

// Displays Thank You Content
function thankYouContent() {
    let resultsContainer = document.getElementById('results-container');
    resultsContainer.style.display = 'block';
}

function hideQuestionForm() {
    // Hides the previous content
    let questionsContainer = document.getElementById('question-form');
    questionsContainer.style.display = 'none';
}

// Triggers PDF Downloader
function pdfDownloader(){

    a.appendChild(linkText);
    // Set the title. 
    a.title = "This is Link";  

    // Set the download attribute, and default file name
    a.setAttribute('download', 'Pantheon Suggested Schedule');
    
    // Set the href property. 
    a.href = generatePdfs();  
        
    // Append the anchor element to the body. 
    document.getElementById('result').appendChild(a);
    
}

submitBtn.addEventListener('click', pdfDownloader)