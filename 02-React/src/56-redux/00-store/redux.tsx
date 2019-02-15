import * as React from "react";
import { createStore } from "redux";
// import LinkList from './linklist';
import User from './user'

import { Provider } from "react-redux";

// interface ILinks {
//     title: string;
//     url: string;
// }

// interface IRootStateUrl {
//     links:ILinks[]
// }

// const rootReducerUrl = (state: IRootStateUrl) => {
//     return {
//         links: [
//             { title: 'Google', url: 'http://www.google.com' },
//             { title: 'Yahoo', url: 'http://www.yahoo.com' },
//         ]
//     }
// };

interface IUser {
    first: string;
    last: string;
}

interface IRootStateUser {
    users:IUser[]
}

const rootReducerUser = (state: IRootStateUser) => {
    return {
        users: [
            { first: 'Facebook', last: 'http://www.facebook.com' },
            { first: 'Amazon', last: 'http://www.amazon.com' },
        ]
    }
};
// const a = combineReducers({rootReducerUrl, rootReducerUser})
const store = createStore<any, any, any, any>(rootReducerUser);

const App = () => (
  <Provider store={store}>
    <div>
      <h2>Links</h2>
      {/* <LinkList /> */}
      <User/>
    </div>
  </Provider>
);


export default App