import AjaxUtils from 'ajax_utils';
import querystring from 'querystring';
import Promise from 'bluebird';


module.exports = {
  searchCraigslist: function() {
    let timeout;
    return function (query, cat = null) => {
      let queryObj = {
        search: query,
        cat: cat
      };
      clearTimeout(timeout);
      timeout = setTimeout(
        ()=>{return AjaxUtils.get(`/craigslist/search?${querystring.stringify(queryObj)}`);}, 250)
    }
  }()
}
