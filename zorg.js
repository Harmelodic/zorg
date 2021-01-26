var zorgArray1 = [
	0, 2, 1, 3, 0, 1, 3, 1, 2, 0, 1, 3
];

var zorgArray2 = [
	4, 1, 2, 0, 0, 5, 6, 7, 12, 3, 5, 13,
	0, 1, 2, 8, 4, 4, 6, 8, 7, 9, 10, 4,
	12, 3, 11, 13, 11, 5, 1, 7, 0, 6, 2, 3,
	8, 9, 10, 11, 12, 10, 5, 13, 8, 9, 3, 11
];

var zorgArray3 = [
	0, -1, 2, 3, 4, 5, 6, 14, -1, 9, 10, 11,
	12, -1, 15, 13, 16, 17, 18, 19, 20, 21, 22, 23,
	8, 24, -1, 25, -1, 26, 27, 28, 29, 30, 31, 32,
	33, 7, 34, 35, 36, 37, 38, -1, 39, 40, 41, 42
];

var zorgResponses = [
	"DESTRUCT", "THREATEN", "KOWTOW", "TRADE", "DEMAND", "GREET",
	"SEDUCE", "IMPRESS", "KILL", "TRUST", "GIVE UP", "BLUFF", "OFFER",
	"PARTY", "SULK", "PLEAD", "FEAR", "SCOWL", "SCOFF", "OBEY", "RESPECT",
	"VILIFY", "HUMOR", "PITY", "IGNORE", "BEG", "FAINT", "BERATE",
	"HELP", "ARGUE", "SIMPER", "SNEER", "CALM", "SOOTHE", "SUCCOR",
	"SIGH", "SMIRK", "FLEE", "INSULT", "WAFFLE", "SALUTE", "WORSHIP",
	"WARN"
];

function setResponse(response) {
	document.getElementById("response").innerText = response;
}

function determineAnswer(word1Index, word2Index, word3Index, word4Index) {
	var subResult1 = (12 + word4Index - word3Index + word2Index) % 12;
	var subResult2 = (12 + word4Index - word3Index + word1Index) % 12;
	
	var temp = zorgArray1[word4Index];
	
	var result = zorgArray3[4 * subResult1 + temp];
	if (result == -1) {
		result = zorgArray2[4 * subResult2 + temp];
	}

	return zorgResponses[result];
}

function validate(words) {
	for (var i in words) {
		var word = words[i];

		if (isNaN(word) || word < 0 || word >= 12) {
			return false
		}
	}
	return true
}

function updateResponse() {
	var wordValues = [
		parseInt(document.getElementById("word1").value),
		parseInt(document.getElementById("word2").value),
		parseInt(document.getElementById("word3").value),
		parseInt(document.getElementById("word4").value)
	];

	var response = "";

	if (validate(wordValues)) {
		response = determineAnswer(wordValues[0], wordValues[1], wordValues[2], wordValues[3]);
	}

	setResponse(response);
}

updateResponse();
