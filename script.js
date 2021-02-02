// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(passwordLength, useUppercase, useLowerCase, useNumeric, useSpecial) {
	var specials = "\"'!@#$%^&*()_;+-=,.<>[]{}|/\\~`";
	var uppers   = "QWERTYUIOPASDFGHJKLZXCVBNM";
	var lowers   = uppers.toLowerCase();
	var numbers  = "1234567890";

	var validCharacters = "";

	if (useUppercase) validCharacters += uppers;
	if (useLowerCase) validCharacters += lowers;
	if ( useNumeric ) validCharacters += numbers;
	if ( useSpecial ) validCharacters += specials;

	var password = "";

	for (let x = 0; x < passwordLength; x++) {
		randomIndex = Math.floor(Math.random() * validCharacters.length);
		password += validCharacters[randomIndex];
	}

	return password;
}

// Write password to the #password input
function writePassword() {
	passwordLength = Number(window.prompt("How long do you want your password to be?\n(must be at least 8 characters)"));

	if (passwordLength < 8) {
		alert("Please specify a length greater than 8.");
		return;
	}

	useUppercase = confirm("Would you like to use uppercase characters?\n('OK' for yes, 'Cancel' for no)");
	useLowerCase = confirm("Would you like to use lowercase characters?\n('OK' for yes, 'Cancel' for no)");
	useNumeric   = confirm("Would you like to use numbers?\n('OK' for yes, 'Cancel' for no)");
	useSpecial   = confirm("Would you like to use special characters?\n('OK' for yes, 'Cancel' for no)");

	var password = generatePassword(
		passwordLength,
		useUppercase,
		useLowerCase,
		useNumeric
	);

	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
