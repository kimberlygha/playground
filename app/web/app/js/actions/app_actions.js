import ActionTypes from 'action_types';
import AppDao from '../dao/app_dao';
import Promise from 'bluebird';
import ASYNC from 'async_status';

const ASYNC_ACTIONS = {
  searchCraigslist: [ActionTypes.SEARCH_CRAIGSLIST, AppDao.searchCraigslist, 'listings'],
};

const defaultSuccess = (result, actionType, propName) => {
  let action = {
    type: actionType,
    status: ASYNC.SUCCESS,
    result,
  };
  return (propName) ? Object.assign(action, {propName}) : action;
};

const defaultError = (error, actionType, propName) => {
  let action = {
    type: actionType,
    status: ASYNC.ERROR,
    result: error,
  };
  return (propName) ? Object.assign(action, {propName}) : action;
};

const defaultFetch = (actionType, propName) => {
  let action = {
    type: actionType,
    status: ASYNC.FETCHING,
  };
  return (propName) ? Object.assign(action, {propName}) : action;
};

const thunks = _.reduce(ASYNC_ACTIONS, (result, actionTuple, actionName) => {
  const [actionType, daoAction, propName] = actionTuple;
  result[actionName] = (...args) => {
    return (dispatch) => {
      dispatch(defaultFetch(actionType, propName));
      return daoAction.apply(null, args)
        .then((result) => {
          dispatch(defaultSuccess(result, actionType, propName));
        })
        .catch((err) => {
          dispatch(defaultError(err, actionType, propName));
        });
    }
  };
  return result;
}, {});

const actions = {

};

module.exports = Object.assign({}, actions, thunks);
