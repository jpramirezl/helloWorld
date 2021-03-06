var request = require("request");
var helloWorld = require("../src/web.js")
var base_url = "http://localhost:3000/"

describe("Hello World Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns Hello World", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(body).toBe("Hola Mundo");
        done();
      });
    });

    it("returns Name page", function(done) {
      request.get(base_url + "name", function(error, response, body) {
        expect(body).toBe("mis amigas");
        helloWorld.closeServer();
        done();
      });
    });


  });
});
