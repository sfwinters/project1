const randomWordUrl = './node_modules/rword/words/big.json';

const submitWord = $('#submitWord');
const randomWord = $('#randomWord');
const btn = document.getElementsByClassName('button');
const txt = document.getElementsByClassName('txt');
const guessBox = $('#guessBox');
const guessBtn = $('#guessBtn');
const h3 = document.getElementsByClassName('h3');
let wordSpaces = [];
let wrongGuess = 0;
let randomWordsArray = [];
let finalWord = [];


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
    finalWord.push(mysteryWord);
    console.log(finalWord);
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
                finalWord.push(rando)
                console.log(finalWord)
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
    let guessedLetter = $('#guessBox').val();
    console.log(guessedLetter)
    let reallyFinal = finalWord[0];
    if (reallyFinal.includes(guessedLetter) === false) {
        wrongGuess +=1;
        console.log(wrongGuess)
        } else {
            for (i = 0; i < reallyFinal.length; i++) {
                if (reallyFinal[i] === guessedLetter) {
            wordSpaces.splice(i, 1, guessedLetter)
            }
        }
    }
    $('.gameArea').html(wordSpaces);
    guessBox.val('')
});
    function hideElements() {
        btn.submitWord.classList.add('hide-me');
        btn.randomWord.classList.add('hide-me');
        txt.mysteryWord.classList.add('hide-me');
        h3.h3.classList.add('hide-me')
       guessBox.show();
       guessBtn.show();
    } 

    
    