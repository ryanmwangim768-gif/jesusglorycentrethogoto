import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jesus Glory Centre Ministries | Thogoto, Kenya',
  description:
    'Welcome to Jesus Glory Centre Ministries in Thogoto, Kenya — a place of faith, hope, love and transformation. Join us for worship, fellowship and community.',
  openGraph: {
    title: 'Jesus Glory Centre Ministries | Thogoto, Kenya',
    description: 'A place of faith, hope, love and transformation.',
    type: 'website',
    locale: 'en_KE',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
