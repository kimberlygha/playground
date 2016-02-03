import AjaxUtils from 'ajax_utils';
import querystring from 'querystring';

module.exports = {
  searchCraigslist(query) {
    let queryObj = {
      search: query
    };

    return AjaxUtils.get(`/craigslist/search?${querystring.stringify(queryObj)}`);
  }
}
