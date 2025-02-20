import React from "react"

/**
 * Project planning:
 * 
 * 
 * - What are the main containers of elements I need
 *   in this app?
 *  - Header
 *  - Message container for status of game
 *  - Container for letter slots
 *  - Letter keypads
 *  - New game button
 * - What values will need to be saved in state vs.
 *   what values can be derived from the state?
 * - The letter keypad array has to have a state
 * - The actual letters of the word has to also have a state
 * - The number of wrong guesses should be stored in a state
 * - The game status can be derived for the state of the actual letters of word
 * - How will the user interact with the app? What
 *   events do I need to handle?
 * The user will click on the letter keypads to reveal the letters on the word
 * and press on new game to start a new game
 * User can also use the keyboard to toggle between the letter keypads
 */

export default function Hangman() {
    return (
        <main>
            Game goes here
        </main>
    )
}
