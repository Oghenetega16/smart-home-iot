import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from "next/font/google";
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets:  ["latin"],
  variable: "--font-sans",
  weight:   ["400", "500", "600", "700", "800"],
  display:  "swap",
});

export const metadata: Metadata = {
  title: 'Smart Home Security | Dashboard',
  description: 'IoT smart home security system dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${plusJakartaSans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
