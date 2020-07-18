/*if ($('#mysteryWord').val().includes(guessedLetter) === true) {
    let placeholder = $('#mysteryWord').val().indexOf(guessedLetter);
    console.log(placeholder)
    wordSpaces.splice(placeholder, 1, guessedLetter)
}
$('.gameArea').html(wordSpaces);
this works for getting one letter at a time to appear. Does not work on multiple instances of letter.
*/
let evenSum = 0;
for (i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        evenSum+=i;
    }
}
console.log(evenSum)
