import * as faker from 'faker'
import * as React from 'react';

interface IProps {
    name:string;
    occupation : string;
}

export default class Card extends React.Component<IProps>{
    public render(){
        return(
            <div className='card p-2 m-2 col-6'>
                <img src={faker.image.avatar()} alt='Profile'className='card-image' />
                <div className='m-2 p-2'>
                    <h2 className='card-title'>Name : {this.props.name}</h2>
                    <p className='card-text'>Occupation : {this.props.occupation}</p>
                </div>
            </div>
        )
    }
}