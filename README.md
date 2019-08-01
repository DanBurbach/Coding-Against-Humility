# Coding Against Humility
![Game LandingPage](https://raw.githubusercontent.com/DanBurbach/Coding-Against-Humility/master/src/assets/images/CAH_MainScreen.png)

### __Created by Dan Burbach__
#### __March  2019__

Epicodus Final Capstone Project

## __Description__

```
An interactive game based off of Cards Against Humanity. Uses React-Redux-Firebase layout and Firebase Email Authentication. Pulls from two seperate JSON files for deck cards (White and Black). Heavy use of CSS and styling for animation of cards.
```
## __Setup/Installation Requirements__

  * Clone repository

  * Open terminal

  * Run npm install

  * To run this you must first create a Firebase account. Create a .env file stored in in the root directory, and add your account credentials like this:
  ```
REACT_APP_API_KEY = XXXXxxxx
REACT_APP_AUTH_DOMAIN = xxxxXXXX.firebaseapp.com
REACT_APP_DATABASE_URL = https: //xxxXXXX.firebaseio.com
REACT_APP_PROJECT_ID = xxxxXXXX
REACT_APP_STORAGE_BUCKET = xxxxXXXX.appspot.com
REACT_APP_MESSAGING_SENDER_ID = xxxxXXXX
REACT_APP_APP_ID = xxxxXXXX

REACT_APP_CONFIRMATION_EMAIL_REDIRECT = "http://localhost:8080"

REACT_APP_SECRET_MESSAGE = "hey there!!!"
  ```
  * npm run start

  * Open a browser: http://localhost:8080/

  * Enjoy!

![BlackCard Flip](https://raw.githubusercontent.com/DanBurbach/Coding-Against-Humility/master/src/assets/images/CAH_BlackCard_Flip.gif)

### __Technologies Used__

  Javascript 16.8, React, Redux, Firebase, CSS, HTML, JSON, Babel, esLint, and webpack

  [JSON Against Humanity](https://crhallberg.com/cah/)
  JSON Source Site

  [JSON Formatter & Validator](https://jsonformatter.curiousconcept.com/)
  JSON Prettify Site

  [React-Redux-Firebase](http://docs.react-redux-firebase.com/history/v3.0.0/)
  Redux bindings for Firebase. Includes Higher Order Component (HOC) for use with React.

  [React-DnD](http://react-dnd.github.io/react-dnd/about)
  React-DnD is a set of React utilities to help you build complex drag and drop interfaces while keeping your components decoupled.

## __Future Development__

  - [ ] Full React-DnD implimintation (both mobile and static devices)
  - [ ] Creation of larger games with more than one screen viewing.
  - [ ] Game number given to allow others to join via online.
  - [ ] Provide a saved database with online user scores. Display high score for all online users.

### __Version__

Alpha v1.1

## License(s)
### Working Code is Licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### All JSON code (and materials gathered from Cards Against Humanity) is Licensed under Attribution-NonCommercial-ShareAlike 2.0 Generic (CC BY-NC-SA 2.0)

You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

You may not use the material for commercial purposes.

If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.

You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.

#### Copyright 2019 Daniel Burbach
