import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/app/database/prismadb';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const { name, image } = body;

    if (!currentUser?.id) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        name,
        image,
      },
    });

    return NextResponse.json(updatedUser);
  } catch {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};
