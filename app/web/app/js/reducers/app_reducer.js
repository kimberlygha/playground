import update from 'react-addons-update';

// Constants
import ActionTypes from 'action_types';
import ASYNC from 'async_status';

// Constants
const {isSuccess} = ASYNC;

const asyncState = {
  fetching: {
    loading: true,
    error: false,
  },
  initial(props = {}) {
    let defaultProps = {
      data: [],
      loading: false,
      error: false,
    };

    return Object.assign({}, defaultProps, props);
  },
  success(result) {
    return {
      data: result,
      error: false,
      loading: false,
    };
  },
  error(error) {
    return {
      loading: false,
      error,
    };
  },
};

const defaultFetchHandler = (state, propName, result, status, actionType) => {
  const {ERROR, SUCCESS, FETCHING} = ASYNC;
  if (!propName) return state;
  switch (status) {
    case ERROR:
      console.error(`[FinancesReducer] @${actionType} -> error: `, result);
      return update(state, {
        [propName]: {$merge: asyncState.error(result)},
      });

    case SUCCESS:
      console.log(`[FinancesReducer] @${actionType} -> result: `, result);
      return update(state, {
        [propName]: {$merge: asyncState.success(result)},
      });

    case FETCHING:
      return update(state, {
        [propName]: {$merge: asyncState.fetching},
      });

    default:
      return state;
  }
};

const initialState = {
  listings: asyncState.initial({
    search: ''
  })
};

function financesReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SEARCH_CRAIGSLIST:
      return defaultFetchHandler(state, action.propName, action.result, action.status, action.type);

    default:
      return state;
  }
}

module.exports = financesReducer;
