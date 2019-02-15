import * as React from 'react';

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
        // this.handleClick = this.handleClick.bind(this);
    }

    // if use method alone, you should bind this inside constructor
    handleClick = () => {
        // let count = this.state.count + 1;
        this.setState({count : this.state.count + 1})
    }

    render(){
        return (
            <div>
                <button onClick={this.handleClick} className='btn btn-primary m-2'>{this.state.count}</button>
            </div>
        )
    }
}

export default Counter;