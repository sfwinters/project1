const oxford = 'https://od-api.oxforddictionaries.com/api/v2/entries/english/word_id.lower'

const submitWord = $('#submitWord');
const randomWord = $('#randomWord');
const btn = document.getElementsByClassName('button');
const txt = document.getElementsByClassName('txt');
const guessBox = $('#guessBox');
const guessBtn = $('#guessBtn');
const h3 = document.getElementsByClassName('h3');
let wordSpaces = [];


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
    console.log(mysteryWord)
    for (i = 0; i < mysteryWord.length; i++) {
        if (mysteryWord[i] === guessedLetter) {
            wordSpaces.splice(i, 1, guessedLetter)
        }
    }
    $('.gameArea').html(wordSpaces);
});



// randomWord.on('click', e => {
//     e.preventDefault();
    
    // $.ajax({
    //     url: oxford,
    //     type: 'GET',
    //     data: {
    //         // '$limit': ,
    //         '$$app_id': '5f1c72fb',
    //         '$$app_key': 'c9c885d975fab31b53797d922d69621'
    //     },
    //     success: data => {
    //         let rdm = Math.floor(Math.random() * data.length);
    //         let pickedWord = data[rdm];
    //         console.log(pickedWord);
    //         },
    //     error: err => {
    //         console.log(err, 'error');
    //         }
    //     })
    // });

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
    