import { describe, expect, it, vi } from 'vitest';
import { app } from '..';
import request from 'supertest';

// deep mocking
vi.mock('../db', () => {
    return {
        prismaClient: {
            requests: {
                create: vi.fn()
            }
        }
    }
})

describe("tests the sum function", () => {
    it("should return 3 from 1 and 2", async () => {
        // you can use axios or fetch || supertest
        const response = await request(app).post('/sum').send({
            a: 1,
            b: 2
        })

        expect(response.body.answer).toBe(3);
        expect(response.statusCode).toBe(200);
    })

    it("Should fail when a number is too big", async () => {
        const res = await request(app).post("/sum").send({
            a: 1000000000000,
            b: 2
        });

        expect(res.body.message).toBe("sorry we dont support big numbers");
        expect(res.statusCode).toBe(422);
    })
})

describe("tests the multiply function", () => {
    it("should return 0 if anyone of the option is 0", async () => {
        // you can use axios or fetch || supertest
        const response = await request(app).post('/multiply').send({
            a: 1000,
            b: 0
        })

        expect(response.body.answer).toBe(0);
        expect(response.statusCode).toBe(200);
    })
})