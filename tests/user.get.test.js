import test, { describe } from "node:test";
import assert from "node:assert";
import userTestData from "../data/userData.js";
import { getUser } from "../api/userApi.js";

describe("GET /users", () => {
    userTestData.forEach((testCase) => {
        test(`${testCase.id} - getting user`, async () => {
            const response = await getUser(testCase.userId)

            assert.strictEqual(
                response.status,
                testCase.expectedStatus
            );

            assert.strictEqual(
                response.username,
                testCase.expectedUsername
            );
            assert.strictEqual(
                response.email,
                testCase.expectedEmail
            );
        });
    });

    test("Missing user should return 404", async () => {

        const response = await getUser(999); 

        assert.strictEqual(
            response.status,
            404
        );
        assert.strictEqual(
            Object.keys(response.data).length,
            0
        );
    });
});




