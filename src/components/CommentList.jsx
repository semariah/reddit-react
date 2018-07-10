import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import {connect} from 'react-redux';

const CommentList = (props) => {
  return (
    <div>
      {Object.keys(props.commentList).map(function(commentId) {
        var comment = props.commentList[commentId];
        return <Comment
          commentList={props.commentList}
          name={comment.name}
          key={commentId}
          commentId={commentId}
          formattedWaitTime={comment.formattedWaitTime}
          upVotes={comment.upVotes}
          downVotes={comment.downVotes}
        />;
      })}
    </div>
  );
};

CommentList.propTypes = {
  commentList: PropTypes.object
};

export default connect()(CommentList);
