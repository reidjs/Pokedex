const thunkMiddleware = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch);
  }
  // debugger
  //go to reducer
  return next(getState(), action);
};

export default thunkMiddleware;
