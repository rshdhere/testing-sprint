import { vi } from "vitest";

export const prismaClient = {
    requests: {
        create: vi.fn()
    }
}