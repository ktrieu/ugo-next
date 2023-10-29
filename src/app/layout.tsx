import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexendMedium = Lexend({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-lexend-medium",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UGO II",
  description: "UGO II: Our product is.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lexendMedium.variable}`}>{children}</body>
    </html>
  );
}
