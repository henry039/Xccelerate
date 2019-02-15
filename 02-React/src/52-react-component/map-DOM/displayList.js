import * as React from 'react';
import CommentCard from '../nested/commentCard'

const DisplayList = props =>{
    const listItems = props.list.map(ele =>{
        return (
            <CommentCard comment={ele.comment} />
        )
    })

    return (
        <div>
            <h1> {props.listName}'s List</h1>
            <div>
                {listItems}
            </div>
        </div>
    )
}
export default DisplayList;