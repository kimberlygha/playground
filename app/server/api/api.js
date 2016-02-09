const Craigslist = require('node-craigslist');
const client = Craigslist({
  city: 'sfbay'
});

module.exports = (app) => {
  app.get('/craigslist/search', (req, res) => {
    const search = req.query.search;
    const category = req.query.cat;
    /*
      maxAsk (number),
      minAsk (number),
      category (string),
    */
    const options = {
      category
    };

    client.search(options, req.query.search, (err, listings) => {
      if (err) {
        throw new Error(`[api] @craigslist/seearch: ${err}`);
      };
      res.send(listings);
    });
  });
}
