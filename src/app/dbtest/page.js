import { PrismaClient } from '@prisma/client';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


// Singleton PrismaClient to prevent multiple instances
const globalForPrisma = global;
globalForPrisma.prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default async function Page() {
  try {
    const posts = await prisma.user.findMany();
    
    return (
      <>
        <h1>User</h1>
        <TableContainer component={Paper} sx={{ width: '80%', margin: '0 auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>{post.name}</TableCell>
                  <TableCell>{post.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw new Error('Failed to fetch posts');
  }
}