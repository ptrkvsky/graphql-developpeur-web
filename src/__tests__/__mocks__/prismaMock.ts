import { mockDeep, mockReset, MockProxy } from 'jest-mock-extended';
import { PrismaClient } from '@prisma/client';
import prisma from '@src/lib/prisma/client';

jest.mock('@src/prisma/client', () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>(),
}));

const prismaMock = prisma as unknown as MockProxy<PrismaClient>;

beforeEach(() => {
  mockReset(prismaMock);
});

export default prismaMock;
