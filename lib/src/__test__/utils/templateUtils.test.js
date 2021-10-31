import { template } from "../../utils/templateUtils";

describe("templateUtils", () => {
  it("should return blank if no mach found", () => {
    expect(template("{{notmach}} abc", {})).toEqual(" abc");
  });
});
