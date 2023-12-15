// JavaScript code for updating the clock display
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Format the time
    var timeString = hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);

    // Update the clock display
    document.getElementById('clockDisplay').textContent = timeString;

    // Update every second
    setTimeout(updateClock, 1000);
}

// Function to generate calendar content dynamically
function generateCalendar() {
    var calendarBody = document.getElementById('calendarBody');
    var calendarTable = document.getElementById('calendarTable');

    // Clear previous content
    calendarBody.innerHTML = '';

    var currentDate = new Date();
    currentDate.setDate(1); // Set the date to the 1st day of the month

    var firstDay = currentDate.getDay();
    var lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(); // Get the last day of the month

    var dayCount = 1;

    // Display the current month and year in the calendar heading
    var monthYearString = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentDate);
    document.getElementById('calendarHeading').textContent = monthYearString;

    // Generate calendar rows
    for (var i = 0; i < 6; i++) {
        var row = document.createElement('tr');

        // Generate calendar cells
        for (var j = 0; j < 7; j++) {
            var cell = document.createElement('td');

            if (i === 0 && j < firstDay) {
                // Empty cells before the 1st day
                cell.textContent = '';
            } else if (dayCount > lastDay) {
                // Empty cells after the last day
                cell.textContent = '';
            } else {
                // Populate cells with day numbers
                cell.textContent = dayCount;
                dayCount++;
            }

            row.appendChild(cell);
        }

        calendarBody.appendChild(row);
    }
}

// Initial call to start the clock and generate the calendar
updateClock();
generateCalendar();
