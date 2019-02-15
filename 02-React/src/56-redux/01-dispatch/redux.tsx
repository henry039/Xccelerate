import * as React from "react";
import { connect, Provider } from "react-redux";
import { Action, createStore, Dispatch } from "redux";

// Define ADD_LINK const and its type

const ADD_LINK = 'ADD_LINK';
type ADD_LINK = typeof ADD_LINK;

// Define how AddLinkAction should look like

interface Ilink {
  title: string;
  url: string;
}

interface IAddLinkAction extends Action {
  type: ADD_LINK;
  link: Ilink;
}

// Define CLEAR_LINK const and its type
const CLEAR_LINK = 'CLEAR_LINK';
type CLEAR_LINK = typeof CLEAR_LINK;

// Define ClearLinkAction. No additional information is needed
interface IClearLinkAction extends Action {
  type: CLEAR_LINK;
}

// Collection of both for easier integration
type LinkActions = IAddLinkAction | IClearLinkAction;

interface IRootState {
  links: Ilink[];
}

const rootReducer = (state: IRootState = {
  links: []
}, action: LinkActions /* add parameter here */) => {
  // Use switch to handle different actions
  switch (action.type) {
    case ADD_LINK:
      return {
        links: state.links.concat([action.link]) // Use concat to add a new link
      }
    case CLEAR_LINK:
      return {
        links: [] // Reset the link
      }
    default:
      return state; // Do not change the state in case of any other actions
  }
};

const store = createStore<any, any, null, null>(rootReducer);

interface ILinkListProps {
  links: Ilink[],
  addLink: () => void,
  clearLink: () => void
}

const PureLinkList = (props: ILinkListProps) => {
  return (
    <div>
      <button onClick={props.addLink}>New Link</button>
      <button onClick={props.clearLink}>Clear</button>
      {props.links.map(l => (
        <div>{l.title} - {l.url}</div>
      ))}
    </div>
  );
}

const mapStateToProp = (state: IRootState) => {
  return {
    links: state.links
  }
}

// Add the `mapDispatchToProp`
const mapDispatchToProp = (dispatch: Dispatch<LinkActions>) => {
  return {
    addLink: () => dispatch({
      link: {
        title: 'Google',
        url: 'http://www.google.com.hk'
      },
      type: ADD_LINK
    }),
    clearLink: () => dispatch({
      type: CLEAR_LINK
    })
  }
}

// Link with connect()
const LinkList = connect(mapStateToProp, mapDispatchToProp)(PureLinkList)

const App = () => (
  <Provider store={store}>
    <div>
      <h2>Links</h2>
      <LinkList />
    </div>
  </Provider>
);

export default App
