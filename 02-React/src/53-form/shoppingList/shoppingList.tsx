import * as React from 'react';
import Add from './add'
// import Display from './display'

interface IState {
    name : string;
    list : object[];
}

interface Item {
    id :number;
}

export default class ShoppingList extends React.Component<{}, IState>{
    constructor(props){
        super(props);
        this.state = {
            list : [
                {id: 1, item : 'One For All'}
            ],
            name : 'AllMight'
        }
    }

    public addItem = (item:Item) =>{
        item.id = Math.random();
        const list = [...this.state.list, item]
        this.setState({list})
    }

    // public deleteItem = (id:number) =>{
    //     const list = this.state.list.filter(item_remain =>{
    //         return item_remain.id !== id
    //     })
    //     this.setState({list})
    // }

    public render(){
        return(
            <div>
                {/* <Display listName={this.state.name} list={this.state.list} deleteItem={this.deleteItem}/> */}
                <Add addItem={this.addItem} />
            </div>
        )
    }
}