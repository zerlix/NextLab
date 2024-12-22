// app/test/[slug]/route.js

export async function GET(req, { params }) {
  const { slug } = params; // Zugriff auf den dynamischen Parameter
  return new Response(`Post: ${slug}`);
}

export async function POST(req, { params }) {
  // Handle POST-Anfragen hier
  return new Response('Post request handled');
}
