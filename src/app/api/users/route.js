// app/api/users/route.js
import { prisma } from '@/lib/prismaClient';

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return new Response(JSON.stringify(users), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response('Failed to fetch users', { status: 500 });
  }
}