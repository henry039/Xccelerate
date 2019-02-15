import faker from 'faker';
import * as React from 'react';

const CommentCard = (dick) =>{
    return (
        <div className='card col-2 m-2'>
            <img src={faker.image.avatar()} className='card-img-top coment' alt='random avatar'></img>
            <h3 className='card-title comment'>{faker.name.firstName()} {faker.name.lastName()}</h3>
            <div className='card-body comment'>
                <p className="card-text comment">{dick.comment}</p>
            </div>
        </div>
    )
}

export default CommentCard;