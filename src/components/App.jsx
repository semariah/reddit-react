import React, {Component} from 'react';
import CommentsSection from './CommentsSection';
import Moment from 'moment';
import CommentList from './CommentList';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterCommentList: {}
    };
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateCommentElapsedWaitTime(),
    6000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateCommentElapsedWaitTime() {
    const {dispatch} = this.props;
    Object.keys(this.props.masterCommentList).map(commentId => {
      const comment = this.props.masterCommentList[commentId];
      const newFormattedWaitTime = comment.timeOpen.fromNow(true);
      const action = {
        type: 'UPDATE_TIME',
        id: commentId,
        formattedWaitTime: newFormattedWaitTime
      };
      dispatch(action);
    });
  }

  render() {
    return (
      <div>
        <h2>Reddit</h2>
        <CommentsSection />
        <CommentList commentList={this.props.masterCommentList} />
      </div>
    );
  }
}

App.propTypes = {
  masterCommentList: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    masterCommentList: state
  };
};
export default connect(mapStateToProps)(App);
