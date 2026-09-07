import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito.variable} suppressHydrationWarning>
      <body className={nunito.className}>
        {children}
      </body>
    </html>
  );
}