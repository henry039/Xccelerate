import * as React from 'react'

interface IState {
    item: string;
}

interface IProps {
    addItem: (e: object) => void;
}

export default class Add extends React.Component<IProps, IState>{
    constructor(props) {
        super(props);
        this.state = {
            item: ''
        }
    }

    public render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>{this.props}</h1>
                <input type='text' value={this.state.item} onChange={this.handleChange} />
                <input type='submit' value='Submit' />
            </form>
        )
    }

    private handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            item: ''
        })
    }

    private handleChange = (e) => {
        this.setState({
            item: e.target.value
        })
    }


}