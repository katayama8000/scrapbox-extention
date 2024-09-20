window.onload = () => {
    console.log("Window has loaded, script is running");

    const calculateRemainingWeeks = (): number => {
        const today = new Date(); // Get the current date
        const currentYear = today.getFullYear(); // Get the current year
        const jstOffset = 9 * 60; // JST offset in minutes (UTC+9)
        const jstTime = new Date(today.getTime() + jstOffset * 60 * 1000); // Convert to JST

        // Set the date to the end of the year (December 31)
        const endOfYear = new Date(currentYear, 11, 31, 23, 59, 59); // Month is 0-indexed, 11 means December
        const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000; // Number of milliseconds in a week

        // Ensure the result of the subtraction is a number
        const timeDifference = endOfYear.getTime() - jstTime.getTime(); // Get time difference in milliseconds

        // Calculate the remaining weeks by dividing the time difference by the milliseconds per week
        return Math.ceil(timeDifference / millisecondsPerWeek); // Round up to account for partial weeks
    };

    // Select the div element with the class 'flex-box'
    const flexBox = document.querySelector('.flex-box');

    if (flexBox) {
        console.log("flex-box element found");

        const remainingWeeksDiv = document.createElement('div'); // Create a new <div> element
        const remainingWeeks = calculateRemainingWeeks(); // Calculate the remaining weeks
        remainingWeeksDiv.textContent = `Remaining weeks: ${remainingWeeks}`; // Set the text content
        remainingWeeksDiv.classList.add('page-list-mode-menu'); // Add the class 'page-list-mode-menu'
        flexBox.appendChild(remainingWeeksDiv); // Append the new div to the flex-box element
    } else {
        console.error("flex-box element not found");
    }
};