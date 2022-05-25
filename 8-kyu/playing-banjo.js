// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:


function areYouPlayingBanjo(name) {

    if (name.charAt(0).toLowerCase() === "r") { // also     if (name[0].toLowerCase() === "r") {
        return name + " plays banjo"

    } else {
        return name + " doesn't play banjo"
    }
}

console.log(areYouPlayingBanjo("Rina"))