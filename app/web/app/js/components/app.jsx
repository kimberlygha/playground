import { Input } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('[app] this.props: ', this.props);
    return (
      <div className='app'>
        <Input
          type='text'
          placeholder='search craigslist'
          onChange={this.props.searchCraigslist}
        />
      </div>
    );
  }
}

App.displayName = 'App';

App.propTypes = {
  searchCraigslist: React.PropTypes.func,
  search: React.PropTypes.string
};

module.exports = App;
