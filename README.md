# Coding Against Humility

### __Created by Dan Burbach__

Epicodus Final Capstone Project

## THIS IS STILL A WORK IN PROGRESS
While not fully functional, this will be worked on until completed.

## __Description__

```
Provide an interactive game based off of Cards Against Humanity
```

### List the absolute minimum features the project requires to meet this purpose or goal:

```
Ability to load card database, ability to have two players, ability to draw more “cards” after
play (total 10 cards in a hand), ability to vote on favorite card in play and keep score of
total “points”, ability to play “black” cards and “white” cards, ability to limit final score
to determine game size, ability to connect two separate computers to play, and finally be able
to “throw in the towel” as a player to end the game or say you give up.
```

### What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here.
```
React (and possibly Redux as well) framework. Including babel, lint, and webpack.

CSS, Materialize, Material UI (possibly for interface purposes, but only after everything
displays and works rudimentally)

Firebase for database storage of players’ information IF cannot figure out local storage

Use JSON Against Humanity for card listing (if not this, I may have to resort to an API call
from an otherwise unknown source)

I’m still researching the connectivity to multiple computers to play since I am new to it,
but that will need to be ironed out before capstone week.
```

### If you finish developing the MVP with time to spare, what will you work on next? Describe these features here: Be specific!
```
Scale down gameplay to be able to run on cell phones

Have UI and UX styles to appear to show actual cards and not just grids with text….styling styling styling.

Have the ability to log in and record your win and losses

For much further down the line, have the ability to locate local players via GPS or Bluetooth to be
able to play with strangers in local areas (Currently I have no knowledge of truly how this could be
done, but it would be amazing and provide an ability for anyone to play even “solo”)
 ```

### What additional tools, frameworks, libraries, APIs or other resources will these additional features require?
```
Testing on both Apple Phones and Android Phones (could be possible)

Multiple styling sources to try out.

A database system enabled to record:

Name

Login password

Knowledge of cellphone GPS and Bluetooth login and local device routing/connectivity
```

  Using [Draw.io](https://www.draw.io/), I created a tree component chart to detail the layout of the routing and connectivity:

  ![Gameplay Tree](https://github.com/DanBurbach/Coding-Against-Humility/blob/master/src/assets/images/CodingAgainstHumilityGamePlay.jpg?raw=true)

  ![Component Tree](https://github.com/DanBurbach/Coding-Against-Humility/blob/master/src/assets/images/CodingAgainstHumilityComponents.jpg?raw=true)
  *Currently work under progress. Changes will be made to above tree until final product is finished. Until then, this is the current build basic idea.

## __Future Development__

  * Google Authentication via Firebase

  * Game number given to allow others to join

  * Side-flip: https://3dtransforms.desandro.com/card-flip
  
  * Click to flip: https://codepen.io/MrAndrewMcG/pen/dzmyeb
  (to be used with the black cards, when the judge turn is loaded a new black card will be loaded)

## __Setup/Installation Requirements__

  * Clone repository

  * Open terminal

  * Run npm install

  * To run this you must first create a Firebase account. Create a firebaseConfig.js file stored in in the root directory, and add your account credentials like this:
  ```
  const firebaseConfig = {
      apiKey: 'xxxxxx',
      authDomain: 'xxxxxx.firebaseapp.com',
      databaseURL: 'https://xxxxxx.firebaseio.com',
      projectId: 'xxxxxx',
      storageBucket: '',
      messagingSenderId: 'xxxxxx',
    };
  export default firebaseConfig;
  ```
  * npm run start

  * Open a browser: http://localhost:8080/

  * Enjoy!

### __Technologies Used__

  React, CSS, HTML, JSON

  [JSON Against Humanity](https://crhallberg.com/cah/)
  JSON Source Site

  [JSON Formatter & Validator](https://jsonformatter.curiousconcept.com/)
  JSON Prettify Site

  [Codepen](https://codepen.io/)
  UI and CSS ideas

  [React-Flippy](https://reactjsexample.com/flipping-cards-for-your-react-projects/)
  UI effects and ease of flipping card

  [npm history](https://www.npmjs.com/package/history)
  npm JS library for managing session history


### __Version__

Alpha v0.1

### License
Licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


Copyright 2019 Daniel Burbach
