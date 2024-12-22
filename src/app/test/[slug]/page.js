export default function Post({ params }) {
  const { slug } = params;

  return <div>Blog Post: {slug}</div>;
}

