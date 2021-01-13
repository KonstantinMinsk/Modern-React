import React from 'react';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';
import faker from 'faker';

function App() {
    return (
        <div className="ui container comments" style={{ marginTop: '2rem' }}>
            <ApprovalCard>
                <div>
                    <div className="text"> <h3> Do yuo agree? </h3> </div>
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author='Kostya' text='Nice blog post' date='Today at 12:30PM' avatar={faker.image.image()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author='Nick' text='Normal blog post' date='Yesterday at 01:13PM' avatar={faker.image.image()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author='Masha' text='The best blog post' date='Today at 6:00PM' avatar={faker.image.image()}/>
            </ApprovalCard>
        </div>
    );
}

export default App;
