import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HP Wand Magic - WebAR Application",
  description: "魔法の杖を用いた WebAR アプリケーション",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}