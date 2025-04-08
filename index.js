/* Deal 26 Cards to each Player from a Deck of 52 cards.
Iterate through the turns where each Player plays a Card.
The Player who played the higher card is awarded a point.
-Ties result in zero points for both Players.
After all cards have been played, display the score and declare the winner. */

// This creates the deck class with the arrays for the deck, ranks, and the suits.
class Deck {
    constructor() {
        this.deck = []
        //I made it so Ace ranks above all else. This is because the way I used to play War was that Ace was a silver bullet that was greater than all else.
        this.ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
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
//This creates a new deck instance and calls upon the createDeck function
const deck = new Deck();
deck.createDeck();

//Gets a number between 0 and whatever the function is applied to
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

//Creates the Player class with an empty hand array and a starting value for points
class Player {
    constructor() {
        this.hand = []
        this.points = 0
    }
    //This starts a loop that lasts for half the length of the deck whenever it is called upon. This is used to give each player an equal number of cards.
    drawHand() {
        for (let d = 0; d < 26; d++) {
            //This gets a random position in the array taking the value of the index, pushing it to the player's hand, and removing the selected value from the array.
           var cardIndex = getRandomInt(deck.deck.length)
           this.hand.push(deck.deck[cardIndex])
           deck.deck.splice(cardIndex, 1)
        }
    }
//This allows the players to draw the cards from their deck by taking the last value in their hand arrays and removing it.
    drawCard() {
        var cardPick = this.hand.pop()
        return cardPick
    } 



}
//This creates two new player instances and gives them each randomized cards from half of the existing deck
const player1 = new Player();
const player2 = new Player();
player1.drawHand();
player2.drawHand();

//This is a for loop that leads into an if, else if statement. This is designed to display the cards played on the current turn, decide which players won based on what the card's .value is, and award and display the current points after the fact.
//If no victor for the round has been chosen, the turn will end in a tie with no side receiving points.
for (a = 1; a < 27; a++) {
    player1card = player1.drawCard(), player2card = player2.drawCard()
    if (player1card.value > player2card.value) {
        console.log(`Turn ${[a]}`)
        console.log(`Player 1 Card: ${player1card.name} Player 2 Card: ${player2card.name}`)
        console.log(`Player 1 Earns a Point!`)
        player1.points += 1
        console.log(`Player One Score: ${player1.points}, Player Two Score: ${player2.points}`)
        console.log("--------------------------------------------------------------------------")
    } else if (player1card.value < player2card.value) {
        console.log(`Turn ${[a]}`)
        console.log(`Player 1 Card: ${player1card.name} Player 2 Card: ${player2card.name}`)
        console.log(`Player 2 earns a point!`)
        player2. points += 1
        console.log(`Player 1 Score: ${player1.points}, Player 2 Score: ${player2.points}`)
        console.log("--------------------------------------------------------------------------")
    } else {
        console.log(`Turn ${[a]}`)
        console.log(`Player 1 Card: ${player1card.name} Player 2 Card: ${player2card.name}`)
        console.log(`It's a tie! No one earns a point.`)
        console.log(`Player One Score: ${player1.points}, Player Two Score: ${player2.points}`)
        console.log("--------------------------------------------------------------------------")
    }

}
//This is a if, else if statement that calculates the points at the end and declares the victor. Otherwise, it will delcare a tie while also displaying the final points in all three scenarios.
if (player1.points > player2.points) {
    console.log(`Player 1 has won with a total of ${player1.points}! Player 2 has lost with a total of ${player2.points}.`)
} else if (player1.points < player2.points) {
    console.log(`Player 2 has won with a total of ${player2.points}! Player 1 has lost with a total of ${player1.points}.`)
} else {
    console.log(`The game is a draw, no one wins.`)
    console.log(`Player 1 Score: ${player1.points}, Player 2 Score: ${player2.points}`)
}