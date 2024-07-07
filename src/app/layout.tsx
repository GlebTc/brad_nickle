import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://bradnicklecpa.com'),
  title: {
    default: 'Brad Nickle CPA Professional Corporation',
    template: '%s - Brad Nickle CPA Professional Corporation',
  },
  description:
    'Brad Nickle CPA: over 20 years of professional experience, bookkeeping, tax and other services. Serving Hamilton, Ontario and surrounding areas.',
  twitter: {
    title: 'Brad Nickle CPA Professional Corporation',
    card: 'summary_large_image',
    description:
      'Brad Nickle CPA: over 20 years of professional experience, bookkeeping, tax and other services. Serving Hamilton, Ontario and surrounding areas.',
  },
  keywords: [
    'accounting',
    'bookkeeping',
    'tax',
    'hamilton',
    'ontario',
    'brad nickle',
    'cpa',
    'accountant',
    'tax accountant',
    'bookkeeper',
    'tax preparer',
    'tax preparation',
    'tax return',
    'tax filing',
    'tax services',
    'tax help',
    'tax advice',
    'tax planning',
    'tax strategy',
  ],
  creator: 'Brad Nickle CPA Professional Corporation',
  publisher: 'Brad Nickle CPA Professional Corporation',
  openGraph: {
    title: 'Brad Nickle CPA Professional Corporation',
    description:
      'Brad Nickle CPA: over 20 years of professional experience, bookkeeping, tax and other services. Serving Hamilton, Ontario and surrounding areas.',
    url: 'https://bradnicklecpa.com',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
