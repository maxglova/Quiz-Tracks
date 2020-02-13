// Quiz Tracks
// Originally created for the 2020 Pantheon site

// var roleSelected = document.querySelector(`input[name = 'jobRoles']:checked`).value;
// console.log(`${roleSelected}`);


// var radios = document.getElementsByName('jobRoles');

// if (document.getElementById('accounting-btn').checked) {
//     rate_value = document.getElementById('accounting-btn').value;
//   } else if (document.getElementById('call-center-btn').checked) {
//     rate_value = document.getElementById('call-center-btn').value;
//   } else if (document.getElementById('field-btn').checked) {
//     rate_value = document.getElementById('field-btn').value;
//   } else if (document.getElementById('IT-btn').checked) {
//     rate_value = document.getElementById('IT-btn').value;
//   } else if (document.getElementById('operations-btn').checked) {
//     rate_value = document.getElementById('operations-btn').value;
//   } else {
//       rate_value = undefined;
//   }

//   console.log(`${rate_value}`)

function updatePdf() {
    let jobRole = undefined;
    let proficiency = undefined;
    
    function getRole() {
        if(document.getElementById('accounting').checked) {
            let jobRole = document.getElementById('accounting').value
        } else {
            let jobRole = undefined;
        }
        console.log(`${jobRoles}`);
    }
}
