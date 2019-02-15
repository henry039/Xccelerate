import * as React from 'react';
import { connect } from 'react-redux';

interface IUser {
    first: string;
    last: string;
}

interface IUserListProps {
    users: IUser[]
}

interface IRootState {
    users: IUser[]
}

const PureUserList = (props:IUserListProps) =>{
    return (
        <div>
            {props.users.map(l =>(
                <h1>{l.first} - {l.last}</h1>
            ))}
        </div>
    )
}

const mapStateToProps = (state:IRootState)=>{
    return{
        users: state.users
    }
}

const UserList = connect(mapStateToProps)(PureUserList)

export default UserList