import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  if (req.method === 'GET') {
    try {
      const categories = await prisma.category.findMany();
      if (!categories || categories.length === 0) {
        return NextResponse.json(
          { message: 'No categories found' },
          { status: 200 }
        );
      }
      const cats = categories.map((category: any) => {
        return {
          ...category,
          content: JSON.parse(category.content as string),
        };
      })
      return NextResponse.json(cats);
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { message: 'Something went wrong' },
        { status: 200 }
      );
    }
  } else {
    return NextResponse.json(
      { message: 'Method not allowed' },
      { status: 200 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { name, image, description, content } = await req.json();

    if (!name) {
      return NextResponse.json(
        { message: 'Name is required' },
        { status: 200 }
      );
    }
    if (!description) {
      return NextResponse.json(
        { message: 'Description is required' },
        { status: 200 }
      );
    }
    if (!content || !Array.isArray(content)) {
      return NextResponse.json(
        { message: 'Content is required' },
        { status: 200 }
      );
    }

    const category = await prisma.category.create({
      data: { name, description, image, content: JSON.stringify(content) },
    });

    if (!category) {
      return NextResponse.json(
        { message: 'Category not created' },
        { status: 200 }
      );
    }
    return NextResponse.json({ category }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 200 }
    );
  }
}
