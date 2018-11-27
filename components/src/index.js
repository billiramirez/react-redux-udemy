import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = ()=> {
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail 
            author="Sam" 
            timeAgo="today at 4:50 pm" 
            content="Nice blog post!" 
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        
        <CommentDetail 
          author="Alex" 
          timeAgo="yesterday at 1:00 pm" 
          content="Keep trying!" 
          avatar={faker.image.avatar()}
        />        
        <CommentDetail 
          author="Carlos" 
          timeAgo="today at 2:33 pm" 
          content="I love writing" 
          avatar={faker.image.avatar()}
        />        
      </div>  
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));