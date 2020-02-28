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
const roleTooltips = [
    {accounting: [
        'Manage invoices', 
        'Process payments', 
        'Run payroll'
    ]
    },
    {callCenter: [
        'Book jobs', 
        'Assign technicians', 
        'Answer phones'
    ]
    },
    {Field: [
        'Install units', 
        'Service equipment ', 
        'Complete repairs'
    ]
    },
    {IT: [
        'Oversee systems', 
        'Manage software', 
        'Monitor integrations'
    ]
    },
    {Operations: [
        'Manage inventory', 
        'Oversee marketing', 
        'Update the Pricebook'
    ]
    },
    {Owner: [
        'Manage the business', 
        'Track performance', 
        'Review reports'
    ]
    }
]

const levelTooltips = [ 
    {beginner: [
        'Learn the basics',
        'Identify workflows',
        'Set business goals'
    ]},
    {intermediate: [
        'Test new features',
        'Discover capabilities',
        'Tailor processes'
    ]},
    {advance: [
        'Look for growth',
        'Validate processes',
        'Measure success'
    ]},
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






function getElemId() {

    function getId(obj){
        console.log(obj.currentTarget.id);
    }

    let inputs = document;
    inputs.onmouseover = function(e) {
        var targ;
        if (!e) var e = window.event;
        if (e.target) targ = e.target;
        else if (e.srcElement) targ = e.srcElement;
        if (targ.nodeType == 3) // defeat Safari bug
            targ = targ.parentNode;
        console.log(targ.id);
    }
}

getElemId();


// Tooltip Hover
function tooltipHover() {
    // Object Variables
    let accountingTip = roleTooltips[0];
    let callCenterTip = roleTooltips[1];
    let fieldTip = roleTooltips[2];
    let itTip = roleTooltips[3];
    let operationsTip = roleTooltips[4];
    let ownerTip = roleTooltips[5];

    let currentHover = null;

    console.log(accountingTip);


    // Beginner Tool Tips
    beginner.addEventListener('mouseover', function(){
        if(accounting.checked){
            tooltip.innerText = accountingTip.beginner;
            tooltip.style.display = 'block';
            console.log(accountingTip.beginner);
        } 
    })
    beginner.addEventListener('mouseout', function() {
        tooltip.style.display = 'none';
    })
    
}

tooltipHover();


submitBtn.addEventListener('click', pdfDownloader)