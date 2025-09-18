import { PrismaClient } from "@prisma/client";
import { mockDeep } from 'vitest-mock-extended';

// new PrismaClient()

export const prismaClient = mockDeep<PrismaClient>()