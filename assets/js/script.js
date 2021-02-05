// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(passwordLength, useUppercase, useLowerCase, useNumeric, useSpecial) {

	// All of the most commonly supported characters
	// split into strings based on the type of character
	var specials = "\"'!@#$%^&*()_;+-=,.<>[]{}|/\\~` ";
	var uppers   = "QWERTYUIOPASDFGHJKLZXCVBNM";
	var lowers   = uppers.toLowerCase();
	var numbers  = "1234567890";

	// Make a list of valid characters for the password
	// based on the user's choices
	var validCharacters = "";

	if (useUppercase) validCharacters += uppers;
	if (useLowerCase) validCharacters += lowers;
	if ( useNumeric ) validCharacters += numbers;
	if ( useSpecial ) validCharacters += specials;

	console.log(`validCharacters=${validCharacters}`);

	// Append characters to the end of this string
	// randomly chosen from the "list" of valid characters
	var password = "";

	for (let x = 0; x < passwordLength; x++) {
		// Since Math.random() generates a decimal between 0 and 1
		// lets upscale it to make it between 0 and validCharacters.length 
		// And then Math.floor() it because decimal indices aren't a thing
		// Math.ceil() could potentially pick an index that's out of bounds
		let randomIndex = Math.floor(Math.random() * validCharacters.length);

		password += validCharacters[randomIndex];
	}

	return password;
}

// Write password to the #password input
function writePassword() {
	var passwordLength = window.prompt("Enter password length (between 8 and 128 characters):");

	if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
		alert("Please specify a length greater than 8.");
		return;
	}

	var useSpecial   = confirm("Use special characters? ('OK' for yes, 'Cancel' for no)");
	var useUpperCase = confirm("Use uppercase characters? ('OK' for yes, 'Cancel' for no)");
	var useLowerCase = confirm("Use lowercase? ('OK' for yes, 'Cancel' for no)");
	var useNumeric   = confirm("Use numbers? ('OK' for yes, 'Cancel' for no)");

	console.log(`Requested password length: ${passwordLength}`);
	console.log(`useLowerCase=${useLowerCase}, useUpperCase=${useUpperCase}, useNumeric=${useNumeric}, useSpecial=${useSpecial}`);

	var password = generatePassword(
		passwordLength,
		useUpperCase,
		useLowerCase,
		useNumeric,
		useSpecial
	);

	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
