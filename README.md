# Component Opponents

Example repository introducing students to React Components.

## Getting Started

- Create a new React application using `create-react-app`

> _Optionally_, you may `rm yarn.lock` and then `npm install` if you'd rather use NPM.

- Delete the following files:
  * `src/App.test.js`
  * `src/index.css`
  * `src/App.css`
  * `src/logo.svg`

- `yarn add bootstrap` or `npm install bootstrap`

- Change your `src/App.js` so that it looks like the following:
  ```js
  import React, { Component } from 'react';
  import 'bootstrap/dist/css/bootstrap.css';

  class App extends Component {
    render() {
      return (<div>Hello React</div>);
    }
  }

  export default App;
  ```

- Change your `src/index.js` so that it looks like the following:
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';
  import registerServiceWorker from './registerServiceWorker';

  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker();
  ```

- Run `npm start` and make sure your page loads.

## Instructions

- [ ] Copy the following HTML into your `App.js` in place of the `div`. _It will not work._ Update the code so that the page loads. Afterwards, you will get a few errors and warnings in your console. Fix them!
  ```js
  <div class="jumbotron bg-warning">
    <h1 class="display-4">Component Opponents</h1>
    <p class="lead">Famous villains throughout history</p>
  </div>
  <div class="container">
    <div class="text-center">
      <div class="card d-inline-block w-25 mx-4 my-2">
        <img class="card-img-top img-fluid" src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/LexLuthor1.png/250px-LexLuthor1.png"/>
        <div class="card-body">
          <h5 class="card-title">Lex Luthor</h5>
          <p class="card-text">Lex Luthor is a wealthy, power-mad American business magnate, ingenious engineer, philanthropist to the city of Metropolis, and one of the most intelligent people in the world.</p>
        </div>
      </div>
      <div class="card d-inline-block w-25 mx-4 my-2">
        <img class="card-img-top img-fluid" src="https://vignette.wikia.nocookie.net/theflash/images/5/5a/Captain_Cold_Wentworth_Miller-14.jpg/revision/latest?cb=20150512045523"/>
        <div class="card-body">
          <h5 class="card-title">Captain Cold</h5>
          <p class="card-text">Captain Cold is the leader of the Rogues, a loose criminal association, as well as the older brother of Golden Glider.</p>
        </div>
      </div>
      <div class="card d-inline-block w-25 mx-4 my-2">
        <img class="card-img-top img-fluid" src="https://vignette.wikia.nocookie.net/starwars/images/e/ed/Snoke_TLJ.png/revision/latest?cb=20180105001738"/>
        <div class="card-body">
          <h5 class="card-title">Snoke</h5>
          <p class="card-text">Snoke, a Force-sensitive humanoid male alien, was the Supreme Leader of the First Order and a powerful practitioner of the dark side of the Force.</p>
        </div>
      </div>
    </div>
  </div>
  ```

- [ ] Create a `Header` functional component that includes just the `.jumbotron` section.

- [ ] Create a `Villain` functional component that returns a single `.card`. For now, just include some of the existing dummy data.

- [ ] Include the following data structure into your `App.js`. Using `props`, repeat each `Villain` component for each object in the data structure.
  ```js
  const villains = [
    {
      name: 'Lex Luthor', description: 'Lex Luthor is a wealthy, power-mad American business magnate, ingenious engineer, philanthropist to the city of Metropolis, and one of the most intelligent people in the world.', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/LexLuthor1.png/250px-LexLuthor1.png' },
    { name: 'Captain Cold', description: 'Captain Cold is the leader of the Rogues, a loose criminal association, as well as the older brother of Golden Glider.', imageUrl: 'https://vignette.wikia.nocookie.net/theflash/images/5/5a/Captain_Cold_Wentworth_Miller-14.jpg/revision/latest?cb=20150512045523' },
    { name: 'Snoke', description: 'Snoke, a Force-sensitive humanoid male alien, was the Supreme Leader of the First Order and a powerful practitioner of the dark side of the Force.', imageUrl: 'https://vignette.wikia.nocookie.net/starwars/images/e/ed/Snoke_TLJ.png/revision/latest?cb=20180105001738' }
  ]
  ```
