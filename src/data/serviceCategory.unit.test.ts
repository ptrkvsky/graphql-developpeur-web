import { Category } from '@prisma/client';
import prismaMock from '@src/__tests__/__mocks__/prismaMock';
import { createCategory, getCategory } from '@src/data/serviceCategory';

const mockCategory: Category = {
  id: 1,
  name: 'PHP',
};

describe('Category service tests', () => {
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

  describe('Get category test', () => {
    test('It should get categegory with passed in args', async () => {
      (prismaMock.category.findUnique as jest.Mock).mockResolvedValue(
        mockCategory
      );

      const category = await getCategory(mockCategory.id);
      expect(category).toBe(mockCategory);
    });
  });
});
