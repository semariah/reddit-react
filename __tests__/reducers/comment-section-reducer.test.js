import commentSectionReducer from './../../src/reducers/comment-section-reducer';
import Moment from 'moment';

describe('commentSectionReducer', () => {
  let action;
  const sampleCommentData = {
    name: 'Kitty',
    timeOpen: 1500000000,
    id: 0,
  };

  test('Should return default state if no action type is recognized', ()=> {
    expect(commentSectionReducer({}, {type: null})).toEqual({});
  });

  test('New comment should include Moment-formatted wait times', () => {
    const { name, timeOpen, id } = sampleCommentData;
    action = {
      type: 'ADD_COMMENT',
      name: name,
      timeOpen: timeOpen,
      id: id,
      formattedWaitTime: new Moment().fromNow(true),

    };
    expect(commentSectionReducer({}, action)).toEqual({
      [id] : {
        name: name,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: 'a few seconds',
      }
    });
  });

  test('Should add freshly-calculated Moment-formatted wait time to comment entry', () => {
    const { name, formattedWaitTime, id, timeOpen } = sampleCommentData;
    action = {
      type: 'UPDATE_TIME',
      formattedWaitTime: '1 minute',
      timeOpen: timeOpen,
      id: id,
    };
    expect(commentSectionReducer({ [id] : sampleCommentData }, action)).toEqual({
      [id] : {
        name: name,
        id: id,
        formattedWaitTime: '1 minute',
        timeOpen: timeOpen
      }
    });
  });

  test('Should increment upVote in comment entry', () => {
    const {name, formattedWaitTime, timeOpen, id, upVotes } = sampleCommentData;
    action = {
      type: 'INCREMENT_UPVOTE',
      id: id,
      upVotes: 1
    }
    expect(commentSectionReducer({ [id] : sampleCommentData }, action)).toEqual({
      [id]: {
        name: name,
        formattedWaitTime: formattedWaitTime,
        timeOpen: timeOpen,
        id: id,
        upVotes: 2
      }
    });
  });

  test('Should increment downVote in comment entry', () => {
    const {name, formattedWaitTime, timeOpen, id, downVotes } = sampleCommentData;
    action = {
      type: 'INCREMENT_DOWNVOTE',
      id: id,
      downVotes: 0
    }
    expect(commentSectionReducer({ [id] : sampleCommentData }, action)).toEqual({
      [id]: {
        name: name,
        formattedWaitTime: formattedWaitTime,
        timeOpen: timeOpen,
        id: id,
        downVotes: 1
      }
    });
  });
});
