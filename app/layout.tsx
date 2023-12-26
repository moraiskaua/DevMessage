import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ToasterContext from './contexts/ToasterContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DevMessage',
  description: 'Message App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <link rel="shortcut icon" href="/images/logo.png" />
      <body className={inter.className}>
        <ToasterContext />
        {children}
      </body>
    </html>
  );
}
