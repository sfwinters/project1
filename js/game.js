const ranWords = 'https://github.com/xyfir/rword/blob/master/package.json'

const submitWord = $('#submitWord');
const randomWord = $('#randomWord');
const btn = document.getElementsByClassName('button');
const txt = document.getElementsByClassName('txt');
const guessBox = $('#guessBox');
const guessBtn = $('#guessBtn');
const h3 = document.getElementsByClassName('h3');
let wordSpaces = [];
let wrongGuess = 0;


submitWord.click( e => {
    e.preventDefault();
    const mysteryWord = $('#mysteryWord').val();
    wordFactory(mysteryWord);
    hideElements();
    });

guessBtn.click( e => {
    e.preventDefault();
    let guessedLetter = $('#guessBox').val();
    let mysteryWord = $('#mysteryWord').val();
    console.log(mysteryWord);
    if (mysteryWord.includes(guessedLetter) === false) {
        wrongGuess +=1;
        console.log(wrongGuess)
        } else {
            for (i = 0; i < mysteryWord.length; i++) {
                if (mysteryWord[i] === guessedLetter) {
            wordSpaces.splice(i, 1, guessedLetter)
            }
        }
    }
    $('.gameArea').html(wordSpaces);
    guessBox.val('')
});



randomWord.on('click', e => {
    e.preventDefault();
    
    $.ajax({
        url: ranWords,
        type: 'GET',
        data: {
            // '$limit': ,
        },
        success: data => {
            rword.generate(data)
            },
        error: err => {
            console.log(err, 'error');
            }
        })
    });

    function hideElements() {
        btn.submitWord.classList.add('hide-me');
        // btn.randomWord.classList.add('hide-me');
        txt.mysteryWord.classList.add('hide-me');
        // h3.h3.classList.add('hide-me')
       guessBox.show();
       guessBtn.show();
    }

    function wordFactory(data) {
        for (i = 0; i < data.length; i++) {
            if (i == 0) {
                wordSpaces.push('_');
            } else {
                wordSpaces.push(' _');
                };
            };
            $('.gameArea').append(wordSpaces);
        }
    