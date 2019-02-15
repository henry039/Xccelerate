import * as React from 'react';

// class based
// class ShoppingList extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>My Shopping List</h1>
//                 <h2>Class based</h2>
//                 <h2>This is from other JS file</h2>
//             </div>
//         )
//     }
// }

// function based
// const ShoppingList = () =>{
//     return (
//         <div>
//             <h1>My Shopping List</h1>
//             <h2>Function Based</h2>
//         </div>
//     )
// }

// data receive from parent 
// class based 
// class ShoppingList extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.hero}'s Shopping List</h1>
//                 <h2>Class based</h2>
//                 <h2>This is from other JS file</h2>
//             </div>
//         )
//     }
// }

// function based
const ShoppingList = (props) =>{
    return (
        <div>
            <h1>{props.hero}'s Shopping List</h1>
            <h2>Function Based</h2>
        </div>
    )
}


export default ShoppingList;