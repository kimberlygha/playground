import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Constants
import ActionTypes from 'action_types';

// Actions
import AppActions from 'app_actions';

// Components
import App from '../components/app';

class AppContainer extends React.Component {
  constructor() {
    super();
  }

  _searchCraigslist(e) {
    const {searchCraigslist} = bindActionCreators(AppActions, this.props.dispatch);
    const val = e.target.value;
    searchCraigslist(val);
  }

  render() {
    const {
      dispatch,
      app,
    } = this.props;

    return (
      <App
        {...app}
        searchCraigslist={::this._searchCraigslist}
      />
    );
  }
}

AppContainer.displayName = 'AppContainer';

AppContainer.propTypes = {
  dispatch: React.PropTypes.func,
  finances: React.PropTypes.object,
};

module.exports = connect((state) => {
  console.log('[app_container] state: ', state);
  return {
    app: state.app
  };
})(AppContainer);
