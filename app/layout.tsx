import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aryan Raj — A maniac to his brother :(",
  description:
    "Software engineer building fast, reliable, and creative software.",
  openGraph: {
    title: "Aryan Raj — A maniac to his brother :(",
    description:
      "Software engineer building fast, reliable, and creative software.",
    url: "https://aryanraj.dev",
    siteName: "Aryan Raj",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
