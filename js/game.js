const randomWordUrl = './node_modules/rword/words/big.json';

const submitWord = $('#submitWord');
const randomWord = $('#randomWord');
const btn = document.getElementsByClassName('button');
const txt = document.getElementsByClassName('txt');
const guessBox = $('#guessBox');
const guessBtn = $('#guessBtn');
const h3 = document.getElementsByClassName('h3');
let wordSpaces = [];
let randomWordsArray = [];
let finalWord = [];
let winmsg = $('#winmsg')
let losemsg = $('#losemsg');
document.createElement('h2');
let endmsg = document.getElementsByTagName('h2');
endmsg.innerHTML = "The word was " + finalWord;
winmsg.hide();
losemsg.hide();
let wrongGuess = 0;
let imgloc = document.getElementsByClassName("hangimg");
let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
$('#bettos').append(alphabet);

function wordFactory(word) {
    for (i = 0; i < word.length; i++) {
        if (i == 0) {
            wordSpaces.push('_');
        } else {
            wordSpaces.push(' _');
            };
    }
        $('.gameArea').append(wordSpaces);
    }

submitWord.click( e => {
    e.preventDefault();
    let mysteryWord = $('#mysteryWord').val();
    hideElements();
    wordFactory(mysteryWord);
    console.log(mysteryWord)
    finalWord.push(mysteryWord.toLowerCase());
    });

randomWord.on('click', e => {
    e.preventDefault();
    
    $.ajax({
        url: randomWordUrl,
        type: 'GET',
        success: data => {
            data.map(i => randomWordsArray.push(i));
            function pickAWord () {
                const roulette = Math.floor(Math.random( ) * randomWordsArray.length);
                let rando = randomWordsArray[roulette];
                console.log(rando)
                hideElements();
                wordFactory(rando);
                finalWord.push(rando.toLowerCase());
                console.log(finalWord);
            };
            pickAWord();
        },
        error: err => {
            console.log(err, 'error');
            },
        data: {

            },
        });
});
    
guessBtn.click( e => {
    e.preventDefault();
    let guess = $('#guessBox').val();
    let guessedLetter = guess.toLowerCase();
    let reallyFinal = finalWord[0];
    let marker = alphabet.indexOf(guessedLetter.toUpperCase());
    let x = alphabet[marker];
    if (alphabet.includes(guessedLetter.toUpperCase()) === false) {
            alert( "You have already picked this letter." );
            guessBox.val('');
            return;
        };
    if (reallyFinal.includes(guessedLetter) === false) {
        wrongGuess += 1;
        guessesRemaining -=1;
        console.log(alphabet.splice(marker, 1));
        } else {
            for (i = 0; i < reallyFinal.length; i++) {
                if (reallyFinal[i] === guessedLetter) {
                    wordSpaces.splice(i, 1, guessedLetter)
                    console.log(alphabet.splice(marker, 1));
                } else if (guessedLetter === reallyFinal) {
                    wordSpaces.splice(0, reallyFinal.length, guessedLetter);
                    endGame();
                }
            }
        }
    $('.gameArea').html(wordSpaces.join('') + '</br>' + 'Guesses Remaining: ' + guessesRemaining);
    $("#hangimg").attr("src","img/hangman-" + wrongGuess + ".png");
    $('#bettos').html(alphabet)
    guessBox.val('');
    endGame(); 
    });
    function hideElements() {
        btn.submitWord.classList.add('hide-me')
        btn.randomWord.classList.add('hide-me');
        txt.mysteryWord.classList.add('hide-me');
        $('#h2-1').hide();
       guessBox.show();
       guessBtn.show();
    } 

    // let wrongGuess = $('#guessBtn').wrongGuess
    let guessesRemaining = 7
    
    function endGame() {
        if (wordSpaces.join('') === finalWord[0]) {
            guessBtn.hide();
            guessBox.hide();
            winmsg.show();
            $('#resetBtn').show();
        } else if (guessesRemaining <= 0) {
            guessBtn.hide();
            guessBox.hide();
            losemsg.show();
            $('.gameArea').html('The word was ' + finalWord + '.');
            $('#resetBtn').show();
        };
        $('#resetBtn').click( e => {
            e.preventDefault();
            location.reload();
    });
    };

const alphaDiv = document.getElementById('alphabetArea');