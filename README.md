# project1
Project 1: The Game

This is my barebones version of Hangman. It's hosted at https://github/sfwinters/project1.

The player has two options: they can enter a word of their choosing (for 2 player games) or they can have a random word selected for them. Once the word is selected, the empty spaces will populate and the player will be given a box to submit their guesses.

The player can guess one letter at a time (the random generator will not provide any phrases or special characters, so those will be marked incorrect). If the letter is present in the word, it will populate on screen (this includes duplicate instances of the letter). Every time a letter is guessed correctly or incorrectly, their remaining guesses will be displayed. 

The player wins the game when all letters are filled in correctly (they can choose to type in the entire word as a guess as well). If the remaining guesses count reaches 0, the player loses.

I wrote most of this game using vanilla JS, jQuery, and HTML. I used CSS to make elements appear and disappear from the screen as needed. The random word generator was pulled from a node module that I installed containing 370,000 words. 
A lot of the features (getting things to appear and disappear, figuring out how to refresh the word and the remaining guesses without resetting the page, getting the guess box to clear after each guess) were a lot of trial and error. There are currently a ton of console.logs in the code so that I could continually check and make sure everything worked without breaking something else. 
CSS probably gave me the most difficulty, which was a surprise. Getting elements to hide and show was easy enough, but I am not sure how that affects the other CSS properties because they do not work consistently. Going to keep working on this.