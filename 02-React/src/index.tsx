import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// day 52 
// import Currency from './52-react-component/currency'
import App from './52-react-component/counter'
// import App from './52-react-component/nested/app'
// import App from './52-react-component/map-DOM/app'
// import App from './52-react-component/quiestioner/question-main'

// day 53
// import App from './53-form/clock'
// import App from './53-form/shoppingList/shoppingList'

// day 56
// import App from './56-redux/00-store/redux';
// import App from './56-redux/01-dispatch/redux';

// bitcoin
// import App from './bitcoin/chart'

ReactDOM.render(
  // <Currency />,
  // <Click />,
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
