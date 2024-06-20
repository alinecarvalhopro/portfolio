import { Footer } from '@/components/Footer/Footer';
import '../Styles/globals.scss';
import Header from '@/components/Header/Header';
import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import Head from 'next/head';

const jost = Jost({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfólio Aline Carvalho',
  description: 'Desenvolvedora e UX/UI Designer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <Head>
        <meta name="color-scheme" content="light" />
      </Head>
      <body className={jost.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
