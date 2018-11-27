import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = ()=> {
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <div>
            <h3>Warning!</h3>
            Are you sure?
          </div>
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail 
            author="Sam" 
            timeAgo="today at 4:50 pm" 
            content="Nice blog post!" 
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail 
            author="Alex" 
            timeAgo="yesterday at 1:00 pm" 
            content="Keep trying!" 
            avatar={faker.image.avatar()}
          />        
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail 
            author="Carlos" 
            timeAgo="today at 2:33 pm" 
            content="I love writing" 
            avatar={faker.image.avatar()}
          />        
        </ApprovalCard>
      </div>  
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));