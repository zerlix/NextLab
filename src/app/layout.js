"use client";
// MD unterstützung
import { MDXProvider } from '@mdx-js/react';
import { useMDXComponents } from '../../mdx-components';

// Theme CSS / Material UI
import { ThemeProviderComponent } from '@/components/themes/ThemeProvider'

// Components
import Navbar from '@/components/Navbar';

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
            <main>{children}</main>
          </MDXProvider>

        </ThemeProviderComponent>
      </body>
    </html >
  );
}
