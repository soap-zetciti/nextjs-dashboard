import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ 
    weight: ['400', '700'],
    subsets: ['latin'] 
});

// Now it's your turn! In your fonts.ts file, 
// import a secondary font called Lusitana and pass it to the <p> element in your /app/page.tsx file. 
// In addition to specifying a subset like you did before, you should also specify different font weights. 
// For example, 400 (normal) and 700 (bold).