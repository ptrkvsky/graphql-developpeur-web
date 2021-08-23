import { User } from '@prisma/client';
import prismaMock from '@src/__tests__/__mocks__/prismaMock';
import { getAllUsers } from '@src/data/serviceUser';

const mockUser1: User = {
  id: 1,
  email: 'dlargeron@ideal-com.com',
  name: 'Didier',
  password: "génie de l'informatique",
  role: 'USER',
};

const mockUser2: User = {
  id: 1,
  email: 'fpasquet@ideal-com.com',
  name: 'Florent',
  password: 'WOOFWOOF',
  role: 'USER',
};

describe('User service test', () => {
  // Get One

  // Get All
  test('Get all users test', async () => {
    const mockUsers = [mockUser1, mockUser2];
    (prismaMock.user.findMany as jest.Mock).mockResolvedValue(mockUsers);

    const users = await getAllUsers();
    expect(users).toBe(mockUsers);
  });
});
