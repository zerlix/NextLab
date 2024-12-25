"use client";

import { usePathname } from 'next/navigation';

export default function Post() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();  // Holt den dynamischen Teil der URL

  return <div>Blog Post: {slug}</div>;
}

