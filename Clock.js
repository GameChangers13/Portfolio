// Function to update the time
function updateTime() {
    const timeElement = document.getElementById("time");

    // Get the current time
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format time (12-hour clock + AM/PM)
    let ampm = hours >= 12 ? " PM" : " AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // converts 0 to 12

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Display time
    timeElement.textContent = `${hours}:${minutes}:${seconds}${ampm}`;
}

// Function to update the current date
function currentDate() {
    const dateElement = document.getElementById("date");

    // Get current date
    const now = new Date();
    let month = now.getMonth() + 1; // Months are 0-based
    let day = now.getDate();
    let year = now.getFullYear();

    // Format date
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;

    // Display date
    dateElement.textContent = `${month}/${day}/${year}`;
}

// Update every second
setInterval(updateTime, 1000);

// Initial calls
updateTime();
currentDate( );