import { PrismaClient } from '@prisma/client';

// Singleton PrismaClient to prevent multiple instances
const globalForPrisma = global;
globalForPrisma.prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default async function Page() {
  try {
    const posts = await prisma.user.findMany();
    
    return (
      <div>
        <h1>User</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw new Error('Failed to fetch posts');
  }
}