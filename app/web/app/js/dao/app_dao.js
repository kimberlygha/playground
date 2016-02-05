import AjaxUtils from 'ajax_utils';
import querystring from 'querystring';
// import Promise from 'bluebird';

module.exports = {
  searchCraigslist: function(query) {
    let queryObj = {
      search: query
    };

    return AjaxUtils.get(`/craigslist/search?${querystring.stringify(queryObj)}`);
  }
}
