function updateTime() {
    const date = new Date();

    const hours = date.getHours();
    const hoursAdjusted = (hours > 12 ? hours - 12 : hours);
    const mins = date.getMinutes();
    const secs = date.getSeconds();

    const timeString = (hoursAdjusted >= 10 ? hoursAdjusted : "0" + hoursAdjusted) + ":"
        + (mins >= 10 ? mins : "0" + mins) + ":"
        + (secs >= 10 ? secs : "0" + secs) + " "
        + (hours >= 12 ? "PM" : "AM") + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")";

    document.getElementById('clock').innerHTML = "<strong>The current time is:</strong> " + timeString;

    setTimeout(updateTime, 1000);
}

updateTime()