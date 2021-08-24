import bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import prismaMock from '@src/__tests__/__mocks__/prismaMock';
import { getAllUsers, signupUser } from '@src/data/serviceUser';

const mockUser1: User = {
  id: 1,
  email: 'dlargeron@ideal-com.com',
  name: 'Didier',
  password: bcrypt.hashSync("génie de l'informatique", 3),
  role: 'USER',
};

const mockUser2: User = {
  id: 1,
  email: 'fpasquet@ideal-com.com',
  name: 'Florent',
  password: bcrypt.hashSync('WOOF WOOF', 3),
  role: 'USER',
};

describe('User service test', () => {
  // Signup user
  test('Signup user test', async () => {
    (prismaMock.user.create as jest.Mock).mockResolvedValue(mockUser1);

    const user = await signupUser(
      'Didier',
      'dlargeron@ideal-com.com',
      "génie de l'informatique",
      'USER'
    );
    expect(user).toBe(mockUser1);
  });

  // Get One

  // Get All
  test('Get all users test', async () => {
    const mockUsers = [mockUser1, mockUser2];
    (prismaMock.user.findMany as jest.Mock).mockResolvedValue(mockUsers);

    const users = await getAllUsers();
    expect(users).toBe(mockUsers);
  });
});
