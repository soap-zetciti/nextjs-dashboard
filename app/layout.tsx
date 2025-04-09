import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='${inter.classname} antialiased'>{children}</body>
      {/* <body className='${inter.classname}'>{children}</body> */}
    </html>
  );
}
