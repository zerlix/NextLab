"use client";
// Theme CSS / Material UI
import { ThemeProviderComponent } from '@/components/themes/ThemeProvider'

// Auth Session
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
      <SessionProvider>
        <ThemeProviderComponent>
          <Navbar />
            <main style={{ width: '80%', margin: '0 auto' }}>
            {children}
            </main>
          <ThemeSwitcher />
        </ThemeProviderComponent>
        </SessionProvider>      
      </body>
    </html >
  );
}
