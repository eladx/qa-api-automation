import test, { describe } from "node:test";
import assert from "node:assert";

import userPatchData from "../data/userPatchData.js";
import { patchUser } from "../api/userApi.js";

describe("PATCH /users", () => {
    userPatchData.forEach((testCase) => {

        test(`${testCase.id} - Patch user email`, async () => {

            const response = await patchUser(testCase.userId, testCase.email)
            
            assert.strictEqual(
                response.status,
                testCase.expectedStatus
            )

            assert.strictEqual(
                response.email,
                testCase.email
            )
        });

    });
})

