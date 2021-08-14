import { Post } from '@prisma/client';
import prisma from '@src/prisma/client';

// eslint-disable-next-line import/prefer-default-export
export const getAllPosts = async (): Promise<Post[]> => {
  return prisma.post.findMany();
};

export const getPost = async (postId: number): Promise<Post | null> => {
  return prisma.post.findUnique({
    where: {
      id: postId,
    },
  });
};

// export const createPost = async (name: string): Promise<Post> => {
//   return prisma.post.create({
//     data: {
//       createdAt: Date.now(),
//       updatedAt: Date.now(),
//       name,
//       title: "Premier post",

//     },
//   });
// };
