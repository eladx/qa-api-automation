import test, { describe } from "node:test";
import assert from "node:assert";
import userCreateData from "../data/userCreateData.js";
import { createUser } from "../api/userApi.js";

describe("POST /users", () => {

    userCreateData.forEach((testCase) => {

        test(`${testCase.id} - Create user`, async () => {

            const response = await createUser(testCase.username, testCase.email)

            assert.strictEqual(
                response.status,
                testCase.expectedStatus
            )

            assert.strictEqual(
                response.username,
                testCase.username
            )

            assert.strictEqual(
                response.email,
                testCase.email
            )
        });
    });
});


