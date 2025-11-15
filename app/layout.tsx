import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blueprint Branding Kreatives - Digital Marketing & Brand Development",
  description: "A digital marketing and brand development company providing creative solutions to make your brand memorable, trusted, and reliable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

