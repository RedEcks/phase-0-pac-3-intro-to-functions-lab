function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}

const loudMessage="YES INDEED!";
const whisperMessage="I can\'t hear you!";
const dinnerMessage="I would love to!";

function sayHiToHeadphonedRoommate(string){
    if (string===logWhisper(string)||string==whisper(string)){
        return whisperMessage;
    }else if(string===logShout(string)||string===shout(string)){
        return loudMessage;
    }else if(string==="Let\'s have dinner together!"){
        return dinnerMessage;
    }
}
