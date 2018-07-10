import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

const CommentsSection = (props) => {
  let _name = null;

  function handleCommentFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_COMMENT',
      id: v4(),
      name: _name.value,
      timeOpen: new Moment(),
      formattedWaitTime: new Moment().fromNow(true)
    };
    dispatch(action);
    _name.value = '';
  }
  
  return(
    <div>
      <form onSubmit={handleCommentFormSubmission}>
        <textarea
          id='name'
          placeholder='Name'
          ref={(textarea) => {_name = textarea;}}>
        </textarea>
        <button type='submit'>Comment</button>
      </form>
    </div>
  );
};




export default connect()(CommentsSection);
