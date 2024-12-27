"use client";
// MD unterstützung
import { MDXProvider } from '@mdx-js/react';
import { useMDXComponents } from '../../mdx-components';

// Theme CSS / Material UI
import { ThemeProviderComponent } from '@/components/themes/ThemeProvider'

import { SessionProvider } from "next-auth/react";

// Components
import Navbar from '@/components/Navbar';
import ThemeSwitcher from '@/components/themes/ThemeSwitcher';
//Custom CSS
import '@/styles/main.css';

// Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';




export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <ThemeProviderComponent>
          <Navbar />
          <MDXProvider components={useMDXComponents({})}>
            <main style={{ width: '80%', margin: '0 auto' }}>
            <SessionProvider>{children}</SessionProvider>
            </main>
          </MDXProvider>
          <ThemeSwitcher />
        </ThemeProviderComponent>
      </body>
    </html >
  );
}
