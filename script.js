// Set the date we're counting down to
const countDownDate = new Date("May 21, 2024 13:00:00").getTime();

// Update the count down every 1 second
const countdownFunction = setInterval(function() {
    // Get today's date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the count down date
    const distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Format time values as two digits
    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    // Output the result in an element with id="timer"
    document.getElementById("days").innerText = formatTime(days);
    document.getElementById("hours").innerText = formatTime(hours);
    document.getElementById("minutes").innerText = formatTime(minutes);
    document.getElementById("seconds").innerText = formatTime(seconds);
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("timer").innerText = "ISTEKLO";
    }
}, 1000);
