const Craigslist = require('node-craigslist');
const client = Craigslist({
  city: 'sfbay'
});

module.exports = (app) => {
  app.get('/craigslist/search', (req, res) => {
    /*
      maxAsk (number),
      minAsk (number),
      category (string),
    */
    const options = {
    };

    client.search(options, req.query.search, (err, listings) => {
      if (err) {
        throw new Error(`[api] @craigslist/seearch: ${err}`);
      };
      res.send(listings);
    });
  });
}
