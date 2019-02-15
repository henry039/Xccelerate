import * as React from 'react';
import Question from './question-detail';

class Questioner extends React.Component {
    constructor(props){
        super(props);
        this.list = [
            {id:1, question:'How are you doing ?'},
            {id:2, question:'Do you hungry ?'},
            {id:3, question:'Is JR.smith SUCK ?'},
        ]
    }

    render(){
        const Qlist = this.list.map(items =>{
            return (
                <Question question={items.question}/>
            )
        })

        return (
            <div>
                {Qlist}
            </div>
        )
    }
}

export default Questioner;