import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';


export const receiveCurrentUser = currentUser => {
  // console.log('action receiveCurrentUser');
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const login = user => dispatch => {
  // console.log('action signin');
  return APIUtil.login(user).then(rUser => (
    dispatch(receiveCurrentUser(rUser))
  ));
};
