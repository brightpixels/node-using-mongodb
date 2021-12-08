const fs = require("fs");
const expect = require("expect.js");

describe("Mongo tests @mongo", function () {
  it("Mongoose promise", function (done) {
    try {
      expect(fs.readFileSync("index.js").toString()).to.contain(
        "mongoose.Promise = global.Promise;"
      );
      done();
    } catch (error) {
      done(new Error("No mongo promise in your code"));
    }
  });

  it("Mongoose connected", function (done) {
    try {
      expect(fs.readFileSync("index.js").toString()).to.contain(
        'mongoose.connect("mongodb://localhost/productsdb"'
      );
      done();
    } catch (error) {
      done(new Error("No connection to Mongo detected"));
    }
  });
});
