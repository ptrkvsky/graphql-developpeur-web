import prisma from '@src/lib/prisma/client';
import { IPrismaContext } from '@src/lib/interfaces/IPrismaContext';

const prismaContext: IPrismaContext = {
  prisma,
};

export default prismaContext;
