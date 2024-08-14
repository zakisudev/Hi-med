import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { extractSlugFromUrl } from '@/app/utils/helpers';

export async function handler(req: NextRequest) {
  if (req.method === 'GET') {
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
          name: slug.toLowerCase()
        }
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
  } else {
    return NextResponse.json(
      { message: 'Method not allowed' },
      { status: 200 }
    );
  }
}