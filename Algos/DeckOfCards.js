// Generate a deck of cards

// Add a function that adds a card to the front of the deck
// Add a function that removes the front card

class Deck {
    constructor(deck = null, suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'], faces = ['A','2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']) {
        this.deck = []
        this.piles = []

        // Loop through the suits
        if(deck === null) {
            for(let suit = 0; suit < suits.length; suit++) {
                // Loop through the faces
                for(let face = 0; face < faces.length; face++) {
                    // Create a new Card instance
                    // Push new Card to this.deck
                    this.deck.push(new Card(suits[suit], faces[face]))
                }
            }
        } else {
            if(!Array.isArray(deck)) {
                throw '"Deck" needs to be an array of cards'
            }

            this.deck = deck
        }
    }

    // Given a deck, remove and return the card at the beginning of the deck. Do this without using any built-in array methods.
    removeFirstCard(deck) {
        // Return the first card

        let firstCard = deck[0]

        for(let i = 0; i < deck.length - 1; i++) {
            deck[i] = deck[i + 1]
        }

        deck.length = deck.length - 1

        return firstCard
    }

    // Generate a new hand
    makeNewPile(numOfCards, handName = null) {
        // Loop through numOfCards
        let cards = []
        for(let i = 0; i < numOfCards; i++) {
            // Make new array pulling cards from deck and pushing to array
            cards.push(this.removeFirstCard(this.deck))
        }
        // Call the Pile class and pass array
        let hand = new Pile(cards, handName)
        
        this.piles.push(hand)

        return hand
    }

    // Add to front

    // Write a method that searches and returns a specific card
}

class Pile extends Deck {
    constructor(cards, handName) {
        super(cards)
        this.hand = handName
    }

    // Pile methods
}

class Card {
    constructor(suit, face) {
        this.suit = suit
        this.face = face
    }
}

let cardDeck = new Deck(null, ['Spades', 'Spades', 'Spades', 'Spades'])

let jonathanHand = cardDeck.makeNewPile(5, `Jonathan's Hand`)

jonathanHand.makeNewPile(2, `Jonathan's Discard Pile`)

console.log(cardDeck)
console.log(jonathanHand)