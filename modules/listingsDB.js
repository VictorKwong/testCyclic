const mongoose = require("mongoose");
const listingSchema = require("./listingSchema");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  "userName":  {
    type: String,
    "unique": true
  },
  "password": String,
  "email": String,
  "loginHistory": [{
    "dateTime": Date,
    "userAgent": String
  }]
});

module.exports = class ListingsDB {
  constructor() {
    // We don't have a `Listing` object until initialize() is complete
    this.Listing = null;
  }

  // Pass the connection string to `initialize()`
  initialize(abc) {
    return new Promise((resolve, reject) => {
      const db = mongoose.createConnection(abc);

      db.on('error', (err) => {
        reject(err);
      });
      db.once('open', () => {
        let User = db.model("listing", listingSchema);
        console.log(User)
        resolve();
      });
    });
  }

}
