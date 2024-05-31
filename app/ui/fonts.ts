// Schriftarten für die gesamte Anwendung

// 2te Schriftart Lusitana  hinzufügen
import { Inter, Lusitana } from 'next/font/google';


// Durch das Hinzufügen Inter zum <body>Element wird die Schriftart in Ihrer gesamten Anwendung angewendet. 
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });


  // wird an page.tsx übergeben