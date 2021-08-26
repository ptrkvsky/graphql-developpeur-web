import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import prismaMock from '@src/__tests__/__mocks__/prismaMock';
import { getAllUsers, signUpUser } from '@src/data/serviceUser';
import { IAuthPayLoad } from '@src/lib/interfaces/IAuthPayLoad';

const mockUser1: User = {
  id: 1,
  email: 'dlargeron@ideal-com.com',
  name: 'Didier',
  password: "génie de l'informatique",
  role: 'USER',
};

const mockAuthToken: IAuthPayLoad = {
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJkbGFyZ2Vyb25AaWRlYWwtY29tLmNvbSIsIm5hbWUiOiJEaWRpZXIiLCJwYXNzd29yZCI6ImfDqW5pZSBkZSBsJ2luZm9ybWF0aXF1ZSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjI5OTU0OTcyfQ.MWZlEettZwLTNxSKpz_BI1xCm6TI0gc-Zrh5s_WU8-Q',
};

const passwordUser2 = bcrypt.hashSync('WOOF WOOF', 3);
const mockUser2: User = {
  id: 1,
  email: 'fpasquet@ideal-com.com',
  name: 'Florent',
  password: passwordUser2,
  role: 'USER',
};

describe('User service test', () => {
  test('Signup user test', async () => {
    const jwtSecret = process.env.JWT_SECRET || 'pepperoni pizza';
    (prismaMock.user.create as jest.Mock).mockResolvedValue(mockUser1);

    const authPayload = await signUpUser(
      mockUser1.name,
      mockUser1.email,
      mockUser1.password,
      mockUser1.role
    );

    const decodedAuthPayload = jwt.verify(authPayload.token, jwtSecret) as User;
    console.log(decodedAuthPayload);
    expect(decodedAuthPayload.email).toBe(mockUser1.email);
  });

  test('Get all users test', async () => {
    const mockUsers = [mockUser1, mockUser2];
    (prismaMock.user.findMany as jest.Mock).mockResolvedValue(mockUsers);

    const users = await getAllUsers();
    expect(users).toBe(mockUsers);
  });
});
