import * as React from 'react';
import DisplayList from './displayList';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list : [
                {id : 1, comment : 'I love milk'},
                {id : 2, comment : 'I love coffee'},
                {id : 3, comment : 'I love tea'},
                {id : 4, comment : 'I love coca'},
            ],
            name : 'AllMight'
        }
    }

    render() {
        return (
            <div>
                <DisplayList listName={this.state.name} list={this.state.list}/>
            </div>
        )
    }
}

export default App;