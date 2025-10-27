import type { Metadata } from "next";
import "./globals.css";




export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex-col justify-center">
        {children}
        </main>
      </body>
    </html>
  );
}
