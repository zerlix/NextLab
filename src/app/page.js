// app/page.js
"use client";

// MD unterstützung
import { MDXProvider } from '@mdx-js/react';
import { useMDXComponents } from '../../mdx-components';
import Content from './content.mdx'; 

export default function HomePage() {
  return (
    <>
      <MDXProvider components={useMDXComponents({})}>
        <Content />
      </MDXProvider>
    </>
  );
}

