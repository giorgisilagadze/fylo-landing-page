let email = document.getElementById("email")
let em = /([a-zA-Z0-9_-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,10})+$/
let check = document.getElementById("check")

function validation() {

    if(em.test(email.value) == true) {
        email.style.border = "solid green 2px";
        check.style.display = "none";
    }else {
        email.style.border = "solid red 2px";
        check.style.display = "block";
    }
}

let email_2 = document.getElementById("email-2")
let check_2 = document.getElementById("check-2")

function validation_bott() {

    if(em.test(email_2.value) == true) {
        email_2.style.border = "solid green 2px";
        check_2.style.display = "none";
    }else {
        email_2.style.border = "solid red 2px";
        check_2.style.display = "block";
    }
}