import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const Comment = (props) => {

  function updateCommentUpVote() {
    console.log(props.upVotes);
    const {dispatch} = props;
    const action = {
      type: 'INCREMENT_UPVOTE',
      id: props.commentId,
      upVotes: props.upVotes
    };
    dispatch(action);
  }
  function updateCommentDownVote() {
    const {dispatch} = props;
    const action = {
      type: 'INCREMENT_UPVOTE',
      id: props.commentId,
      downVotes: props.downVotes
    };
    dispatch(action);
  }

  return (
    <div>
      <p>{props.name}</p>
      <p>{props.formattedWaitTime}</p>
      <p>{props.upVotes}</p>
      <p>{props.downVotes}</p>
      <button onClick={updateCommentUpVote}>UpVote</button>
      <button onClick={updateCommentUpVote}>DownVote</button>
    </div>
  );
};

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
  upVotes: PropTypes.number.isRequired,
  downVotes: PropTypes.number.isRequired,
  onIncrementLoad: PropTypes.func,
  commentList: PropTypes.object,
  commentId: PropTypes.string
};

export default connect()(Comment);
