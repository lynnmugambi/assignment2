var input = prompt("Enter a number between 0 and 15: ")
input = parseInt(input)

//check for valid input
while(input<0 || input>15 || isNaN(input))
{
	input = prompt("Bad input! Try again, must be between 0 - 15")
	input  = parseInt(input)
}

//alert("You entered "+input)

//converts decimal to Hex
function convertDecToHex(dec){
	if(dec >= 0 && dec <=9){
		return dec
	}
	switch (dec){
		case 10:
		return "A"
		break;
		case 11:
		return "B"
		break;
		case 12:
		return "C"
		break;
		case 13:
		return "D"
		break;
		case 14:
		return "E"
		break;
		case 15:
		return "F"
		break;
	}
}


var hex = convertDecToHex(input);
alert(input + " is " + hex + " in hexadecimal")
console.log(input + " in hexadecimal is " + hex) 
