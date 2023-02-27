function truncate(str, num) {
    let arr = str.split(" ");
    if (num >= arr.length) {
    return str;
    } else {
    return arr.slice(0, num).join(" ");
    }
    }
    
    console.log(truncate("The quick brown fox jumps over the lazy dog", 4)); // "The quick brown fox"
    
    alphabetize_string:
    
    function alphabetize_string(str) {
    return str.split("").sort().join("");
    }
    
    console.log(alphabetize_string("United States")); //"adeeinsstttu"
    
    ascii_to_hexa:
    
    function ascii_to_hexa(str) {
    let hex = "";
    for (let i = 0; i < str.length; i++) {
    hex += str.charCodeAt(i).toString(16);
    }
    return hex;
    }
    
    console.log(ascii_to_hexa("12")); //3132
    console.log(ascii_to_hexa("100")); //313030
    
    humanize:
    
    function humanize(num) {
    if (num % 100 >= 11 && num % 100 <= 13) {
    return num + "th";
    }
    switch (num % 10) {
    case 1:
    return num + "st";
    case 2:
    return num + "nd";
    case 3:
    return num + "rd";
    default:
    return num + "th";
    }
    }
    
    console.log(humanize(1)); //"1st"
    console.log(humanize(20)); //"20th"
    console.log(humanize(302)); //"302nd"
    
    successor:
    
    function successor(str) {
    const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
    const NUMBERS = "0123456789";
    let lastChar = str[str.length - 1];
    let nextChar = "";
    let result = "";
    if (ALPHABET.includes(lastChar.toLowerCase())) {
    let isUpperCase = lastChar === lastChar.toUpperCase();
    let index = ALPHABET.indexOf(lastChar.toLowerCase());
    nextChar = ALPHABET[(index + 1) % 26];
    if (isUpperCase) {
    nextChar = nextChar.toUpperCase();
    }
    result = successor(str.slice(0, -1)) + nextChar;
    } else if (NUMBERS.includes(lastChar)) {
    nextChar = NUMBERS[(Number(lastChar) + 1) % 10];
    if (nextChar === "0") {
    result = successor(str.slice(0, -1)) + nextChar;
    } else {
    result = str.slice(0, -1) + nextChar;
    }
    } else {
    result = str.slice(0, -1) + String.fromCharCode(lastChar.charCodeAt(0) + 1);
    }
    return result;
    }
    
    console.log(successor("abcd")); // "abce"
    console.log(successor("THX1138")); // "THX1139"
    console.log(successor("< >")); // "< >"
    console.log(successor("1999zzz")); // "2000aaa"
    console.log(successor("ZZZ9999")); // "AAAA0000"
    
    compare_to_sort:
    
    function compare_to_sort(arr) {
    return arr.sort((a, b) => {
    if (a.title < b.title) {
    return -1;
    }
    if (a.title > b.title) {
    return 1;
    }
    return 0;
    });
    }
    
    var library = [
    { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
    { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 426