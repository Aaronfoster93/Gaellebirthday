window.onload = function() {
    // Default start date (e.g., April 1, 2020)
    var defaultStartDate = new Date('2023-02-26T15:00');

    // Function to calculate and update the time difference
    function updateTimeDifference() {
        // Current date and time
        var currentDate = new Date();
        
        // Calculate the time difference
        var timeDifference = currentDate.getTime() - defaultStartDate.getTime();
        var yearsDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
        var monthsDifference = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.4375));
        var daysDifference = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30.4375)) / (1000 * 60 * 60 * 24));
        var hoursDifference = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutesDifference = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var secondsDifference = Math.floor((timeDifference % (1000 * 60)) / 1000);
        
        // Create the message
        var message = "Hey Gaelle, it's been \n\n" + yearsDifference + " years, " + monthsDifference + " months, " + daysDifference + " days, " + hoursDifference + " hours, " + minutesDifference + " minutes, and " + secondsDifference + " seconds\n\n since we first met and you fucking changed my life!\n\n Much love\n xoxo\n Aishi";
        
        // Display the message
        document.getElementById('message').innerText = message;
    }

    // Call updateTimeDifference function initially to display message immediately
    updateTimeDifference();

    // Call updateTimeDifference function every second
    setInterval(updateTimeDifference, 1000);
}
