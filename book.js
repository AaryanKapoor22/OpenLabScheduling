const bookedButton = document.getElementById('missed');
const openButton = document.getElementById('open');

const missedContent = document.getElementById('missed-content');
const openContent = document.getElementById('open-content');

bookedButton.addEventListener("click", bookedClick);
openButton.addEventListener("click", openClick);


function bookedClick() {
    bookedButton.classList.add('active-link', 'active');
    openButton.classList.remove('active-link', 'active');
    missedContent.hidden = false;
    openContent.hidden = true;
}

function openClick() {
    openButton.classList.add('active-link', 'active');
    bookedButton.classList.remove('active-link', 'active');
    openContent.hidden = false;
    missedContent.hidden = true;
}


$('#bookingModal1').on('show.bs.modal', function (e) {
    var button = $(e.relatedTarget); // Button that triggered the modal
    var sessionDate = button.data('session-date'); // Extract info from data-* attributes
    updateTimer(sessionDate); // Start the timer
});

var countdownInterval; // Global variable to keep track of the interval

function updateTimer(sessionDate) {
    // Clear any existing timer
    clearInterval(countdownInterval);

    var countDownDate = new Date(sessionDate).getTime();

    countdownInterval = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes, and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('#bookingModal1').on('show.bs.modal', function (e) {
            // Reset the timer display to a default state or loading message
            document.getElementById("timeLeft").innerHTML = "Loading...";
        
            var button = $(e.relatedTarget); // Button that triggered the modal
            var sessionDate = button.data('session-date'); // Extract info from data-* attributes
            updateTimer(sessionDate); // Start the timer
        });
        
        // Update the timer display
        document.getElementById("timeLeft").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        // Disable booking if time is less than 24 hours
        if (distance < 86400000) {
            document.getElementById("bookingButton").disabled = true;
        } else {
            document.getElementById("bookingButton").disabled = false;
        }

        // If countdown is over
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("timeLeft").innerHTML = "Booking closed";
            document.getElementById("bookingButton").disabled = true;
        }
    }, 1000);
}

