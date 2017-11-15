const thunkMiddleware = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch);
  }
  //go to reducer
  return next(action);
};

export default thunkMiddleware;
