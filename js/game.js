const oxford = 'https://od-api.oxforddictionaries.com/api/v2/entries/english/word_id.lower'

const submitWord = $('#submitWord');
const randomWord = $('#randomWord');
const btn = document.getElementsByClassName('button')
const txt = document.getElementsByClassName('txt')
h3 = document.getElementsByClassName('h3')
console.log(btn)


submitWord.click( e => {
    e.preventDefault();
    const chosenWord = $('#guessWord').val();
    renderWord(chosenWord);
    hideElements();
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
        txt.guessWord.classList.add('hide-me');
        // h3.h3.classList.add('hide-me')
    }

    function renderWord(data) {
        let wordSpaces = '';
        for (i = 0; i < data.length; i++) {
            if (i == 0) {
                wordSpaces += '_';
            } else {
                    wordSpaces += ' _';
                };
            };
            document.body.append(wordSpaces)
        }