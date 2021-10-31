import Clock24hr from "../../type/Clock24hr";

describe("Clock24hr", () => {
  let instance;
  beforeAll(() => {
    instance = new Clock24hr("00:00", "en");
  });
  it("should check the input format", () => {
    expect(instance.check()).toBeTruthy();
  });
  it("should check the input format expect false", () => {
    const instance1 = new Clock24hr("00:0", "en");
    expect(instance1.check()).toBeFalsy();
  });
  it("should check the input blank expect false", () => {
    const instance2 = new Clock24hr("", "en");
    expect(instance2.check()).toBeFalsy();
  });
  it("should have name and format defined", () => {
    expect(instance).toMatchObject({
      format: "h(h):mm",
      name: "24hr",
      time: "00:00",
    });
  });
  it("should talk", () => {
    expect(instance.talk()).toEqual("Midnight");
  });
});
