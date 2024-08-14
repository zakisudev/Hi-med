import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const doctors = await prisma.doctor.findMany();
      if (!doctors || doctors.length === 0) {
        return res.status(404).json({ message: 'No doctors found' });
      }

      res.status(200).json(doctors);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
