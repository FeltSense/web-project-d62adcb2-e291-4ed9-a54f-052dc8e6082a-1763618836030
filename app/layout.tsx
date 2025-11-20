import './globals.css';
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata = {
  title: 'Velocity Gym | Elevate Your Fitness',
  description: 'Unleash your potential at Velocity Gym. State-of-the-art facilities, expert trainers, and a motivating community to help you achieve your fitness goals.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body className="min-h-screen bg-gray-950 text-gray-100 antialiased font-outfit">
        {children}
      </body>
    </html>
  );
}
