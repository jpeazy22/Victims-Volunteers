var disasterVictim = prompt("Enter estimated number of disaster victims: ")

var victim= []
var victimInfo = {

};
// var disasterVictim = []
// var volunteers = []

for (i = 0; i < +disasterVictim; i++) {

	var vname = prompt("Please enter first and last name")
	var phoneNumber = prompt("Enter victim's phone number")
	var address = prompt("Enter victim's address")

    victim.push(disasterVictim);
    victim.push(vname);
    victim.push(phoneNumber);
    victim.push(address);

    console.log(victim)
};


//document.getElementById('theInput').focus

//very very commonly used.  KNOW THIS
// var allWords = ['cat', 'red', 'zebra', 'otter', 'duck', 'arm']


// var get3LetterWords = function(wordArray) {
// 	var output = []
// 	for(var i = 0; i < allWords.length; i++){
// 		if(allWords[i].length === 3){
// 			output.push(allWords[i])
// 		}
// 	}
	
// 	return output
// }

// var the3LetterWords = get3LetterWords(allWords)
// console.log(the3LetterWords)