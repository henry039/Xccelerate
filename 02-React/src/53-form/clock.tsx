import * as React from 'react';

interface IState {
    date : string;
}

export default class Clock extends React.Component<{}, IState>{
    private timerID: any;
    constructor(props){
        super(props);
        this.state = {
            date : new Date().toLocaleTimeString()
        }
    }

    public render() {
        return(
            <div className='card p-2 m-2'>
                <p>{this.state.date}</p>
            </div>
        )
    }

    
    public componentDidMount(){
        this.timerID = setInterval(()=>{
            this.tick()
        }, 1000)
    }
    
    public componentWillUnmount(){
        clearInterval(this.timerID)
    }

    private tick() {
        this.setState({date : new Date().toLocaleTimeString()})
    }
}