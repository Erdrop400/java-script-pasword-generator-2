function generatePassword(length, includeLowercase, includeNumber, includeUppercase, includeSymbols) {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-={}[]:;<>?/|";

    let characters = "";
    if (includeLowercase) characters += lowercase;
    if (includeUppercase) characters += uppercase;
    if (includeNumber) characters += numbers;
    if (includeSymbols) characters += symbols;

    if (characters.length === 0) {
        return "Error: No character types selected!";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

// Example usage:
const passwordLength = 19;
const includeLowercase = true;
const includeUppercase = true;
const includeNumber = true;
const includeSymbols = true;

console.log(generatePassword(passwordLength, includeLowercase, includeNumber, includeUppercase, includeSymbols));
