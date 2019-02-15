import * as faker from 'faker';
import * as React from 'react';

interface IMYProps {
    author : string;
    comment : string;
    date : string;
    children?: JSX.Element[] | JSX.Element;
}

const Card : React.SFC<IMYProps> = (props) =>{
// const Card = (props: IMYProps) =>{
    const css = {
        maxWidth : '18rem'
    }
    return (
        <div className='card text-white bg-info mb-3' style={css}>
            <div className='card-header'><img src={faker.image.avatar()} /></div>
            <div className='card-body'>
                <h3 className='card-title'>{props.author}</h3>
                <p className='card-text'>Today at {props.date}</p>
                <p className='card-text'>{props.comment}</p>
            </div>
        </div>
    )
}

export default Card;