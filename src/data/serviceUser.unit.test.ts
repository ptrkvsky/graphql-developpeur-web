import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';
import prismaMock from '@src/__tests__/__mocks__/prismaMock';
import { getAllUsers, signUpUser } from '@src/data/serviceUser';

const mockUser1: User = {
  id: 1,
  email: 'dlargeron@ideal-test.com',
  name: 'Didier',
  password: "génie de l'informatique",
  role: 'USER',
};

const mockUser2: User = {
  id: 1,
  email: 'johan@test.com',
  name: 'Johan',
  password: 'lorem ipsum',
  role: 'USER',
};

describe('User service test', () => {
  test('It should return a JWT object when signup', async () => {
    const jwtSecret = process.env.JWT_SECRET || 'pepperoni pizza';
    (prismaMock.user.create as jest.Mock).mockResolvedValue(mockUser1);

    const authPayload = await signUpUser(
      mockUser1.name,
      mockUser1.email,
      mockUser1.password
    );

    const decodedAuthPayload = jwt.verify(authPayload.token, jwtSecret);
    if (typeof decodedAuthPayload !== 'string') {
      expect(decodedAuthPayload).toStrictEqual({
        id: mockUser1.id,
        name: mockUser1.name,
        email: mockUser1.email,
        role: mockUser1.role,
        iat: decodedAuthPayload.iat,
      });
    } else {
      throw new Error('This is not a valide token');
    }
  });

  test('Get all users test', async () => {
    const mockUsers = [mockUser1, mockUser2];
    (prismaMock.user.findMany as jest.Mock).mockResolvedValue(mockUsers);

    const users = await getAllUsers();
    expect(users).toBe(mockUsers);
  });
});
