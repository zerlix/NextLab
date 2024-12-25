import TextTest from '@/components/Typography';
import Content from './content.mdx'; // Importiert die MDX-Datei
import { ThemeProviderComponent } from '@/components/themes/ThemeProvider'; // Importiert den ThemeProvider


export default function HomePage() {
  return (
    <>
        <Content /> {/* Rendert den Inhalt der MDX-Datei */}
    </>
  );
}

