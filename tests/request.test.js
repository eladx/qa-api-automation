import test from "node:test";
import assert from "node:assert";
import { request } from "../api/userApi.js";


test("Request should throw an error when endpoint is unreachable", async () => {
    await assert.rejects(
        request(
            "https://this-url-does-not-exist-12345.com",
            "GET"
        )
    );
});