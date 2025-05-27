import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "RSVP Penaranda-Valencia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.variable} lang="en">
      <body className="min-h-screen bg-gradient-to-r from-yellow-100 via-pink-100 to-pink-200 font-sans">
        {children}
      </body>
    </html>
  );
}
