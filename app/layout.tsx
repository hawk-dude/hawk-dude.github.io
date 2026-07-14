import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import TerminalWindow from "./ui/terminal-window";
import Nav from "./ui/nav";
import Footer from "./ui/footer";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oleksandr Yastrebov",
  description:
    "Portfolio of Oleksandr Yastrebov — computer science student, system administrator, and network engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-mono">
        <TerminalWindow>
          <Nav />
          <main className="flex-1 overflow-y-auto p-4 sm:p-6">{children}</main>
          <Footer />
        </TerminalWindow>
      </body>
    </html>
  );
}
