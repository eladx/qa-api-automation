import assert from "node:assert";
import test, { describe } from "node:test";
import userDeleteData from "../data/userDeleteData.js";
import { deleteUser } from "../api/userApi.js";


describe("DELETE /users", () => {
    userDeleteData.forEach((testCase) => {
        test(`${testCase.id} - Delete user`, async () => {
            const response = await deleteUser(testCase.userId)

            assert.strictEqual(
                response.status,
                testCase.expectedStatus
            )
        })
    })
})

