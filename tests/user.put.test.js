import test, { describe } from "node:test";
import assert from "node:assert";

import userUpdateData from "../data/userUpdateData.js";
import { updateUser } from "../api/userApi.js";

describe("PUT /users", () => {
    userUpdateData.forEach((testCase) => {
        test(`${testCase.id} - Update user`, async () => {
            const response = await updateUser(testCase.userId, testCase.username, testCase.email)

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
        })
    })
})

