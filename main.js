/**
 Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
**/

function smash (words) {
    let revamped = words.toString();
    revamped = revamped.replaceAll(',', ' ')
    return revamped
 };

 console.log(smash(["fuu", "uu","uu","sion", "ha!"]))

 /**
 What also works is


 smash = function (words) {
  return words.join(" ");
};

 
**/