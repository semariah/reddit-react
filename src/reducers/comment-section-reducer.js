export default (state = {}, action) => {
  let newState;
  const { name, timeOpen, id, formattedWaitTime, upVotes, downVotes} = action;


  switch (action.type) {
  case 'ADD_COMMENT': {
    let newState = Object.assign({}, state, {
      [id]: {
        name: name,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: formattedWaitTime,
        upVotes,
        downVotes
      }
    });
    return newState;
  }
  case 'UPDATE_TIME':{
    const newComment = Object.assign({}, state[id], {formattedWaitTime});
    newState = Object.assign({}, state, {
      [id]: newComment
    });
    return newState;
  }

  case 'INCREMENT_UPVOTE': {
    const newComment = Object.assign({}, state[id], {upVotes});
    newState = Object.assign({}, state, {
      [id]: newComment
    });
    newState[id].upVotes++;
    return newState;
  }

  case 'INCREMENT_DOWNVOTE': {
    const newComment = Object.assign({}, state[id], {downVotes});
    newState = Object.assign({}, state, {
      [id]: newComment
    });
    newState[id].downVotes++;
    return newState;
  }

  default: {
    return state;
  }
  }
};
