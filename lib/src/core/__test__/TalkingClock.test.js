import TalkingClock from "../TalkingClock";

describe("Talking Clock", () => {
  it("should return value getTimeInWord", () => {
    const stubClockType = {
      talk: jest.fn(() => "Hello"),
    };
    const talkingClock = new TalkingClock(stubClockType);
    expect(talkingClock.getTimeInWord()).toEqual("Hello");
  });
});
