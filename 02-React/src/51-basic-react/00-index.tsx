import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

// custom component setup
// import ShoppingList from './shopping_list';
// import Card from './card'
import Weather from './weather'


// basic jsx
// const name:string = 'SomeOne'
// const ele = <h1>Hello <span>{name}</span></h1>

// jsx with function
// const user = {
//   first: "henry",
//   last: "lau"
// }
// function formatName(input) {
//   return `${input.first} ${input.last}`
// }
// const ele = <h1 style={{color: 'blue'}}>hello {formatName(user)}</h1>s

// passing obj as parameter
// for card
// const paraOBJ = {
//   author : 'Allmight',
//   comment : 'finally',
//   date : new Date().toString()
// }

// for weather
const paraOBJ = {
  day : 'Wed',
  highTemp : 13,
  lowTemp : 17
}

ReactDOM.render(
  // ele,
  // <ShoppingList></ShoppingList>, +++ this not gonna work +++
  // <ShoppingList />,
  // <ShoppingList hero='AllMight'/>,
  // <Card author='AllMight' date={new Date().toString()} comment='finally'/>,
  // <Card {...paraOBJ}/>,
  <Weather {...paraOBJ}/>,
  document.getElementById('root') as HTMLElement
);
// registerServiceWorker();
