// import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div>
        <h1>Brilian's Blog</h1>
        <p>🤟 Welcome to my tech blog. 💻</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div>
        <br />
        <p>Developer by Brilian</p>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <head></head>
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
