var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var row = "";
function stackLetters() {
	for (var i = 0; i < alphabet.length; i++) {
		var remain = i % 3;
		if (remain === 0 ) {
			row += " ";
		}
		row += alphabet[i];
		console.log(row);
	}

	return row;
}



var theStack = stackLetters(alphabet);
// console.log("theStack = ", theStack);