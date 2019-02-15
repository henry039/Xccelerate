import * as React from 'react';
import ApprovalCard from './approvalCard';
import CommentCard from './commentCard';

class App extends React.Component {
    render() {
        return(
            <ApprovalCard>
                <CommentCard comment='hey'></CommentCard>
            </ApprovalCard>
        )
    }
}
export default App;