import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ITPGLightsV2",
  description: "Control your lights with ITPGLightsV2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <link rel="shortcut icon" href="favicon1.ico" type="image/x-icon" />
    </html>
  );
}
