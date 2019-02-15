import * as React from 'react'
// import Card from './card'

interface IProps {
    listName : string;
    list : any[];
}

export default class Display extends React.Component<IProps>{
    constructor(props){
        super(props);
    }
    
    public render(){
        return(
            <div className='m-2 p-2'>
                <h1>{this.props.listName}</h1>
                <div>
                    {this.listItems}
                </div>
            </div>
        )
    }

    public listItems = () => this.props.list.map(
        item =>{
            // return (
            //     <Card name={item.first + ' ' + item.last} occupation={item.occupation} />
            // )
        }
    );
}