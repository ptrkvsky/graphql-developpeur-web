import { Category } from '@prisma/client';
import prisma from '@src/prisma/client';

/**
 * CREATE
 */
export const createCategory = async (name: string): Promise<Category> => {
  return prisma.category.create({
    data: {
      name,
    },
  });
};

/**
 * READ
 */
export const getCategory = async (id: number): Promise<Category | null> => {
  const category = await prisma.category.findUnique({
    where: {
      id,
    },
  });

  return category;
};

export const getAllCategorys = async (): Promise<Category[]> => {
  return prisma.category.findMany();
};

/**
 * UPDATE
 */
type DataUpdate = {
  id: number;
};
export const updateCategory = async (
  id: number,
  name: string
): Promise<Category | null> => {
  const category = await prisma.category.update({
    data: {
      name,
    },
    where: {
      id,
    },
  });

  return category;
};

/**
 * DELETE
 */
export const deleteCategory = async (id: number): Promise<Category | null> => {
  const category = await prisma.category.delete({
    where: {
      id,
    },
  });

  return category;
};
