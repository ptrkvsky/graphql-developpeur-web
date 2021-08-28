import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Role, User } from '@prisma/client';
import prisma from '@src/lib/prisma/client';
import { IAuthPayLoad } from '@src/lib/interfaces/IAuthPayLoad';
import { ISession } from '@src/lib/interfaces/ISession';
import { UserInputError } from 'apollo-server';

/**
 * Signup
 */
export const signUpUser = async (
  name: string | null,
  email: string,
  password: string,
  role: Role
): Promise<IAuthPayLoad> => {
  const passwordCrypted = bcrypt.hashSync(password, 3);
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: passwordCrypted,
      role,
    },
  });
  const session: ISession = {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    role: newUser.role,
  };
  const jwtSecret = process.env.JWT_SECRET || 'pepperoni pizza';
  const token = { token: jwt.sign(session, jwtSecret) };
  return token;
};

/**
 * Signin
 */
export const signInUser = async (
  email: string,
  password: string
): Promise<IAuthPayLoad> => {
  if (!email || !password) {
    throw new UserInputError('Invalid argument value');
  }
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) throw new Error('Unable to Login');
  const jwtSecret = process.env.JWT_SECRET || 'pepperoni pizza';
  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) throw new Error('Unable to Login');
  const token = { token: jwt.sign(user, jwtSecret) };
  return token;
};

/**
 * READ
 */
export const getUser = async (id: number): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return user;
};

export const getAllUsers = async (): Promise<User[]> => {
  return prisma.user.findMany();
};

/**
 * UPDATE
 */
export const updateUser = async (
  id: number,
  name: string,
  email: string,
  password: string,
  role: Role
): Promise<User> => {
  const user = await prisma.user.update({
    data: {
      name,
      email,
      password,
      role,
    },
    where: {
      id,
    },
  });

  return user;
};

/**
 * DELETE
 */
export const deleteUser = async (id: number): Promise<User | null> => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });

  return user;
};
