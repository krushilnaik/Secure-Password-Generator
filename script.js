// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(passwordLength, useUppercase, useLowerCase, useNumeric, useSpecial) {

	// All of the most commonly supported characters
	// split into strings based on the type of character
	var specials = "\"'!@#$%^&*()_;+-=,.<>[]{}|/\\~`";
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

	// Append characters to the end of this string
	// randomly chosen from the "list" of valid characters
	var password = "";

	for (let x = 0; x < passwordLength; x++) {
		randomIndex = Math.floor(Math.random() * validCharacters.length);
		password += validCharacters[randomIndex];
	}

	return password;
}

// Write password to the #password input
function writePassword() {
	var passwordLength = window.prompt("How long do you want your password to be?\n(must be at least 8 characters)");

	if (passwordLength < 8) {
		alert("Please specify a length greater than 8.");
		return;
	}

	var useUppercase = confirm("Would you like to use uppercase characters?\n('OK' for yes, 'Cancel' for no)");
	var useLowerCase = confirm("Would you like to use lowercase characters?\n('OK' for yes, 'Cancel' for no)");
	var useNumeric   = confirm("Would you like to use numbers?\n('OK' for yes, 'Cancel' for no)");
	var useSpecial   = confirm("Would you like to use special characters?\n('OK' for yes, 'Cancel' for no)");

	var password = generatePassword(
		passwordLength,
		useUppercase,
		useLowerCase,
		useNumeric,
		useSpecial
	);

	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
