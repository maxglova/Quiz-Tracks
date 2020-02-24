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
let owner = document.getElementById('owner');

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

// Tooltip elements
let tooltip = document.getElementById('tool-tip-1');
let iToolTip = document.getElementById('tool-tip-2');
let aToolTip = document.getElementById('tool-tip-3');


// Tooltips
const tooltips = [
    {beginner: 'Batch, post, and export invoices', intermediate: 'Process payments and refunds', advanced: 'Run payroll',},
    {beginner: 'Answer phones and book appointments', intermediate: 'Assign technicians to jobs', advanced: 'Take down job information',},
    {beginner: 'Build quotes for customers', intermediate: 'Service equipment ', advanced: 'Work on call or after hours',},
    {beginner: 'Oversee systemsd', intermediate: 'Manage software implementation and updates', advanced: 'Monitor new and existing integrations ',},
    {beginner: 'Manage inventory', intermediate: 'Run marketing campaigns', advanced: 'Build or update the Pricebook',},
    {beginner: 'Manage the business', intermediate: 'Track company metrics and performance', advanced: 'Serve as a president or general manager',}
]


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
    // Owner
    if(operations.checked == true && beginner.checked == true) {
        hideQuestionForm();
        thankYouContent();
        return a.href = owner1;
    } else if(operations.checked == true && intermediate.checked == true) {
        hideQuestionForm();
        thankYouContent();
        return a.href = owner2;
    } else if(operations.checked == true && advanced.checked == true) {
        hideQuestionForm();
        thankYouContent();
        return a.href = owner3;
        
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

// Tooltip Hover
function tooltipHover() {
    // Object Variables
    let accountingTip = tooltips[0];
    let callCenterTip = tooltips[1];
    let fieldTip = tooltips[2];
    let itTip = tooltips[3];
    let operationsTip = tooltips[4];
    let ownerTip = tooltips[5];


    // Beginner Tool Tips
    beginner.addEventListener('mouseover', function(){
        if(accounting.checked){
            tooltip.innerText = accountingTip.beginner;
            tooltip.style.display = 'block';
            console.log(accountingTip.beginner);
        } else if (callCenter.checked){
            tooltip.innerText = callCenterTip.beginner;
            tooltip.style.display = 'block';
        } else if (field.checked){
            tooltip.innerText = fieldTip.beginner;
            tooltip.style.display = 'block';
        } else if (iT.checked){
            tooltip.innerText = itTip.beginner;
            tooltip.style.display = 'block';
        } else if (operationsTip.checked){
            tooltip.innerText = operationsTip.beginner;
            tooltip.style.display = 'block';
        } else if (operations.checked){
            tooltip.innerText = operationsTip.beginner;
            tooltip.style.display = 'block';
        } else if (owner.checked){
            tooltip.innerText = operationsTip.beginner;
            tooltip.style.display = 'block';
        }

    })
    beginner.addEventListener('mouseout', function() {
        tooltip.style.display = 'none';
    })
    
    // Intermediate Tool Tips
    intermediate.addEventListener('mouseover', function(){
        if(accounting.checked){
            iToolTip.innerText = accountingTip.intermediate;
            iToolTip.style.display = 'block';
            console.log(accountingTip.intermediate);
        } else if (callCenter.checked){
            iToolTip.innerText = callCenterTip.intermediate;
            iToolTip.style.display = 'block';
        } else if (field.checked){
            iToolTip.innerText = fieldTip.intermediate;
            iToolTip.style.display = 'block';
        } else if (iT.checked){
            iToolTip.innerText = itTip.intermediate;
            iToolTip.style.display = 'block';
        } else if (operationsTip.checked){
            iToolTip.innerText = operationsTip.intermediate;
            iToolTip.style.display = 'block';
        } else if (operations.checked){
            iToolTip.innerText = operationsTip.intermediate;
            iToolTip.style.display = 'block';
        } else if (owner.checked){
            iToolTip.innerText = operationsTip.intermediate;
            iToolTip.style.display = 'block';
        }

    })
    intermediate.addEventListener('mouseout', function() {
        iToolTip.style.display = 'none';
    })

    // Advanced Tool Tip
    advanced.addEventListener('mouseover', function(){
        if(accounting.checked){
            aToolTip.innerText = accountingTip.advanced;
            aToolTip.style.display = 'block';
        } else if (callCenter.checked){
            aToolTip.innerText = callCenterTip.advanced;
            aToolTip.style.display = 'block';
        } else if (field.checked){
            aToolTip.innerText = fieldTip.advanced;
            aToolTip.style.display = 'block';
        } else if (iT.checked){
            aToolTip.innerText = itTip.advanced;
            aToolTip.style.display = 'block';
        } else if (operationsTip.checked){
            aToolTip.innerText = operationsTip.advanced;
            aToolTip.style.display = 'block';
        } else if (operations.checked){
            aToolTip.innerText = operationsTip.advanced;
            aToolTip.style.display = 'block';
        } else if (owner.checked){
            aToolTip.innerText = operationsTip.advanced;
            aToolTip.style.display = 'block';
        }

    });
    advanced.addEventListener('mouseout', function() {
        aToolTip.style.display = 'none';
    })
}
tooltipHover();


submitBtn.addEventListener('click', pdfDownloader)