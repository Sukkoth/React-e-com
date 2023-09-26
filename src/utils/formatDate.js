function formatDateToDaysAgo(dateString) {
    const date = new Date(dateString);
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - date;

    // Calculate the number of days
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Create the "X days ago" string
    if (daysAgo === 0) {
        return 'Today';
    } else if (daysAgo === 1) {
        return 'Yesterday';
    } else if (daysAgo > 1) {
        return `${daysAgo} days ago`;
    } else {
        return 'Invalid Date';
    }
}

// Example usage
// const dateString = '2023-09-21T11:34:17.420Z';
// const formattedDate = formatDateToDaysAgo(dateString);
// console.log(formattedDate);

export default formatDateToDaysAgo;
