import { Category } from '@prisma/client';
import prismaMock from '@src/__tests__/__mocks__/prismaMock';
import {
  createCategory,
  getCategory,
  getAllCategorys,
  updateCategory,
  deleteCategory,
} from '@src/data/serviceCategory';

const mockCategory: Category = {
  id: 1,
  name: 'PHP',
};

const mockCategory2: Category = {
  id: 2,
  name: 'HTML',
};

const updatedMockCategory: Category = {
  id: 1,
  name: 'NodeJS',
};

describe('Category service tests', () => {
  // CREATE
  describe('Create category test', () => {
    test('It should create categegory with passed in args', async () => {
      (prismaMock.category.create as jest.Mock).mockResolvedValue(mockCategory);

      const categoryCreated = await createCategory(mockCategory.name);

      expect(categoryCreated).toBe(mockCategory);
      expect(prismaMock.category.create).toHaveBeenCalledTimes(1);
      expect(prismaMock.category.create).toHaveBeenCalledWith({
        data: { name: mockCategory.name },
      });
    });
  });

  // GET ONE
  describe('Get category test', () => {
    test('It should get categegory with passed in args', async () => {
      (prismaMock.category.findUnique as jest.Mock).mockResolvedValue(
        mockCategory
      );

      const category = await getCategory(mockCategory.id);
      expect(category).toBe(mockCategory);
    });
  });

  // GET ALL
  describe('Get all categorys test', () => {
    test('It should get all categegorys with passed in args', async () => {
      const mockCategorys = [mockCategory, mockCategory2];
      (prismaMock.category.findMany as jest.Mock).mockResolvedValue(
        mockCategorys
      );

      const categorys = await getAllCategorys();
      expect(categorys).toBe(mockCategorys);
    });
  });

  // UPDATE
  describe('Update category test', () => {
    test('It should update the category with passed in args', async () => {
      (prismaMock.category.update as jest.Mock).mockResolvedValue(
        updatedMockCategory
      );

      const category = await updateCategory(1, 'NodeJS');
      expect(category).toBe(updatedMockCategory);
    });
  });

  // DELETE
  describe('Delete category test', () => {
    test('It should delete the category with passed in args', async () => {
      (prismaMock.category.delete as jest.Mock).mockResolvedValue(mockCategory);

      const category = await deleteCategory(1);
      expect(category).toBe(mockCategory);
    });
  });
});
