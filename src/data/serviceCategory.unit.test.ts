import { Category } from '@prisma/client';
import prismaMock from '@src/__tests__/__mocks__/prismaMock';
import { createCategory } from '@src/data/serviceCategory';

describe('category service tests', () => {
  describe('create category test', () => {
    test('It should create categegory with passed in args', async () => {
      const mockCategory: Category = {
        id: 1,
        name: 'PHP',
      };

      (prismaMock.category.create as jest.Mock).mockResolvedValue(mockCategory);

      const categoryCreated = await createCategory(mockCategory.name);

      expect(categoryCreated).toBe(mockCategory);
      expect(prismaMock.category.create).toHaveBeenCalledTimes(1);
      expect(prismaMock.category.create).toHaveBeenCalledWith({
        data: { name: mockCategory.name },
      });
    });
  });
});
