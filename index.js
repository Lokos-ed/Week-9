/* Deal 26 Cards to each Player from a Deck of 52 cards.
Iterate through the turns where each Player plays a Card.
The Player who played the higher card is awarded a point.
-Ties result in zero points for both Players.
After all cards have been played, display the score and declare the winner. */

// This creates the deck class with the arrays for the deck, ranks, and the suits.
class Deck {
    constructor() {
        this.deck = []
        this.ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
        this.suits = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"]
    }
    //This is the function for making the deck.
    createDeck() {
        //this loops through the length of the suits array
        for (let i = 0; i < this.suits.length; i++) {
            //this loops through the length of the ranks array
            for (let s = 0; s < this.ranks.length; s++) {
                //this creates a value based on where the two loops are in the array.
                let card = {
                    name: `${this.suits[i]} ${this.ranks[s]}`,
                    value: (s + 1)
                } 
                //this pushes the value of the card variable to the deck array
                this.deck.push(card);
            }
        }
    }


}
const deck = new Deck();
deck.createDeck();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


class Player {
    constructor() {
        this.hand = []
        this.points = 0
    }
    drawHand() {
        for (let d = 0; d < 26; d++) {
           var cardIndex = getRandomInt(deck.deck.length)
           this.hand.push(deck.deck[cardIndex])
           deck.deck.splice(cardIndex, 1)
        }
    }


}
const player1 = new Player();
player1.drawHand();
console.log(player1.hand)
const player2 = new Player();
player2.drawHand();
console.log(player2.hand);

/*Find a way to randomize deck array (shuffle) before making player classes draw their hands (26 cards)
Make sure program knows Ace > King > Queen > Jack > 10

*/