import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'KK Talks | Karunakar Taggella — Real Estate Investment Advisor',
  description:
    'Karunakar Taggella, Founder of KK Talks. Real Estate Guide & Property Investment Advisor. 16+ years in sales and business development. Hyderabad.',
  openGraph: {
    title: 'KK Talks | Karunakar Taggella — Real Estate Investment Advisor',
    description: 'Real Estate Guide & Property Investment Advisor. Hyderabad, Telangana.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
