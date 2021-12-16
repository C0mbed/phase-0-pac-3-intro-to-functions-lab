// your code here

function shout(inString) {
    return inString.toUpperCase();
}

function whisper(inString) {
    return inString.toLowerCase();
}

function logShout(inString) {
    console.log(inString.toUpperCase());
}

function logWhisper(inString) {
    console.log(inString.toLowerCase());
}

function sayHiToHeadphonedRoomate(inString) {
    if (inString == inString.toLowerCase()) {
        return "I can't hear you!";
    } else if (inString == inString.toUpperCase()) {
        return "YES INDEED!";
    } else {
        return "I would love to!";
    }
}