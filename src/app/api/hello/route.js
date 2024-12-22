// app/api/hello/route.js
export async function GET() {
  return new Response(JSON.stringify({ message: 'Hello from API in app folder!' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}