import AjaxUtils from 'ajax_utils';
import querystring from 'querystring';
import Promise from 'bluebird';

module.exports = {
  searchCraigslist: function() {
    let timeout;
    return (query, cat = null) => {
      return new Promise((resolve, reject) => {
        let queryObj = {
          search: query,
          cat: cat
        };
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
          AjaxUtils.get(`/craigslist/search?${querystring.stringify(queryObj)}`)
            .then((response) => {
              resolve(reponse);
            })
            .catch((err) => {
              reject(err);
            });
        }, 250)
      });
    }
  }()
}
