# Emoji Game

A memory matching game built with HTML, CSS, and JavaScript. Flip over cards to find matching emoji pairs.

---

## Created

July 2025

---

## Objective

Flip and match pairs of emojis. Match all pairs to win.

---

## How to Play

- Enter your name in the text box and click "Start Game".
- Click two cards to flip them over.
- If they match, they stay revealed. If not, they flip back after a short delay.
- Match all the cards to win.
- Click the "Reset" button to restart the game.

---

## Features

- User greeting after name input  
- Score tracking  
- Game reset option  
- Random shuffle every game  
- Easter egg (check the console)  
- Flip animation  
- HTML validated with Nu Validator  
- Accessible design verified with WAVE  

---

## Technologies Used

- HTML5  
- CSS3  
- JavaScript (with jQuery)  
- Bootstrap 5  
- Google Fonts  
- Normalize.css  

---

## Inspiration

Everyone has played a matching game at some point in their lives.  
One of my personal favorites as a child was Old Maid. I would play with my brothers for hours at a time.

---

## HTML & Accessibility Validators

- [Nu HTML Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjake-thrasher.github.io%2Fmatching-game%2F)  
- [WAVE Checker](https://wave.webaim.org/report#/https://jake-thrasher.github.io/matching-game/)

---

## Sample Code Block

```javascript
function shuffle(array) {
  return array.sort(() => 0.5 - Math.random());
}
```
This function randomizes the emoji array before each new game starts.