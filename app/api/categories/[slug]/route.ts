import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { extractSlugFromUrl } from '@/app/utils/helpers';

// Rename the function to match the HTTP method
export async function GET(req: Request) {
  try {
    const slug = extractSlugFromUrl(req.url || '');

    if (typeof slug !== 'string' || !slug.trim()) {
      return NextResponse.json(
        { message: 'Invalid category slug' },
        { status: 400 }
      );
    }

    const category = await prisma.category.findUnique({
      where: {
        name: slug.toLowerCase(),
      },
    });

    if (!category) {
      return NextResponse.json(
        { message: 'No category found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      ...category,
      content: JSON.parse(category.content as string),
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}
