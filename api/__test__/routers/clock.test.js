const request = require("supertest");
const app = require("../../app");

describe("GET /:lang/talk/:time?", () => {
  it("responds with json", (done) => {
    request(app)
      .get("/api/v1/clock/en/talk/00:00")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.word).toEqual("Midnight");
        done();
      });
  });
  it("responds with json when pass hour single digit", (done) => {
    request(app)
      .get("/api/v1/clock/en/talk/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
  it("responds with json err", (done) => {
    request(app)
      .get("/api/v1/clock/en/talk/00:0")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400, { err: "Time should be format like h(h):mm" }, done);
  });
});
