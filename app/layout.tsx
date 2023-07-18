import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from '@next/font/local';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pokedex',
};

const pokemon = localFont({
  src: [
    {
      path: '../public/fonts/Pokemon Solid.ttf',
      weight: '400',
    },
  ],
  variable: '--pokemon-solid',
});

const jost = localFont({
  src: [
    {
      path: '../public/fonts/Jost-Regular.ttf',
      weight: '400',
    },
  ],
  variable: '--jost',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${pokemon.variable} ${jost.variable} font-sans `}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
