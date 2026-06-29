import { describe, expect, it } from "vite-plus/test";
import { relations } from "./relations";

describe("drizzle relations", () => {
  it("exports a defined relations object", () => {
    expect(relations).toBeDefined();
    expect(typeof relations).toBe("object");
  });
});
