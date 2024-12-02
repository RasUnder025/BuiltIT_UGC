import { EnvVarWarning } from "@/components/env-var-warning";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

  const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "CaptainSide UGC",
  description: "Enter the world of Captain Side Gaming, where gamers compete for glory and prizes. Join thrilling tournaments across popular game titles, showcase your skills, and win real rewards. Our platform offers easy registration, fair matchmaking, and exciting competitions for players of all levels. Start your journey to gaming stardom and prize-winning today!",
  applicationName: 'CaptainSide BuiltIT',
  referrer: 'origin-when-cross-origin',
  creator: 'Clifford'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
                {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
