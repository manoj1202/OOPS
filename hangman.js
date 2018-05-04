const Hangman = function(word  = [], guesses){
    this.word = word.toLowerCase().split('');
    this.guesses = guesses;
    this.gussedLetters = ['c'];
}

Hangman.prototype.getPuzzel = function(){
    let puzzel = '';

    this.word.forEach((letter) => {

          //   puzzel = (this.gussedLetters.includes(letter) || letter === ' ') ? (puzzel += letter ): (puzzel += '*')
        if(this.gussedLetters.includes(letter) || letter === ' ')
        {
             puzzel +=  letter
        } else {
            puzzel +=  '*';
        }
    })
    return puzzel;
}


const match = new Hangman('cat', 2); 
console.log(match.getPuzzel());
const word2 = new Hangman('New Jersy', 4);
 console.log(word2.getPuzzel());