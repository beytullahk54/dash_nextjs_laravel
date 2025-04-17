import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kodlooper Dashboard",
  description: "Modern dashboard with DaisyUI and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" data-theme="corporate">
      <body className={`${inter.className} min-h-screen`}>
        <div className="flex flex-col h-screen">
          <div className="flex-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
