function shakeform() {
    formanimate = document.getElementById("regForm");
    formanimate.scrollIntoView();
    formanimate.style.animation = "";
    setTimeout(() => formanimate.style.animation = "shake 0.5s 2", 2);
}


var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
    // This function will display the specified tab of the form...
    var x =
        document.getElementsByClassName("tab");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0 || n == x.length - 1) {
        document.getElementById(
            "prevBtn"
        ).style.display = "none";
    } else {
        document.getElementById(
            "prevBtn"
        ).style.display = "inline";
    }

    if (n == x.length - 2) {
        document.getElementById(
            "nextBtn"
        ).innerHTML = "Submit";
    } else {
        document.getElementById(
            "nextBtn"
        ).innerHTML = "Next";
    }
    if (n == x.length - 1) {
        document.getElementById(
            "nextBtn"
        ).innerHTML = "Done";
    }
    if (n == 0) {
        document.getElementById(
            "nextBtn"
        ).innerHTML = "Sign me UP";
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n);
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x =
        document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...
    if (currentTab == x.length - 1) {
        // ... the form gets submitted:
        document
            .getElementById("regForm")
            .submit();

    }
    if (currentTab >= x.length) {
        document
            .getElementById("regForm").style.display = "none"
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
    var budget = document.getElementById('budget').value;
    var savings = document.getElementById('savings').value;
    days = (budget / savings)*30-1;
    document.getElementById("dayswithus").innerHTML = "You are not gonna believe this, but you'll achieve your goal in " + Math.floor(days) + " days with us!";

}

function validateForm() {
    // This function deals with validation of the form fields
    var x,
        y,
        i,
        valid = true;
    x = document.getElementsByClassName("tab");
    y =
        x[currentTab].getElementsByTagName(
            "input"
        );
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false
            valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[
            currentTab
        ].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i,
        x =
            document.getElementsByClassName(
                "step"
            );
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(
            " active",
            ""
        );
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
}

//

var slider = document.getElementById("budget");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};
var slider1 = document.getElementById("savings");
var output1 = document.getElementById("demo1");
output1.innerHTML = slider1.value;

slider1.oninput = function () {
    output1.innerHTML = this.value;
};