const navgation = document.querySelector('.navgationsign')
const checked = document.querySelector('.checkboxx')
const firstname = document.getElementById('fname')
const lastname = document.getElementById('lname')


function one() { 
    // checked ? navgation.style.disply =  `${-320 } + "px"` : navgation.style.left = 80 + "px"; 
    if (checked) {
        navgation.style.left = -320 + "px";
        
    } else {
        navgation.style.left = 80 + "px"; 
    }
}



function loginuser(fname , lname) {
    return document.body.innerHTML =  `<h3> ${fname} ${lname} </h3>`
}

