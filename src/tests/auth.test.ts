import { getAPIKey } from "../api/auth.js";
import { describe, expect, test } from "vitest";
describe("getAPIKey", (): void => {
  test("Expect apikey with no space to be invalid", (): void => {
    const headers = {
      authorization: "ApiKey12345",
    };
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });
  test("Expect apikey not startin with ApiKey to be invalid", (): void => {
    const headers = {
      authorization: "Apikey 12345",
    };
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });
  test("Expect valid apikey to pass", (): void => {
    const headers = {
      authorization: "ApiKey 12345",
    };
    const result = getAPIKey(headers);
    expect(result).toBe("12345");
  });
});
