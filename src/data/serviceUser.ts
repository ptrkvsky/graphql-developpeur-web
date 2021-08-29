import { Role, User } from '@prisma/client';
import prisma from '@src/lib/prisma/client';

/**
 * CREATE
 */
export const createUser = async (
  name: string,
  email: string,
  password: string,
  role: Role
): Promise<User> => {
  return prisma.user.create({
    data: {
      name,
      email,
      password,
      role,
    },
  });
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
