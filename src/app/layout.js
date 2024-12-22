"use client";
import '@/styles/main.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from '@/components/Navbar';
import { ThemeProviderComponent } from '@/components/ThemeProviderComponent'  // BENANNTER IMPORT


export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <ThemeProviderComponent>
          <Navbar />
          <main>{children}</main>
        </ThemeProviderComponent>
      </body>
    </html>
  );
}
